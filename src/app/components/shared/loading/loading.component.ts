import { Component, OnInit ,Input, OnChanges, SimpleChanges} from '@angular/core';
import{ map} from 'rxjs/operators' ;

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnChanges {

  @Input() data:any[]= [];

  isLoading:boolean=true;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges){

    this.isLoading =!(changes.data.currentValue);
    

  }

  

}
