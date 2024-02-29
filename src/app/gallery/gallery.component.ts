import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  template:`
      <div>
        <h2>{{name | uppercase}}</h2>
        <div [class]="'gallery'">
          <h1>{{title}}</h1>
          <div [class]="'Image_gallery'">
            @for (item of data; track $index) {
              <img [src]="item.largeImageURL" alt={{item.user}} />
            }
          </div>
        </div>
      </div>
  `,
  
  styles: `
    .gallery{
      width: 100%;
      margin: 3rem 0;
    }
    .Image_gallery{
      display:grid;
      place-items: center;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin: 4rem 0 2rem 0;
    }
    .Image_gallery img{
      position: relative;
      width: 24rem;
      height: 20rem;
      border-radius: 1rem;
      box-shadow: 14px 14px 4px rgb(255,255,255);
    }
    
    @media screen and (max-width: 720px){
      h1{
        width: 100%;
      }
      .Image_gallery{
        grid-template-columns: repeat(1, 1fr);
      }
    }

  `
})
export class GalleryComponent implements OnInit{

  name: string;
  title: string;

  constructor() {
    this.name = 'Home/Gallery';
    this.title = "Photo Gallery";
  }
 
  httpClient = inject(HttpClient);
  
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get<any>('https://pixabay.com/api/?key=42610401-b222a01f873a069b025162bca&q=aesthetics+arts&image_type=photo&pretty=true')
      .subscribe(data => {
        // console.log(data.hits);
        this.data = data.hits; 
      });
  }


}


