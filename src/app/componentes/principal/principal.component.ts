import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../clases/jugador';
import { Juego } from '../../clases/juego';
import { JugadoresService } from '../../servicios/jugadores.service';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  constructor(private jugadorService: JugadoresService, private juegoService: JuegoServiceService) {
    // Set local storage 
    // TEST
    //this.jugadorService.test();

    this.jugadorService.fetchAll();


    if(!localStorage.getItem("info-juegos"))
    {
      this.juegoService.getJuegos();
    }

    if(!localStorage.getItem("jugadorActual"))
    {
      let jugador: Jugador = new Jugador(); 
      localStorage.setItem("jugadorActual",JSON.stringify(jugador));
    }
  }

  ngOnInit() {
  }

 

}
