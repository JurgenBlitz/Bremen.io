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
  city= ["Alicante", "Almería", "Badajoz", "Barcelona", "Bilbao", "Burgos", "Cáceres", "Cádiz",
  "Córdoba", "Gerona", "Granada", "Guadalajara", "Huelva", "La Coruña", "Las Palmas de Gran Canaria",
  "Málaga", "Madrid", "Murcia", "Oviedo", "Pamplona", "Salamanca", "Santander", "Santa Cruz de Tenerife",
  "Segovia", "Sevilla", "Toledo", "Valencia", "Vigo", "Vitoria", "Zaragoza"];
  instrument = ["Acordeón", "Armónica", "Bajo", "Batería", "Canto", "Clarinete", "Contrabajo", "DJ",	
  "Flauta", "Gaita", "Guitarra", "Kazoo", "Oboe", "Percusión", "Teclado", "Piano", "Saxo", "Sintetizador",
  "Teclado", "Trombón", "Trompeta", "Tuba", "Ukelele", "Viola", "Violín", "Violonchelo", "Otros"];
  exp = [ "Principiante", "Intermedio", "Avanzado", "Profesional"];
  
  constructor (public session: SessionService, private router: Router) { }

  ngOnInit() {
  }

}
