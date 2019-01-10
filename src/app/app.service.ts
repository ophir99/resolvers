import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private hC: HttpClient) {}

  getPosts = () => this.hC.get("https://jsonplaceholder.typicode.com/posts");
}
