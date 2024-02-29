import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styles: `
    .about_us{
      width: 100%;
      height: 100%;
    }
    .about_content{
      text-align: left;
      margin: 1rem;
    }
    .experience_content{
      text-align: left;
    }
    .experience_content h3{
      font-size: 2rem;
      border-bottom: 2px solid #232323;
      margin-bottom: 2rem;
    }
    .about_content .container, .experience, .grid{
      position: relative;
      display: grid;
      place-items: center;
      grid-template-columns: repeat(2, 1fr);
      margin: 2rem 0;
    }
    .grid{
      margin-left: 2rem;
    }
    .grid img:nth-child(1){
      width: 22rem;
      height: auto;
      background: orange;
      border-radius: 1rem;
      margin-right: 1rem;
      margin-bottom: 2rem;
    }
    .grid img:nth-child(2){
      width: 22rem;
      height: auto;
      background: rgb(240, 206, 15);
      border-radius: 1rem;
      margin-bottom: -4rem;
    }
    .grid span h3{
      background: #232323;
      color: #fff;
      padding: 3rem;
      border-radius: 1rem;
    }
    .container_content, .experience_content{
      width: 70%;
      font-size: 1.2rem;
    }
    .container_content h4{
      font-weight: 400;
    }
    .container_content::first-letter{
      font-size: 2.4rem;
      font-weight: 600;
    }
    .container_img img{
      position: relative;
      height: 70vh;
      border-radius: 1rem;
    }
    .about_us .footer {
     bottom: -100rem;
    }
  
    @media screen and (max-width: 720px) {
      .about_content .container, .experience, .grid{
        grid-template-columns: repeat(1, 1fr);
      }
      .about_content{
        text-align: center;
      }
      .grid{
        margin: 0;
      }
      .grid img:nth-child(1){
        margin-right: 0;
      }
    }


  `
})
export class AboutUsComponent {

  name: string;
  title: string;
  para: string;
  contentImg = 'https://images.pexels.com/photos/459277/pexels-photo-459277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  carImg1 = 'https://modern-car-rental.netlify.app/assets/cars%20(3)-CfPRMa_R.png';
  carImg2 = 'https://modern-car-rental.netlify.app/assets/cars%20(1)-51WpXNhh.png';

  constructor(){
    this.name='Home/About Us';
    this.title = 'About Our Company';
    this.para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda veritatis ipsum sequi, dolorem natus qui dolore, eligendi temporibus corrupti incidunt exercitationem quaerat iste et excepturi modi dignissimos hic cupiditate.'
  }
}
