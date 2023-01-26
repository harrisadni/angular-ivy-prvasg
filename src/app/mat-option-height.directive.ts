import { Directive, ViewChildren, QueryList, AfterContentInit, ContentChildren, ElementRef, Input } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import {
  _countGroupLabelsBeforeOption,
  _getOptionScrollPosition,
MatOption
} from '@angular/material/core';

@Directive({
  selector: '[appMatOptionHeight]',
})
export class MatOptionHeightDirective implements AfterContentInit {
  @Input() appMatOptionHeight: number = 5;

  @ContentChildren(MatOption, { read: ElementRef }) options: QueryList<ElementRef>;
  
  constructor(
    public matSelect: MatSelect
  ) {
    (<any> this.matSelect)._getItemHeight = () => this.matSelect._triggerFontSize * this.appMatOptionHeight;
  }

  ngAfterContentInit() {
    this.options.forEach(option => {
      const heightEm = `${this.appMatOptionHeight}em`;
      option.nativeElement.style.height = heightEm;
      option.nativeElement.style.lineHeight = heightEm;
    });
  }
}