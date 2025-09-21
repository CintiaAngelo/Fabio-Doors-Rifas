import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';

declare var feather: any;
declare var AOS: any;

interface Rifa {
  title: string;
  image: string;
  description: string;
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
export class RifasComponent implements OnInit, AfterViewInit { // Adicione AfterViewInit
  isModalOpen = false;
  selectedRifa: Rifa | null = null;
  selectedNumbers: number[] = [];
  totalNumbersArray: number[] = [];

  rifas: Rifa[] = [
    // ... seus dados de rifas ...
    {
      title: 'KIT COMPLETO PORTAS BMW SÉRIE 3',
      image: 'http://static.photos/automotive/640x360/5',
      description: 'Kit premium para BMW Série 3, incluindo todas as peças originais para instalação profissional.',
      price: 50,
      numbers: 100,
      date: '15/12/2023'
    },
    {
      title: 'FAROL DIANTEIRO AUDI A3',
      image: 'http://static.photos/automotive/640x360/2',
      description: 'Farol original com tecnologia LED para Audi A3 2015-2020.',
      price: 30,
      numbers: 100,
      date: '10/12/2023'
    },
    {
      title: 'RETROVISOR VW GOL',
      image: 'http://static.photos/automotive/640x360/3',
      description: 'Retrovisor elétrico esquerdo original para VW Gol 2010-2019.',
      price: 25,
      numbers: 80,
      date: '12/12/2023'
    },
    {
      title: 'TAMPA DE PORTA HONDA CIVIC',
      image: 'http://static.photos/automotive/640x360/4',
      description: 'Tampa de porta dianteira direita para Honda Civic 2016-2021.',
      price: 40,
      numbers: 120,
      date: '18/12/2023'
    }
  ];

  ngOnInit(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
    // A inicialização do Feather Icons foi movida para ngAfterViewInit
  }

  ngAfterViewInit(): void {
    // Inicializa o Feather Icons depois que a view do componente é renderizada.
    // Isso garante que ele encontre os ícones no HTML.
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  // ... o restante dos seus métodos (openRifaModal, closeRifaModal, etc.) permanecem os mesmos ...

  openRifaModal(rifa: Rifa): void {
    this.selectedRifa = rifa;
    this.selectedNumbers = [];
    this.totalNumbersArray = Array.from({ length: rifa.numbers }, (_, i) => i + 1);
    this.isModalOpen = true;
    
    // É uma boa prática chamar o replace() novamente aqui
    // para garantir que os ícones dentro do modal também sejam renderizados.
    setTimeout(() => {
        if (typeof feather !== 'undefined') {
          feather.replace();
        }
    }, 100);
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