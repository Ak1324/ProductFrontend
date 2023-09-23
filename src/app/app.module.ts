import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminService } from './admin.service';
import { UserloginService } from './userlogin.service';
import { UserregisterService } from './userregister.service';
import { ProductService } from './product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductCategoryComponent } from './product-category/product-category.component';

import { ProductcompareComponent } from './productcompare/productcompare.component';
import { ProductcatrComponent } from './productcatr/productcatr.component';
import { RatingFilterPipe } from './rating-filter.pipe';
import { RatingComponent } from './rating/rating.component';
import { FeedbackusrComponent } from './feedbackusr/feedbackusr.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UsersComponent,
    FeedbackComponent,
    UserdashboardComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserRegisterComponent,
    AdmindashboardComponent,
    ProductFilterPipe,
    ProductCategoryComponent,
    ProductFilterPipe,
     ProductcompareComponent,
       ProductcatrComponent,
       RatingFilterPipe,
       RatingComponent,
       FeedbackusrComponent,
       ProductdetailsComponent
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  providers: [AdminService,UserloginService,UserregisterService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
