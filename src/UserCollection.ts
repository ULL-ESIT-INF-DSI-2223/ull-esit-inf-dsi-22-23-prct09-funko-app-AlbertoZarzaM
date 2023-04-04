

import * as fs from "fs";
import { User } from "./User.js";

export class UserCollection {

  private _users: User[];

  constructor() {
    this._users = [];

    const directorios = fs.readdirSync('./data', { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);

    for (let i = 0; i < directorios.length; i++) {
      const user = new User( directorios[i]);
      this._users.push(user);
    }
  }

  getUserByName(name: string): User {
    return this._users.find(user => user.nombre === name) as User;
  }

  addUser(user: User): void {
    this._users.push(user);
  }

  removeUserbyName(name: string): void {
    //borro el directorio
    fs.rmdirSync(`./data/${name}`, { recursive: true });
    this._users = this._users.filter(user => user.nombre !== name);
  }

  get users(): User[] {
    return this._users;
  }

  setusers(users: User[]) {
    this._users = users;
  }



}

