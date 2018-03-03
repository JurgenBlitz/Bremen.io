import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'; //necesario?
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from '../../services/ad.service';


@Component({
  selector: 'app-show-ad',
  templateUrl: './show-ad.component.html',
  styleUrls: ['./show-ad.component.css']
})
export class ShowAdComponent implements OnInit {

  ad
  error:string;
  constructor (public session: SessionService, 
    private adService:AdService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.adService.show(params['id']).subscribe(ad => {
        console.log(ad)
        this.ad = ad;
      })
     })
  }

  backToProfile() {
  }
}
