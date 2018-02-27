import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent implements OnInit {
  username: string;
  password: string;
  city: string;
  error: string;
  constructor(public session: SessionService, private router: Router) {}

  ngOnInit() {}

  signup() {
    this.session
      .signup(this.username, this.password, this.city)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(["/profile"]);
      }, err => (this.error = err));
  }
}