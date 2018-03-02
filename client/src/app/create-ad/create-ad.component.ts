import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from '../../services/ad.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  imgUrl:string;
  title: string;
  category= ["Grupo busca músico", "Músico busca grupo"];
  description: string;
  city= ["Alicante", "Almería", "Badajoz", "Barcelona", "Bilbao", "Burgos", "Cáceres", "Cádiz",
  "Córdoba", "Gerona", "Granada", "Guadalajara", "Huelva", "La Coruña", "Las Palmas de Gran Canaria",
  "Málaga", "Madrid", "Murcia", "Oviedo", "Pamplona", "Salamanca", "Santander", "Santa Cruz de Tenerife",
  "Segovia", "Sevilla", "Toledo", "Valencia", "Vigo", "Vitoria", "Zaragoza"];
  instrument = ["Acordeón", "Armónica", "Bajo", "Batería", "Canto", "Clarinete", "Contrabajo", "DJ",	
  "Flauta", "Gaita", "Guitarra", "Kazoo", "Oboe", "Percusión", "Teclado", "Piano", "Saxo", "Sintetizador",
  "Teclado", "Trombón", "Trompeta", "Tuba", "Ukelele", "Viola", "Violín", "Violonchelo", "Otros"];
  styles= ["Cualquiera", "Acústica", "Bachata", "Blues", "Bolero", "Bossa Nova", "Cantautor", "Clásica",
    "Country", "Cumbia", "Dance", "Dubstep", "Electrónica", "Experimental", "Flamenco", "Folk",
    "Funk", "Garaje", "Gospel", "Grunge", "Hip hop", "Indie", "Jazz", "Latino", "Merengue", "Metal",
    "New Age", "New Wave", "Pop", "Pop-rock", "Psicodelia", "Punk", "R&B", "Ranchera", "Rap",
    "Reggae", "Rock", "Rockabilly", "Salsa", "Samba", "Ska", "Soul", "Swing"]

  userId 
    
  constructor (public session: SessionService, 
  private adService:AdService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.userId = params['id']
    // })
    // console.log(this.session.getUser())  
  }
  save(form){
    console.log(form.value)
    const title = this.title
    this.adService.editMyAd(form.value, this.userId)
    .map(user => this.router.navigate(['/profile', this.userId]))
    .subscribe()
  }
}
