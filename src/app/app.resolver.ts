import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { AppService } from "./app.service";
@Injectable({
  providedIn: "root"
})
export class AppResolver implements Resolve {
  constructor(private appService: AppService) {
    console.log("Resolver Constructor");
  }
  resolve() {
    console.log("Resolver Code");
    return this.appService.getPosts();
  }
}
