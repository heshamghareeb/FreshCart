import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from 'src/core/models/product.model';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products:ProductModel[], searchTerm:string): ProductModel[] {
    return products.filter((product)=> product.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
