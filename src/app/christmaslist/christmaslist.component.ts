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
      title: 'Men’s Gordon Lyons ¼-Zip Sandstone Heather',
      subtitle: '$62.00',
      imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A5GL2_7B8_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
      description: 'The Men’s Gordon Lyons ¼-Zip is a heavyweight, sweater-knit fleece made with a 53%-recycled main fabric. It’s a warm, comfortable layer for cool-to-cold conditions.',
      link: 'https://www.thenorthface.com/en-us/mens/mens-fleece/mens-fleece-pullover-c829794/mens-gordon-lyons-1-4-zip-pNF0A5GL2?color=7B8'
    },
    {
      title: 'Sonos Move 2',
      subtitle: '$449',
      imageSrc: 'https://media.sonos.com/images/znqtjj88/production/416da7c70b53d5c7c8a2c1ff310aa422957bf792-1280x1280.png?w=1080&q=100&fit=clip&auto=format',
      description: 'Upgraded inside and out, our most powerful portable speaker delivers heart-pumping stereo sound wherever you want.',
      link: 'https://www.sonos.com/en-us/shop/move-2'
    },
    {
      title: '45mm Taupe Magnetic Link - M/L',
      subtitle: '$99.00',
      imageSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJE3ref?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1692936539992',
      description: 'The Magnetic Link with FineWoven elegantly wraps around the wrist and magically attaches with molded magnets that gently flex to help maintain security and comfort throughout the day.',
      link: 'https://www.apple.com/shop/product/MTJF3AM/A/45mm-taupe-magnetic-link-m-l?fnode=fa8fbe73aacb960e3a1c8d7d16fd5fbc183ef1e7689115ebe5c0c17c3c479f8ec41433f55ecf3b7dcbc9e9551e88bdf25ff00610d9f9ab5a35941d3349dd1ba7c52bf8febe56332daeacb7625664218798d5ecb03dbe1d4209cf46cb0145de62'
    },
    {
      title: 'Black or Gravel Heather Fitz Roy Horizons Uprisal Hoody',
      subtitle: '$52.99',
      imageSrc: 'https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw2cbdd030/images/hi-res/39619_GLH.jpg?sw=1920&sh=1920&sfrm=png&q=90&bgcolor=f5f5f5',
      description: 'Our Fitz Roy Horizons Uprisal Hoody is made with 100% recycled knit fleece that has a brushed interior and natural stretch.',
      link: 'https://www.patagonia.com/product/fitz-roy-horizons-uprisal-hoody/39619.html?dwvar_39619_color=GLH'
    },
    {
      title: 'Men’s Box NSE Pullover Hoodie',
      subtitle: '$60',
      imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7UNS_LA9_back?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
      description: 'With an array of color options and graphics, the Men’s Box NSE Pullover Hoodie is an everyday sweatshirt meant to keep you warm and relaxed.',
      link: 'https://www.thenorthface.com/en-us/sale-c829803/mens-box-nse-pullover-hoodie-pNF0A7UNS?color=LA9&utm_medium=organic&utm_source=google&utm_campaign=freeshopping&utm_term=The%20North%20Face%20Men%27s%20Box%20NSE%20Pullover%20Hoodie%20Sweatshirt%20%28Size%3A%20Small%29%3A%20White%2FBlack&utm_content=ecomm'
    },
    {
      title: 'Mario Party Superstars - US Version for Nintendo Switch',
      subtitle: '$49.99',
      imageSrc: 'https://m.media-amazon.com/images/I/81FyMssnCXS._SL1500_.jpg',
      description: 'Bring the party on 5 classic boards from the Nintendo 64 Mario Party games',
      link: 'https://www.amazon.com/Mario-Party-Superstars-Nintendo-Switch/dp/B097B2HQ5R/ref=sr_1_3?crid=1I9L2QU0K286K&keywords=Mario+Party&qid=1700180391&sprefix=mario+party%2Caps%2C129&sr=8-3'
    },
    {
      title: 'Mens Plaid Mode Tee',
      subtitle: '$20',
      imageSrc: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1549268-00-A_0_2000.jpg',
      description: 'Designed to celebrate Teslas incredible performance mode, the Plaid Mode Tee features great fit, comfort and style.',
      link: 'https://shop.tesla.com/product/men_s-plaid-mode-tee?sku=1549268-00-A'
    },
    {
      title: 'On the Road Vessel',
      subtitle: '$35',
      imageSrc: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1860631-00-A_1_2000.jpg',
      description: 'Fill it, seal it, sip it along the way in your Tesla. Hot or cold. ',
      link: 'https://shop.tesla.com/product/on-the-road-vessel?sku=1860631-00-A'
    },
    {
      title: 'Mens Corp Jacket',
      subtitle: '$70',
      imageSrc: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/5645685-00-A_0_2000.jpg',
      description: 'Fully customized and uniquely styled, the Mens Corp Jacket features a silicone-printed T logo on the left chest and prominent Tesla wordmark across the back.',
      link: 'https://shop.tesla.com/product/men_s-corp-jacket?sku=5645685-00-A'
    },
    {
      title: '',
      subtitle: '',
      imageSrc: '',
      description: '',
      link: ''
    },
    {
      title: '',
      subtitle: '',
      imageSrc: '',
      description: '',
      link: ''
    },
    {
      title: '',
      subtitle: '',
      imageSrc: '',
      description: '',
      link: ''
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
