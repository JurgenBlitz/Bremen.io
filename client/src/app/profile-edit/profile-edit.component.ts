import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
    user;
    error: string;
    constructor(
      public session: SessionService,
      private userService: UserService,
      private router: Router,
      private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.show(params["id"]).subscribe(user => {
        console.log(user);
        this.user = user;
      });
    });
  }

  editProfile (user, userId){
    
  }

}
