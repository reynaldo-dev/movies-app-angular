import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { FollowingComponent } from './pages/following/following.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { PlayListComponent } from './pages/play-list/play-list.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    children: [
      { path: 'browse', component: BrowseComponent },
      { path: 'following', component: FollowingComponent },
      { path: 'trending', component: TrendingComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'play-list', component: PlayListComponent },
      { path: '**', redirectTo: 'browse' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
