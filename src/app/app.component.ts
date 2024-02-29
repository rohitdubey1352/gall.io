import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageListComponent } from './image-list/image-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomeComponent, GalleryComponent, AboutUsComponent, ImageListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.css',
})

export class AppComponent {
 

}
