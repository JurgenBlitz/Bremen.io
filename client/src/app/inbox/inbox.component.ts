import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  user;
  error: string;
  constructor(
    public session: SessionService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {      this.user = this.session.getUser();
    this.session.getUserEvent()
      .subscribe(user => this.user = user);
    }

  ngOnInit() {
  }

}
