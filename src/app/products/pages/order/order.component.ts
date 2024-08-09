import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  public items: MenuItem[] | undefined;
  public isUpper: boolean = false;
  public orderBy: keyof Hero | '' = '';
  public direction: string = 'asc';

  public heroes: Hero[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'Update',
              icon: 'pi pi-refresh'
          },
          {
              label: 'Delete',
              icon: 'pi pi-times'
          }
      ];

      this.heroes = [
        {
          name: 'Superman',
          canFly: true,
          color: Color.blue
        },
        {
          name: 'Batman',
          canFly: false,
          color: Color.black
        },
        {
          name: 'Robin',
          canFly: false,
          color: Color.red
        },
        {
          name: 'Linterna verde',
          canFly: true,
          color: Color.green
        }
      ]
  }


  changeCase() {
    this.isUpper = !this.isUpper;
  }

  changeSort(value: keyof Hero) {
    this.orderBy = value;

    (this.direction == 'desc')
      ? this.direction = 'asc'
      : this.direction = 'desc';
  }

}
