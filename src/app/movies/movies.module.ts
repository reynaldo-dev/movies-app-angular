import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../shared/shared.module';
import { BrowseComponent } from './pages/browse/browse.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { FollowingComponent } from './pages/following/following.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { PlayListComponent } from './pages/play-list/play-list.component';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [MoviesComponent, BrowseComponent, TrendingComponent, FollowingComponent, FavoritesComponent, PlayListComponent, LayoutComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}
