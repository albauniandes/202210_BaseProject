import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffees: Array<Coffee> = [];
  tipos: Array<string> = [];
  cantidadesxtipo: Array<number> = [];

  constructor(private coffeeService: CoffeeService) { }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;

    coffees.forEach(element => {
      let pos = this.tipos.indexOf(element.tipo);
      if(pos <0 ){
        this.tipos.push(element.tipo);
        this.cantidadesxtipo[this.tipos.length-1] = 1;
      }
      else{
        this.cantidadesxtipo[pos]++;
      }
    });
    });
  }

  ngOnInit() {
    this.getCoffees();
  }
}
