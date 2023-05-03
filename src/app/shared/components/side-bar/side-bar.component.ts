import { Component, inject } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { NavLink } from './interfaces/nav-link.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  private uiService = inject(UiService);
  public isSideBarOpen: boolean = false;

  public navLinks: NavLink[] = [
    {
      label: 'Browse',
      icon: 'pi pi-play',
      path: './browse',
    },
    {
      label: 'Trending',
      icon: 'pi pi-arrow-up-right',
      path: './trending',
    },
    {
      label: 'Following',
      icon: 'pi pi-users',
      path: './following',
    },
    {
      label: 'Your favorites',
      icon: 'pi pi-heart',
      path: './favorites',
    },
    {
      label: 'Play list',
      icon: 'pi pi-list',
      path: './play-list',
    },
  ];

  constructor() {
    this.uiService.isOpen.subscribe((isOpen) => {
      this.isSideBarOpen = isOpen;
    });
  }
}
