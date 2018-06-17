import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattime'
})
export class FormattimePipe implements PipeTransform {

  transform(ms: number): any {

    if(ms > 0){
      ms = 1000*Math.round(ms/1000); // round to nearest second
      let d = new Date(ms);
      return this.addZero(d.getUTCMinutes()) + ':' + this.addZero(d.getUTCSeconds());
    }
  }

  addZero(val:number){
    return val>9?val:'0'+val;

  }

}
