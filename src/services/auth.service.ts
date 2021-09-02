import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IUserData} from "../models/auth.model";
import {Location} from "@angular/common";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  register(userData: IUserData): Promise<{success: boolean, message: string}> {
    const url = Location.joinWithSlash(
      environment.apiRoot || '', 'register'
    );

    return this.httpClient.post<{success: boolean, message: string}>(url, userData).toPromise();
  }

}
