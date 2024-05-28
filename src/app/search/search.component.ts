
import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class  SearchComponent{

  @Output() emitter: EventEmitter<any> = new EventEmitter<any>();

  search(value:any) {
    this.emitter.emit(value);
  }
}
