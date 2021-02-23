import { Injectable } from '@angular/core';
import { IPropriete } from '../shared/IPropriete';

@Injectable({
  providedIn: 'root'
})
export class ProprieteService {

  propriete: IPropriete[] = [
    {id: 1, nom: 'Maison1', adresse: '1 Rue', prix: 1000, proprietaire: '1'},
    {id: 2, nom: 'Maison2', adresse: '2 Rue', prix: 2000, proprietaire: '1'},
    {id: 3, nom: 'Maison3', adresse: '3 Rue', prix: 3000, proprietaire: '2'},
    {id: 4, nom: 'Maison4', adresse: '4 Rue', prix: 4000, proprietaire: '2'},
    {id: 5, nom: 'Maison5', adresse: '5 Rue', prix: 5000, proprietaire: '3'},
    {id: 6, nom: 'Maison6', adresse: '6 Rue', prix: 6000, proprietaire: '3'},
    {id: 7, nom: 'Maison7', adresse: '7 Rue', prix: 7000, proprietaire: '0'},
    {id: 8, nom: 'Maison8', adresse: '8 Rue', prix: 8000, proprietaire: '0'}
  ];

  constructor() { }

  sellHouse(id: number) {
    id--;
    this.propriete[id].proprietaire = '0';
  }

  buyHouse(id: number, id2: string) {
    id--;
    this.propriete[id].proprietaire = id2.toString();
  }
}
