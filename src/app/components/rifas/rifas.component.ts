import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';

declare var feather: any;
declare var AOS: any;

interface Rifa {
  title: string;
  price: number;
  numbers: number;
  date: string;
}

@Component({
  selector: 'app-rifas',
  templateUrl: './rifas.component.html',
  styleUrls: ['./rifas.component.css'],
  standalone: true,
  imports: [NgIf, NgFor, NgClass]
})
export class RifasComponent implements OnInit {
  isModalOpen = false;
  selectedRifa: Rifa | null = null;
  selectedNumbers: number[] = [];
  totalNumbersArray: number[] = [];

  ngOnInit(): void {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
  }

  openRifaModal(rifa: Rifa): void {
    this.selectedRifa = rifa;
    this.selectedNumbers = [];
    this.totalNumbersArray = Array.from({ length: rifa.numbers }, (_, i) => i + 1);
    this.isModalOpen = true;
  }

  closeRifaModal(): void {
    this.isModalOpen = false;
    this.selectedRifa = null;
  }

  toggleNumberSelection(number: number): void {
    const index = this.selectedNumbers.indexOf(number);
    if (index === -1) {
      if (this.selectedNumbers.length < 5) {
        this.selectedNumbers.push(number);
      }
    } else {
      this.selectedNumbers.splice(index, 1);
    }
  }

  submitPayment(event: Event): void {
    event.preventDefault();
    if (this.selectedNumbers.length === 0) {
      alert('Por favor, selecione pelo menos um número para participar.');
      return;
    }
    alert('Compra realizada com sucesso! Em breve enviaremos os detalhes de pagamento.');
    this.closeRifaModal();
  }
}