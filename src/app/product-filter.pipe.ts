import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  // transform(value: any,filteredCategory:string){
  //   if(value.length===0||filteredCategory===''){
  //     return value;
  //   }
  //   const products=[];
  //   for(const productd of value){
  //     if(productd['productCategory']===filteredCategory){
  //       products.push(productd);
  //       console.log(products);
  //     }
  //   }
  //   return products;
  // }

  transform(value: any, filteredCategory: string): any {
    if (!value || value.length === 0 || !filteredCategory) {
      return value;
    }
    return value.filter((product: { productCategory: string; }) => product.productCategory.toLowerCase().includes(filteredCategory.toLowerCase()));
  }


}
