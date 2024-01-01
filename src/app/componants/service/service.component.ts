import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.sass'
})
export class ServiceComponent {
 constructor(private _Router:Router){

 }
 raute(){
 this._Router.navigateByUrl('/queation')
 }
}
