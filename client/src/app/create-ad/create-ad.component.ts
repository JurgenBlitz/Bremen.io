import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from '../../services/ad.service';
import { city } from '../commondata/city';
import { instrument } from '../commondata/instrument';
import { styles } from './styles.js';

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
  city: String[]; 
  instrument: String[];
  styles: String[];
  error: string;
  userId 
  adId
    
  constructor (public session: SessionService, 
  private adService:AdService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  save(form){
    console.log(form.value)
    const title = this.title
    this.adService.createAd(form.value)
    .map(ad => this.router.navigate([`/show, ${ad._id}`])) //pasar parámetro de Id de anuncio?
    .subscribe()
  }
}
