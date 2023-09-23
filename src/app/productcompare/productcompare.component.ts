import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { ProductFilterPipe } from '../product-filter.pipe';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-productcompare',
  templateUrl: './productcompare.component.html',
  styleUrls: ['./productcompare.component.css']
})
export class ProductcompareComponent {
  
    productName: string = '';
    productPrice: number = 0;
    productSeller: string = '';
    productCategory: string = '';
    productId: number = 0;
  
    constructor(private ps: ProductService, private http: HttpClient) {}
  
    products: any;
    filteredCategory: string = '';
    selectedCategoryProducts: any[] = [];// Array to store products for comparison
    selectedProduct: any = null; // The selected product for comparison
  
    ngOnInit(): void {
      this.getproducts();
    }
  
    getproducts() {
      this.ps.fetchProducts().subscribe(
        (data) => {
          this.products = data;
        },
        (error) => {
          console.log('error');
        }
      );
    }
  
    // Function to add a product to the comparison list
    addToComparison(productd: any) {
      this.selectedCategoryProducts.push(productd);
    }
  
    // Function to remove a product from the comparison list
    removeFromComparison(productd: any) {
      const index = this.selectedCategoryProducts.indexOf(productd);
      if (index !== -1) {
        this.selectedCategoryProducts.splice(index, 1);
      }
    }
  
    // Function to compare products of the same category
    compareCategoryProducts() {
      // Filter products based on the selected category
      
      let highestPricedProduct = null;
      for (const productd of this.selectedCategoryProducts) {
        if (!highestPricedProduct || productd.productPrice > highestPricedProduct.productPrice) {
          highestPricedProduct = productd;
        }
      }
  
      // Set the selected product for comparison
      this.selectedProduct = highestPricedProduct;
    
  }
  filterProductsByCategory() {
    if (this.filteredCategory.trim() !== '') {
      this.selectedCategoryProducts = this.products.filter(
        (productd: { productCategory: string; }) => productd.productCategory === this.filteredCategory
      );
      this.compareCategoryProducts(); // Also update the selected product for comparison
    } else {
      // Reset the selected product and list of products for comparison
      this.selectedProduct = null;
      this.selectedCategoryProducts = [];
    }
  }
}


