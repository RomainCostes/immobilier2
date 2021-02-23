import { Injectable } from '@angular/core';

import { IUser } from '../shared/IUser'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public seConnecter(username: string) {

    localStorage.setItem('ACCESS_TOKEN', "access token");
    localStorage.setItem('username', username);
    if (username == "Jean" || username == "jean") {
      localStorage.setItem('id', "1");
    } else if (username == "Romain" || username == "romain") {
      localStorage.setItem('id', "2");
    } else {
      localStorage.setItem('id', "3");
    }
  }

  public estConnecte() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public seDeconnecter() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public getUser() {
    return localStorage.getItem('username');
  }

  public getUserId() {
    return localStorage.getItem('id');
  }
}
