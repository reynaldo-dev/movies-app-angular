import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggleSideBar() {
    this.isOpen.next(!this.isOpen.value);
  }
}
