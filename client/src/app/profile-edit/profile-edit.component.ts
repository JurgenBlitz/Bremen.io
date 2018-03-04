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

  constructor() { }

  ngOnInit() {
  }

}
