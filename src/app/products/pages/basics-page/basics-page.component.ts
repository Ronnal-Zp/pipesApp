import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public name: string     = 'Aldahir';
  public lastname: string = 'Zamora';
  public fullname: string = 'RoNnY ALdaHIr ZaMoRA PLUas';

  public fecha: Date = new Date();

}
