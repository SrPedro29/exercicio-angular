import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {
  texto = '';
  frase ='Olá, Mundo';
  bigCrunch = 'https://srpedro29.github.io/BigCrunch/';

  corDaFonte = 'red';
  setColorFont(){
    if(this.corDaFonte == 'red'){
      this.corDaFonte ='green'
  }else{
    this.corDaFonte ='red'
  }
  }
  setTextContent(value: string){
    this.texto=value;
  }
}
