import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

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


  public clients: string[] = ['Aldahir', 'Josue', 'Genesis', 'Gia', 'Carlos'];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }


  public person = {
    'name': 'Aldahir',
    'age': 24,
    'address': 'Las acacias'
  }


  public myObservable: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap::', value))
  );

  public myPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Data!!!');
      resolve('Informacion!!');
    }, 3500);
  })


  public changeClient(): void {

    if(this.name == 'Aldahir') {
      this.name = 'Alisson';
      this.gender = 'female';
    } else {
      this.name = 'Aldahir';
      this.gender = 'male';
    }
  }

  public deleteClient() {
    this.clients.shift();
  }

}
