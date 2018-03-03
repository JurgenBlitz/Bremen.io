import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { city } from '../';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  imgUrl:string;
  username: string;
  description: string;
  city: String[]; 
  instrument = ["Acordeón", "Armónica", "Bajo", "Batería", "Canto", "Clarinete", "Contrabajo", "DJ",	
  "Flauta", "Gaita", "Guitarra", "Kazoo", "Oboe", "Percusión", "Teclado", "Piano", "Saxo", "Sintetizador",
  "Teclado", "Trombón", "Trompeta", "Tuba", "Ukelele", "Viola", "Violín", "Violonchelo", "Otros"];
  exp = [ "Principiante", "Intermedio", "Avanzado", "Profesional"];
  otherInstrument: string;
  error: string;
  userId

  constructor (public session: SessionService, 
  private userService:UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.city = city;
    this.route.params.subscribe(params => {
      this.userId = params['id']
    })
    console.log(this.session.getUser())  
  }

  save(form){
    console.log(form.value)
    const username = this.username
    this.userService.editMyUser(form.value, this.userId)
    .map(user => this.router.navigate(['/profile', this.userId]))
    .subscribe()
  }

}
