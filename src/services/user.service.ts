import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IUserData} from "../models/auth.model";
import {Location} from "@angular/common";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getUsers(): Promise<IUserData[]> {
    const url = Location.joinWithSlash(
      environment.apiRoot || '', 'users'
    );

    return this.httpClient.get<IUserData[]>(url).toPromise();
  }

}
