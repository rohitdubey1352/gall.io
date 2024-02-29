import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  template: `

    <h2>{{title}}</h2>
    <h1>Images Credit List</h1>

    <div [class]="'container'">
      <ul>
        @for (item of data; track $index) {
          <li>
            <div [class]="'profile'">
              <h3>{{ item.user | uppercase}}</h3>
              <img [src]="item.userImageURL" alt={{item.user}}>
            </div>
            <br>
            <a href={{item.pageURL}}>
              {{ item.pageURL}}
            </a>
          </li>
        }
        
      </ul>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    ul{
      display: grid;
      place-items: center;
      text-align: left;
      grid-template-columns: repeat(3, 1fr);
    }
    li{
      width: 20rem;
      list-style: dotted;
      font-size: 1.2rem;
      margin: 2rem 4rem;
      font-family: 'Arial';
    }
    li a{
      font-size: 1rem;
      text-decoration: none;
      color: #232323;
    }
    .profile img{
      border-radius: 1rem;
      margin-top: 1rem;
    }
    h3{
      margin: 0;
      padding: 0;
    }
    @media screen and (max-width: 720px){
      ul{
        grid-template-columns: repeat(1, 1fr);
      }
      li{
        width: 15rem;
      }
    }
  `
})
export class ImageListComponent implements OnInit {

  title: string;

  constructor(){
    this.title = 'Home/List';
  }
  // .............................................

  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get<any>('https://pixabay.com/api/?key=42610401-b222a01f873a069b025162bca&q=cars&image_type=photo&pretty=true')
      .subscribe(data => {
        console.log(data.hits);
        this.data = data.hits; 
      });
  }
}
