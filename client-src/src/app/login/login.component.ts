import { AfterViewInit, Component, NgZone, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

import { MemberService } from '../common';

@Component({
  selector: 'tfe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(
    private ngZone: NgZone,
    private memberService: MemberService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    gapi.signin2.render('g-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'light',
      onsuccess: googleUser => {
        this.ngZone.run(() => {
          this.memberService.login(googleUser).subscribe(() => this.router.navigate(['./profile']));
        });
      },
    });
  }
}
