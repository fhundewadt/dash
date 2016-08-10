import { Component, EventEmitter, OnInit, ElementRef } from '@angular/core';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ConfigService } from '../config.service';
import { NotificationsComponent } from '../notifications/notifications.component';
declare var jQuery: any;

@Component({
  selector  : '[navbar]',
  events    : [ 'toggleSidebarEvent', 'toggleChatEvent' ],
  directives: [ NotificationsComponent, TOOLTIP_DIRECTIVES, ROUTER_DIRECTIVES ],
  template  : require('./navbar.component.html')
})
export class NavbarComponent implements OnInit {
  toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
  toggleChatEvent: EventEmitter<any> = new EventEmitter();
  $el: any;
  config: any;

  constructor( el: ElementRef, config: ConfigService ) {
    this.$el = jQuery(el.nativeElement);
    this.config = config.getConfig();
  }

  toggleSidebar( state ): void {
    this.toggleSidebarEvent.emit(state);
  }

  toggleChat(): void {
    this.toggleChatEvent.emit(null);
  }

  ngOnInit(): void {
    setTimeout(() => {
      let $chatNotification = jQuery('#chat-notification');
      $chatNotification.removeClass('hide').addClass('animated fadeIn')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
          $chatNotification.removeClass('animated fadeIn');
          setTimeout(() => {
            $chatNotification.addClass('animated fadeOut')
              .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd' +
                ' oanimationend animationend', () => {
                $chatNotification.addClass('hide');
              });
          }, 8000);
        });
      $chatNotification.siblings('#toggle-chat')
        .append('<i class="chat-notification-sing animated bounceIn"></i>');
    }, 4000);

    this.$el.find('.input-group-addon + .form-control').on('blur focus', function ( e ): void {
      jQuery(this).parents('.input-group')
        [ e.type === 'focus' ? 'addClass' : 'removeClass' ]('focus');
    });
  }
}
