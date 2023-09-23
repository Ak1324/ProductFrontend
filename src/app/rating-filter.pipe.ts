import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingFilter'
})
export class RatingFilterPipe implements PipeTransform {

  transform(value: any, filteredRating: string): any {
    if (!value || value.length === 0 || !filteredRating) {
      return value;
    }
    return value.filter((feedback:any) => feedback.product.productCategory.toLowerCase().includes(filteredRating.toLowerCase()));
  }
}
