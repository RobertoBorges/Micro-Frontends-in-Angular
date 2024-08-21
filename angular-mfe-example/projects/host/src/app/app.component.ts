import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host';

  constructor(private authService: MsalService) {}

  login() {
    const request: RedirectRequest = {
      scopes: ['user.read']
    };
    this.authService.loginRedirect(request);
  }

  logout() {
    this.authService.logoutRedirect();
  }
}
