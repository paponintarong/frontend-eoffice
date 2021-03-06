import { Component, OnInit } from "@angular/core";
import { BackendService } from "../backend.service";
import * as jwt_decode from "jwt-decode";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  userData: any;
  actionNumber: number = 0;
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.userData = jwt_decode(localStorage.getItem("token"));
    this.backendService.getCountDocumentByUser(this.userData.id).then(data => {
      this.actionNumber = data.dataList.users_action;
    })
  }
  openNav() {
    //ความกว้างของ slide menu
    document.getElementById("mySidenav").style.width = "320px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
