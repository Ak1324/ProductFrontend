import { Component } from '@angular/core';

@Component({
  selector: 'app-productcomponent',
  templateUrl: './productcomponent.component.html',
  styleUrls: ['./productcomponent.component.css']
})
export class ProductcomponentComponent {

  private products:Product[] = [

    {

      productId: 1,

      name: 'Product 1',

      price: 99.99,

      seller: 'Seller A',

      category: 'Category X'

    },

    {

      productId: 2,

      name: 'Product 2',

      price: 149.99,

      seller: 'Seller B',

      category: 'Category Y'

    }

    // Add more sample products here

  ];

 

  getProducts():Product[] {

    return this.products;

  }

 

  addProduct(newProduct:Product):void {

    // Simulate adding a product to the list

    const productId = this.products.length + 1;

    this.products.push({ ...newProduct, productId });

  }

}


}
