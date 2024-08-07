import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  public name: string = 'Aldahir';
  public gender: string = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public changeClient(): void {

    if(this.name == 'Aldahir') {
      this.name = 'Alisson';
      this.gender = 'female';
    } else {
      this.name = 'Aldahir';
      this.gender = 'male';
    }
  }

}
