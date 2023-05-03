import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UiService } from './services/ui.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SideBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SideBarComponent],
  providers: [UiService],
})
export class SharedModule {}
