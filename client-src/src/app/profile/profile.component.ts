import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member, MemberService } from '../common';

@Component({
  selector: 'tfe-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public member: Member | null = null;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private memberService: MemberService,
  ) { }

  ngOnInit() {
    if (!this.memberService.isLoggedIn()) {
      this.router.navigate(['./login']);
    } else {
      this.memberService.profile().subscribe(member => this.member = member);
    }
  }

  signOut() {
    this.ngZone.run(() => {
      this.memberService.logout().subscribe(() => this.router.navigate(['./login']));
    });
  }
}
