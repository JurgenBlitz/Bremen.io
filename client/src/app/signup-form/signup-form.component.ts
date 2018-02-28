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
  city= [, "Alicante", "Almería", "Badajoz", "Barcelona", "Bilbao", "Burgos", "Cáceres", "Cádiz",
  "Córdoba", "Gerona", "Granada", "Guadalajara", "Huelva", "La Coruña", "Las Palmas de Gran Canaria",
  "Málaga", "Madrid", "Murcia", "Oviedo", "Pamplona", "Salamanca", "Santander", "Santa Cruz de Tenerife",
  "Segovia", "Sevilla", "Toledo", "Valencia", "Vigo", "Vitoria", "Zaragoza"];
  error: string;
  
  constructor(public session: SessionService, private router: Router) {}

  ngOnInit() {}

  signup() {
    this.session
      .signup(this.username, this.password, this.city[0])
      .subscribe(data => {
        console.log(data);
        this.router.navigate(["/edit-user"]);
      }, err => (this.error = err));
  }

  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }
}