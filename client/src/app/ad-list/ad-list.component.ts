import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from '../../services/ad.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})

export class AdListComponent implements OnInit {

  adList: Array<any>;
  error: string;
  constructor (public session: SessionService, 
    private adService:AdService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      this.adService.getList()
         .map((adList) => {
          this.adList = adList;
        })
        .subscribe()
    }

}
