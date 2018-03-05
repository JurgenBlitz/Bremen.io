import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from '../../services/ad.service';
import { city } from '../commondata/city';
// import { instrument } from '../commondata/instrument';
// import { styles } from './styles.js';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  imgUrl: string;
  title: string;
  category= ["Proyecto busca músico", "Músico busca proyecto"];
  description: string;
  city= ["Alicante", "Almería", "Badajoz", "Barcelona", "Bilbao", "Burgos", "Cáceres", "Cádiz",
  "Córdoba", "Gerona", "Granada", "Guadalajara", "Huelva", "La Coruña", "Las Palmas de Gran Canaria",
  "Málaga", "Madrid", "Murcia", "Oviedo", "Pamplona", "Salamanca", "Santander", "Santa Cruz de Tenerife",
  "Segovia", "Sevilla", "Toledo", "Valencia", "Vigo", "Vitoria", "Zaragoza"];
  instrument= ["Acordeón", "Armónica", "Bajo", "Batería", "Canto", "Clarinete", "Contrabajo", "DJ",	
  "Flauta", "Gaita", "Guitarra", "Kazoo", "Oboe", "Percusión", "Teclado", "Piano", "Saxo", "Sintetizador",
  "Teclado", "Trombón", "Trompeta", "Tuba", "Ukelele", "Viola", "Violín", "Violonchelo", "Otros"];
  styles= ["Cualquiera", "Acústica", "Bachata", "Blues", "Bolero", "Bossa Nova", "Cantautor", "Clásica",
  "Country", "Cumbia", "Dance", "Dubstep", "Electrónica", "Experimental", "Flamenco", "Folk",
  "Funk", "Garaje", "Gospel", "Grunge", "Hip hop", "Indie", "Jazz", "Latino", "Merengue", "Metal",
  "New Age", "New Wave", "Pop", "Pop-rock", "Psicodelia", "Punk", "R&B", "Ranchera", "Rap",
  "Reggae", "Rock", "Rockabilly", "Salsa", "Samba", "Ska", "Soul", "Swing"];
  error: string;
  userId 
  adId
    
  constructor (public session: SessionService, 
  private adService:AdService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  save(form){
    this.adService.createAd(form.value)
    .map(ad => {
      console.log('QQQ')
      console.log(ad);
      this.router.navigate(['/show', ad._id]) 
    })
    .subscribe()
  }
}
