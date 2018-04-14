import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  urlIdx:string = "https://paginaweb-116fb.firebaseio.com/productos_idx.json";
  cargando:boolean = true;

  constructor( private http: Http ) {

    this.cargar_productos();

  }

  public cargar_productos(){

    this.cargando = true;

    this.http.get( this.urlIdx ).subscribe( res => {

      console.log( res.json() );
      this.cargando = false;
      this.productos = res.json();

    });

    }

  }

