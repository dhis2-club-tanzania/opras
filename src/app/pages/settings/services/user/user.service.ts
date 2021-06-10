import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: NgxDhis2HttpClientService) {}
  getUserDeatils(): any {
    return this.http.get('me');
  }
}
