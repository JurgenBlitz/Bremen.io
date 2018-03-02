import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:Array<any>
  error:string;
  constructor (public session: SessionService, 
    private userService:UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  logout() {
    this.session
      .logout()
      .catch(e => (this.error = e))
      .subscribe();
      this.router.navigate(["/signup"]);
  }
}
