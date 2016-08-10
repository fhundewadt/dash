import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

export const componentVersion: string = '1.0a';

@Component({
  // moduleId   : module.id,
  selector   : 'app-token-expire',
  templateUrl: 'token-expire.component.html',
  styleUrls  : [ 'app/shared/token-expire/token-expire.component.css' ]
})
export class TokenExpireComponent implements OnInit {
  @Input() expirationDate: string;

  tokenExpireVersion = componentVersion;
  expires_in: string;

  private future: Date;
  private diff: number;

  constructor() {
  }

  ngOnInit() {
    this.future = new Date(this.expirationDate);
    Observable.interval(1000).map(() => {
      this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
    }).subscribe(() => {
      this.expires_in = this.dhms(this.diff);
    });
  }

  dhms( t ) {
    var days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
      days + 'd',
      hours + 'h',
      minutes + 'm',
      seconds + 's'
    ].join(' ');
  }
}
