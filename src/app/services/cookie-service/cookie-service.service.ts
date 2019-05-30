import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  public get(langKey: string): string {
    const cookieList: string = decodeURIComponent(document.cookie);
    const cookiePairs: string[] = cookieList.split(/;\s*/);
    const prefix = `${langKey}=`;

    for (const cookiePair of cookiePairs) {
      if (cookiePair.indexOf(prefix) === 0) {
        return cookiePair.substring(prefix.length);
      }
    }
    return '';
  }
}
