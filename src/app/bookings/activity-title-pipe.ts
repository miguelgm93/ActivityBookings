import { Pipe, PipeTransform } from '@angular/core';
import { Activity } from '../domain/Activity.type';

@Pipe({
  name: 'activityTitle'
})
export class ActivityTitlePipe implements PipeTransform {

  transform(activity: Activity): string {
    return `${activity.name} en el ${activity.location} `;
  }

}
