
import { Routes, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, Injectable } from '@angular/core';

import { Global, FechamentoCaixa } from "../global";



@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})

@Injectable()
export class CardHomeComponent implements OnInit {

  @ViewChild('formValidarCard', { static: true }) formValidarCard: NgForm

  constructor(private router: Router) { }

  totalFecha: number = 0
  guardarAqui: number = 0 // QUANDO INICIAR A PÁGINA VAI SER GUARDADA AQUI

  public totalValores: Array<number> = [];
  fechamento: any

  ngOnInit(): void {
    this.guardarValores();
    console.log(FechamentoCaixa.totalFechamento)
    console.log(localStorage.getItem('totalValores').length)
    console.log(FechamentoCaixa.soma.length)
    localStorage.vendas()
    localStorage.totalValores()

  }

  guardarValores () {
    this.validarLocalStorage()
    this.guardarAqui = JSON.parse(localStorage.getItem('vendas'))
    this.totalValores = JSON.parse(localStorage.getItem('totalValores'))
    this.totalValores.push(this.guardarAqui)
    localStorage['totalValores'] = JSON.stringify(this.totalValores)
    console.log(FechamentoCaixa.totalFechamento)
    localStorage.setItem('vendas', '')
  }

  validarLocalStorage() {
    if (localStorage.getItem('totalValores') == null) {
      localStorage['totalValores'] = JSON.stringify([])
    }
  }

  validarCard(rota: string) {
    if (localStorage.getItem('operador') == null) {
      alert("Função habilitada apenas com operador logado!")
    } else {
      if (localStorage.getItem('aberturaCaixa') == null) {
        if (rota == 'recarga') {
          this.router.navigate(['recarga'])
        } if (rota == 'identificaCliente') {
          this.router.navigate(['identificaCliente'])
        } if (rota == 'aberturaCaixa') {
          this.router.navigate(['aberturaCaixa'])
        } if (rota == 'fechamentoCaixa') {
          this.router.navigate(['fechamentoCaixa'])
        }
      }
    }
  }

  validarAbertura(rota: String) {
    if (localStorage.getItem('status') == '0') {
      alert("Nenhuma abertura encontrada!")
    } else {
      if (rota == 'recarga') {
        this.router.navigate(['recarga'])
      } if (rota == 'identificaCliente') {
        this.router.navigate(['identificaCliente'])
      } if (rota == 'fechamentoCaixa') {
        this.router.navigate(['fechamentoCaixa'])
      }
    }
  }

}



