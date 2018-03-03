import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session.service";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user;
  error: string;
  constructor(
    public session: SessionService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.show(params["id"]).subscribe(user => {
        console.log(user);
        this.user = user;
      });
    });
  }

  logout() {
    this.session
      .logout()
      .catch(e => (this.error = e))
      .subscribe();
    this.router.navigate(["/signup"]);
  }
}
