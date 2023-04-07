import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url',
})
export class UrlPipe implements PipeTransform {
  transform(url?: string, type?: 'domain' | 'host'): string {
    if (url) {
      const host = url.split('/')[2];
      if (type === 'host' && host) {
        return host;
      }

      if (type === 'domain' && host) {
        const numberOfDotsInHost = host.split('.').length - 1;
        return numberOfDotsInHost > 1
          ? host.substring(host.indexOf('.') + 1, host.length)
          : host;
      }
    }
    return '';
  }
}
