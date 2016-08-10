export class Token {
  access_token: string; // Token
  token_type: string; // Bearer
  expires_in: number; // 1209600 seconds equals 14 days
  issued: string; // GMT date
  expires: string; // GMT date

  constructor( at: string, tt: string, ei: number, is: string, ex: string ) {
    this.access_token = at;
    this.token_type = tt;
    this.expires_in = ei;
    this[ '.issued' ] = is;
    this[ '.expires' ] = ex;
  }
}
