import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = "Mi primer App con Angular"
  public ArregloTarjetas: Tarjeta[]=[]

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:"video 1",subtitulo: "subtitulo video 1", image: "../assets/cake-chocolate.png"},
      {titulo:"video 2",subtitulo: "subtitulo video 2", image: "../assets/cake.png"},
      {titulo:"video 3",subtitulo: "subtitulo video 3", image: "../assets/chocolate-cake-2.jpeg"},
    ]
    
  }
}
