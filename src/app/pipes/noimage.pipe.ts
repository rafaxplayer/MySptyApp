import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images:any[] ,index:number) :string {

    if(!images){
      return 'assets/img/noimage.png';
    }
    if(images.length > 0 ){
      let ind = index ? index : 0;
      return images[ind].url;
    }else{
      return 'assets/img/noimage.png';
    }
    
  }

}
