import { Injectable } from '@angular/core';
import { IUser } from '../shared/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [
    {id: 1, budget: 30000, ndc: 'jean', mdp: 'jean', props: [1, 2]},
    {id: 2, budget: 40000, ndc: 'romain', mdp: 'romain', props: [3, 4]},
    {id: 3, budget: 50000, ndc: 'vincent', mdp: 'vincent', props: [5, 6]}
  ];

  constructor() { }

  getAll() {
    return this.users;
  }

  getById(id: number) {
    return this.users[id];
  }

  DelRoom(id: number): void {
    // this.users.next(this.rooms.value.filter(propriete => room.id !== id));
    // this.propriete.splice(index, 1)
  }

  getBudget(id: number) {
    id--;
    return this.users[id].budget;
  }
}
