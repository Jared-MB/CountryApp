import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input() placeholder = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string) {
    this.onValue.emit(value);
  }

}
