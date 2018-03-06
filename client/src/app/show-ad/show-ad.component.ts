import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from '../../services/ad.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-show-ad',
  templateUrl: './show-ad.component.html',
  styleUrls: ['./show-ad.component.css']
})
export class ShowAdComponent implements OnInit {

  ad
  user
  error:string;
  constructor (public session: SessionService, 
    private userService: UserService,
    private adService:AdService, private router: Router, private route: ActivatedRoute) {
      this.user = this.session.getUser();
      this.session.getUserEvent()
        .subscribe(user => this.user = user);
     }


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

  logout() {
    this.session
      .logout()
      .catch(e => (this.error = e))
      .subscribe();
  }
  
}
