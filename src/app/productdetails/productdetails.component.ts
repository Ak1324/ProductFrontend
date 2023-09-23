import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  productId:number=0;
  productName:string='';
  productPrice:number=0;
  productSeller:string='';
  productCategory:String='';
  
  feedbacks:any;
  isResultLoaded=false;
constructor(private http:HttpClient,private route: ActivatedRoute){}

ngOnInit():void{
    
  
  const productId = this.route.snapshot.params['id'];
  // this.getfeedbacks.getProductById(productId).subscribe(
  //   (data) => {
  //     this.product = data;
  //   },
  //   (error) => {
  //     console.log('Error fetching product details:', error);
  //   }
 }
getfeedbacks(){
this.http.get("http://localhost:8080/api/v1/feedbacks")

.subscribe((resultData: any)=>
{
    this.isResultLoaded = true;
    console.log(resultData);
    this.feedbacks = resultData;
});

}
}
