import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  template: `

    <h1>
      {{title}}
    </h1>

    <div [class]="'img_gallery'">
      @for (item of data; track $index) {
        <div [class]="'card'">
          <img [src]="item.largeImageURL" alt="images">
          <div [class]="'content'">
            <h3>Credit: {{item.user}}</h3>
            <p><strong>Tags</strong>: {{item.tags | titlecase}}</p>
          </div>
        </div>
      }
    </div>

  `,
  styles: `
    .img_gallery{
      position: relative;
      width: 100%;
      height: auto;
      display: grid;
      place-items: center;
      gap: .6rem;
      margin-top: 2rem;
      grid-template-columns: repeat(3, 1fr);
    }
    .img_gallery .card{
      width: 24rem;
      height: auto;
      margin: 1rem 0;
      padding: .4rem;
      background: #fff;
      border-radius: 1rem;
    }
    h1{
      padding: 2rem 0 1rem 0;
    }
    .content{
      display: grid;
      gap: 1rem;
      margin: .6rem;
    }
    img{
      width: 23.2rem;
      height: 20rem;
      border-radius: 1rem;
    }
    @media screen and (max-width: 720px){
      .img_gallery img {
        width: 21.4rem;
        padding: .4rem;
      }
      .img_gallery .card{
        width: 22rem;
      }
      .img_gallery{
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `,
})

export class HomeComponent implements OnInit{
  title: string;
  constructor(){
    this.title = 'Unique Photo Gallery'
  }
  // ................

  httpClient = inject(HttpClient);
  
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get<any>('https://pixabay.com/api/?key=42610401-b222a01f873a069b025162bca&q=images&image_type=photo&pretty=true')
      .subscribe(data => {
        // console.log(data.hits);
        this.data = data.hits; 
      });
  }


}
