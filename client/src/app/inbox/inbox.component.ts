import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  user;
  userId;
  messageList: Array<any>;
  error: string;

  constructor(
    public session: SessionService,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {      this.user = this.session.getUser();
    this.session.getUserEvent()
      .subscribe(user => this.user = user);
    }

  ngOnInit() {
    this.messageService.getMessages(this.userId)
    .map((messageList) => {
     this.messageList = messageList;
   })
   .subscribe()
  }

}
