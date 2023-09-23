import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Rating } from '../Rating.model';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
userId:number=0;
productId: number=0;
rating: number=0;
  

  constructor(private http: HttpClient) {}

 

  submitRating() {
    let ratingData = {
    userId: this.userId,
    productId: this.productId,
    rating: this.rating,
  };
    // Send a POST request to your backend API
    this.http
      .post('http://localhost:8080/api/v1/rating'+"/"+this.userId+"/"+this.productId, ratingData)
      .subscribe(
        (response) => {
          console.log('Rating submitted successfully:', response);
          alert("rating submitted")
          // Optionally, reset the form or perform any other actions
        },
        (error) => {
          console.error('Error submitting rating:', error);
        }
      );
  }
}
