import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { RatingFilterPipe } from '../rating-filter.pipe';
@Component({
  selector: 'app-productcatr',
  templateUrl: './productcatr.component.html',
  styleUrls: ['./productcatr.component.css']
})
export class ProductcatrComponent {
  
  productId:number=0;
  productName:string='';
  productPrice:number=0;
  productSeller:string='';
  productCategory:String='';
  
  feedbacks:any;
  isResultLoaded=false;
  filteredRating:string='';
  constructor(private http:HttpClient){}
  ngOnInit():void{
    
    this.getfeedbacks();
    
 
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
