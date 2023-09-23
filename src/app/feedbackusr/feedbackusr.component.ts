import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedbackusr',
  templateUrl: './feedbackusr.component.html',
  styleUrls: ['./feedbackusr.component.css']
})
export class FeedbackusrComponent {
  userId:number=0;
  productId: number=0;
  feedback: string='';
    
  
    constructor(private http: HttpClient) {}
  
   
  
    submitFeedback() {
      let feedbackData = {
      userId: this.userId,
      productId: this.productId,
      feedback: this.feedback,
    };
      // Send a POST request to your backend API
      this.http
        .post('http://localhost:8080/api/v1/feedback'+"/"+this.userId+"/"+this.productId, feedbackData)
        .subscribe(
          (response) => {
            console.log('Rating submitted successfully:', response);
            alert("Feedback submitted")
            // Optionally, reset the form or perform any other actions
          },
          (error) => {
            console.error('Error submitting rating:', error);
          }
        );
    }
}
