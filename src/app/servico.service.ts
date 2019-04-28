import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo';
import { carro } from '@angular/core';

@Injectable()
export class ServicoService {
  public lista:Veiculo[] = [];

  constructor() { }

  add(veiculo: Veiculo): void {
    let aux: Veiculo = {
      marca: veiculo.marca,
      valor: veiculo.valor,
      ipva: veiculo.ipva,
      tipo: 'carro'

    };
    this.lista.push(veiculo);
  }
}