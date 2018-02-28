import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  username: string;
  password: string;
  error: string;
  
  constructor (public session: SessionService, private router: Router) { }

  ngOnInit() {
  }

}
