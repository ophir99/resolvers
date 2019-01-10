import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  data = [];
  constructor(private activatedR: ActivatedRoute) {
    this.activatedR.data.subscribe(resolvedData => {
      console.log("Data from Resolver", resolvedData);
      this.data = resolvedData.postsResolver;
    });
  }

  ngOnInit() {}
}
