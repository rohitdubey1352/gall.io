import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ImageListComponent } from './image-list/image-list.component';

export const routes: Routes = [
    {'path': '', component:HomeComponent},
    {'path': 'gallery', component:GalleryComponent},
    {'path': 'list', component:ImageListComponent},
    {'path': 'about', component:AboutUsComponent}
];
