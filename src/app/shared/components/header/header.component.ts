import { Component, inject } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private uiService = inject(UiService);

  constructor() {}

  toggleSideBar() {
    this.uiService.toggleSideBar();
  }
}
