import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-christmaslist',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './christmaslist.component.html',
  styleUrl: './christmaslist.component.css'
})
export class ChristmaslistComponent {
  cardsData = [
    {
      title: 'Nintendo Switch - OLED Model: Mario Red Edition',
      subtitle: '$346.49',
      imageSrc: 'https://m.media-amazon.com/images/I/71vwxEAbq7L._SL1500_.jpg',
      description: 'Warp into a world of games with the Nintendo Switch – OLED Model: Mario Red Edition system. This limited-edition system features a console, dock, and Joy-Con™ controllers all in the iconic Mario Red color.',
      link: 'https://www.amazon.com/gp/aw/d/B09NCMZNJK/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=69b54d0f9926ec7f3d195fea004ce015&hsa_cr_id=0&qid=1700093752&sr=1-1-9e67e56a-6f64-441f-a281-df67fc737124&ref_=sbx_be_s_sparkle_lsi4d_asin_0_img&pd_rd_w=leM8B&content-id=amzn1.sym.417820b0-80f2-4084-adb3-fb612550f30b%3Aamzn1.sym.417820b0-80f2-4084-adb3-fb612550f30b&pf_rd_p=417820b0-80f2-4084-adb3-fb612550f30b&pf_rd_r=27NAGTHF43RJJ6WM7B0Z&pd_rd_wg=6aqfC&pd_rd_r=2d803672-2d2d-4f5a-8fb0-157fcf39563b&th=1'
    },
    {
      title: 'Meta Quest 3 128GB',
      subtitle: '$499.99',
      imageSrc: 'https://m.media-amazon.com/images/I/61KC7rKQFpL._SL1500_.jpg',
      description: 'Dive into extraordinary experiences with a mixed reality headset that transforms your home into an exciting new playground, where virtual elements blend into your actual surroundings.',
      link: 'https://www.amazon.com/Meta-Quest-128GB-Breakthrough-Reality-3/dp/B0C8VKH1ZH/ref=sr_1_3?crid=2OB3WHQ0RYGO6&keywords=meta%2Bquest%2B3&qid=1700094220&s=videogames&sprefix=Meta%2B%2Cvideogames%2C169&sr=1-3&th=1'
    },
    {
      title: 'Espresso Machine 15 Bar',
      subtitle: '$69.99',
      imageSrc: 'https://m.media-amazon.com/images/I/81naiPK+5rL._AC_SL1500_.jpg',
      description: 'Brew Like a Pro -Ihomekee CM6826T espresso machine is very easy to use, provide single or double shot espresso, with steam wand, you can brew cappuccino or latte at home!',
      link: 'https://www.amazon.com/gp/product/B0C9QFFCMV/ref=ox_sc_act_title_2?smid=AKAG6BQQX6C1Q&psc=1'
    },
    {
      title: '',
      subtitle: '',
      imageSrc: '',
      description: '',
      link: ''
    },
  ];
}
