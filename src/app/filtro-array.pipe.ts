import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (value.length === 0 || args === undefined){
      return value;
    }
    let filter = args.toLocaleString();
    return value.filter(
      (      v: { toLocaleString: () => string | string[]; }) => v.toLocaleString().indexOf(filter) != -1
    )
  }

}
