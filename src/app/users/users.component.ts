import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProprieteService } from '../services/propriete.service';
import { IUser } from '../shared/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  @Input() proprieteId!: number;
  @Input() proprietePropio!: number;

  constructor(private proprieteService: ProprieteService, private authServce: AuthService) { }

  ngOnInit(): void {
  }

  onSellHouse(id: number) {
    console.log('onSellHouse id: ' + id);
    this.proprieteService.sellHouse(id);
    
  }

  onBuyHouse(idHouse: number) {
    this.proprieteService.buyHouse(idHouse, this.authServce.getUserId());
    // this.proprieteId = parseInt(idStr);
  }

}

/*

users : nom utilisateur - mdp
proprietes :-nom -addresse -prix -proprio

acheter des biens dans une liste
revendre des biens

*/