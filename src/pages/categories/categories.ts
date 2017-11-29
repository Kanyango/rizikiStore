import { Component, OnInit } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';
import { ProductsPage } from '../products/products'
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'
import { ListingPage } from './listing';
import { CatsComponent } from './cats';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage implements OnInit {

  products: Array<any> = [ ];
  matched: Array<any> = [];
  categories: Array<any> = [];
  private productsUrl = 'http://127.0.0.1:8300/product';

  constructor(public navCtrl: NavController, public http: Http) {}

  ngOnInit()
  {

    this.getProducts();
  	this.categories =
                      [ {cname : 'Laundry & Homecare',
                        sub_cat:  [{name: 'Toilet Cleaning',
                        photo: 'assets/img/harpic.jpg'},
                                   {name: 'Tissues',photo: 'assets/img/tissue.jpg'},
                                   {name: 'Bathing Soap', photo:'assets/img/bathe.jpeg'},
                                   {name: 'Cleaning Detergents',photo: 'assets/img/omo.jpeg'},
                                   {name: 'Bar Soaps', photo:'assets/img/bar.jpg'}]
                        },
                        {cname: 'Candy & Sweets'},
                        {cname: 'Drinks & Beverages'},
                        {cname: 'Food'},
                        {cname: 'Personal Care'}
                        ];
  }
  getProducts(): Promise<any>
  {
  return this.http
             .get(this.productsUrl)
             .toPromise()
             .then(res => {return this.products =  res.json();
                            })
             .catch(this.handleError)
  }
  getProds(one: any)
  {
    console.log(this.products);


    for(let m in this.products)
        {
            if(this.products[m].category == one )
              {
                  console.log(this.products[m]);
                  this.matched.push(this.products[m]);
              }
        }
    console.log('We are matched',this.matched);
    this.navCtrl.push(ListingPage, {'matched' : this.matched});
  }

  private handleError(error: any): Promise<any>
   {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }
  back()
    {
      this.navCtrl.push(ProductsPage);
    }

    itemSelected(item: any)
    {
      this.navCtrl.push(CatsComponent, {'item': item});
    }


 }
