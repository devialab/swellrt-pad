import { Component } from '@angular/core';
import { User } from '../shared';
import {Router} from "@angular/router";
import {UserService} from "../services";


@Component({
    selector: 'app-login',
    template: `
      <div class="panel panel-default text-center">
        <div class="panel-body">
          <h4>LOGIN</h4>
          <form style="margin-top:4em" (ngSubmit)="login()">
            <div class="form-group label-floating">
              <label class="control-label" for="loginNameInput">Name</label>
              <input class="form-control" id="loginNameInput" name="name" [(ngModel)]="nameInput">
            </div>
            <div class="form-group label-floating">
              <label class="control-label" for="loginPasswordInput">Password</label>
              <input class="form-control" id="loginPasswordInput" name="password" type="password" [(ngModel)]="passwordInput">
            </div>
            <button class="btn btn-primary">Login</button>
          </form>
        </div><!-- panel-body -->
      </div><!-- panel -->
    `
  })

export class LoginComponent {

  // The logged in user
  loggedUser: User;
  // Form fields
  nameInput: string;
  passwordInput: string;


  constructor(private userService: UserService, private router: Router) {
    userService.userLogged.subscribe(user => {
        this.loggedUser = user;
    });
  }

  login() {
    this.userService.login(this.nameInput, this.passwordInput);
  }

}