import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'ironman', 'captain', 'hulk', 'rosa'];
  heroBorrado: string = '';

  borrarHeroe() {
    console.log('borrando');
    this.heroBorrado = this.heroes.shift() || '';
  }

}
