import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ProprieteService } from './services/propriete.service';
import { UserService } from './services/user.service';
import { IPropriete } from './shared/IPropriete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Immobilier';
  
  proprietes: IPropriete[] = [];

  constructor(private proprieteService: ProprieteService, private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    this.proprietes = this.proprieteService.propriete;
  }

  seDeconnecter() {
    this.authService.seDeconnecter();
  }
}