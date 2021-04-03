import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText= filterText?filterText.toLocaleLowerCase():null;
    return filterText?value.filter(i=>i.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
