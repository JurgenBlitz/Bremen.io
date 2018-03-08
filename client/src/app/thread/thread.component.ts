import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { AdService } from '../../services/ad.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  ad
  user
  thread: Array<Object>;
  error:string;
  content: string;
  threadId

  constructor (public session: SessionService, 
    private userService: UserService,
    private adService: AdService, 
    private messageService: MessageService,
    private router: Router, 
    private route: ActivatedRoute) {
      this.user = this.session.getUser();
      this.session.getUserEvent()
        .subscribe(user => this.user = user);
     }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.threadId = params['id']   
     })
  }

 save() { // id del hilo o meto *form?
  this.messageService.sendMessage(this.threadId, this.content)
  .map(thread => {
    console.log(thread);
  })
  .subscribe()
}

}
