import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(time: number): string {
    const currentDate = new Date();
    const date = new Date(time * 1000);

    const diffInMilliseconds = Math.floor(
      currentDate.getTime() - date.getTime()
    );
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 7 && diffInDays <= 30) {
      return 'over a week ago';
    } else if (diffInDays > 30) {
      return 'over a month ago';
    }

    if (diffInDays > 1) {
      return diffInDays + ' days ago';
    } else if (diffInDays === 1) {
      return '1 day ago';
    }

    if (diffInHours > 1) {
      return diffInHours + ' hours ago';
    } else if (diffInHours === 1) {
      return '1 hour ago';
    }

    if (diffInMinutes > 1) {
      return diffInMinutes + ' minutes ago';
    } else {
      return '1 minute ago';
    }
  }
}
