import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, computed, effect } from '@angular/core';
import { Activity } from '../../domain/Activity.type';
import { ActivityTitlePipe } from '../activity-title-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lab-bookings',
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, ActivityTitlePipe, FormsModule],
  template: `
  <article>
    <header>  
    <h2>
     {{activity | activityTitle}}
    </h2>
    <div [class]="activity.status">
      <span>{{ activity.location }}</span>
      <span>{{ activity.price | currency }}</span>
      <span>{{ activity.date | date }}</span>
      <span>{{ activity.status | uppercase }}</span>
    </div>
    </header>
    <main>
       <h4>Participantes</h4>
       <div>Panticipantes actuales: {{currentParticipants}}</div>
      <ul>
        <li>Nuevos participantes: {{newParticipants()}}</li>
        <li>Participantes totales: {{totalParticipants()}}</li>
        <li>Plazas disponibles: {{remainingPlaces()}}</li>
      </ul>     
    </main>
    <footer>
      <h4>Nuevas reservas</h4>
      <label for="newParticipans">¿Cuantos participantes quiere reservar?</label>
      @if (remainingPlaces() > 0){
      <input type="number" [ngModel]="newParticipants()" (ngModelChange)="newParticipants.set($event)" min="0" [max]="newMaxParticipants">
      <button [disabled]="canNotBook()" (click)="booked.set(true)">Reserva por {{bookingAmount() | currency}}</button>
      {{booked() ? 'Reservado correctamente' : ''}}
      } @else{
        <button class="secondary outlined" (click)="newParticipants.set(0)">Reiniciar</button>
        <span>Lo sentimos, no quedan plazas disponibles</span>
      }
    </footer>
    </article>
  `,
  styles: `
  .draft{
    color:violet;
    font-style:italic;
  }
  .published{
    color:grey;
  }
  .confirmed{
    color:green;
  }
  .sold-out{
    color:red;
    font-style:italic;
  }
  .done{
    color:orange;
    font-style:italic;
  }
  .cancelled{
    color:red;
    font-style:italic;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Bookings {
 activity:Activity = {
  id:1,
  name:'Carreras de karts',
  slug:'carreras-karts',
  location:'circuito de campillos',
  price:100,
  date:new Date(2025, 7, 5),
  maxParticipants:15,
  minParticipants:4,  
  status:'draft',
  duration:2,
  userId:1
 };
 readonly currentParticipants=3;
 readonly newParticipants= signal(0); 
 readonly booked = signal(false);
 readonly newMaxParticipants = this.activity.maxParticipants - this.currentParticipants;
 readonly totalParticipants = computed(()=> this.currentParticipants + this.newParticipants())
 readonly remainingPlaces = computed (()=> this.activity.maxParticipants - this.totalParticipants())
 readonly canNotBook = computed (()=> this.booked() || this.newParticipants() === 0)
 readonly bookingAmount = computed(()=> this.newParticipants() * this.activity.price)

 constructor(){
  effect(()=> {
    const totalParticipants = this.totalParticipants();
    const activity = this.activity;
    if(totalParticipants >= activity.maxParticipants){
      activity.status='sold-out';
    } else if(totalParticipants >= activity.minParticipants){
      activity.status='confirmed';
    } else{
      activity.status='published'
    }
  });
 }
}
