import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, NavController, LoadingController, PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Headers, Http } from '@angular/http';
import { Slides } from 'ionic-angular';

import {PopoverPage} from './poppy';

@Component({
  selector: 'page-landing',
  templateUrl: 'land.html'
})

export class LandingComponent implements OnInit
{
  @ViewChild('banner') slider: Slides;
  @ViewChild('brands') slider2: Slides;
  @Input() Slides;

  images: Array<any> = [];
  brandy: Array<any>  = [];
  categories: Array<any>  = [];
  items: Array<any> = [];
  constructor(public navCtrl: NavController,
              public storage: Storage,
              public http: Http,
              public modalCtrl: ModalController,
              public popoverCtrl: PopoverController,
              public loadingCtrl: LoadingController){}

 ngOnInit()
 {
   this.items = [{name: 'Ilara Fresh', photo: 'assets/img/illara.jpg'},
                {name:  'Yoghurt', photo: 'assets/img/vanilla.jpg'},
                {name:  'Tuzo', photo: 'assets/img/tuzo.jpeg'},
                {name:  'Delamere', photo: 'assets/img/delY.png'}]
                
   this.categories = ['Personal Care',
                      'Laundry & Cleaning',
                      'Foods',
                      'Cooking',
                      'Candy & Sweets',
                      'Drinks & Beverages'
                      ]
   this.images = [
                   'assets/img/pure-health.png','assets/img/Unga-Group-Products.jpg',
                   'assets/img/traditional-biscuits.png','assets/img/our-brands-banner.jpg',
                   'assets/img/delamere.jpg','assets/img/images.jpeg','assets/img/jus.jpg'
                 ];

   this.brandy = ['assets/img/brand_bid.png',
                  'assets/img/brand_brook.jpg',
                  'assets/img/brand_fest.jpeg',
                  'assets/img/brand_pamp.png',
                  'assets/img/brand_saf.png',
                  'assets/img/brand_uni.png',
                  'assets/img/brand_bid.png',
                                 'assets/img/brand_brook.jpg',
                                 'assets/img/brand_fest.jpeg',
                                 'assets/img/brand_pamp.png',
                                 'assets/img/brand_saf.png',
                                 'assets/img/brand_uni.png',
                                 'assets/img/brand_bid.png',
                                                'assets/img/brand_brook.jpg',
                                                'assets/img/brand_fest.jpeg',
                                                'assets/img/brand_pamp.png',
                                                'assets/img/brand_saf.png',
                                                'assets/img/brand_uni.png']
 }

   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }


 }
