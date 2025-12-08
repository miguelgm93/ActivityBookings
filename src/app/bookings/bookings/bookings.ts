import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Activity } from '../../domain/Activity.type';
import { ActivityTitlePipe } from '../activity-title-pipe';

@Component({
  selector: 'lab-bookings',
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, ActivityTitlePipe],
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
    <main>Panticipantes actuales: {{currentParticipants}}</main>
    <footer>
      <button>Reserva ya!</button>
    </footer>
    </article>
  `,
  styles: `
  .draft{
    color:violet;
    font-style:italic;
  }
  .published{
    color:lightgreen;
  }
  .confirmed{
    color:green;
  }
  .sold-out{
    color:green;
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
  minParticipants:2,
  status:'draft',
  duration:2,
  userId:1
 };
 currentParticipants=3;
}
