
import { Directive,  AfterContentInit, ElementRef } from '@angular/core';

@Directive({
  selector: 'ion-content'
})
export class ScrollContentDirective implements AfterContentInit {
  constructor(private el: ElementRef) {
  }

  private addStyle() {
    var style = document.createElement('style');

    style.textContent = `.scroll-y::-webkit-scrollbar { width: var(--scrollbar-width);}
    .scroll-y::-webkit-scrollbar-track { background: #ffffff00; }
    .scroll-y::-webkit-scrollbar-thumb { background: #ffffff00; }
    .scroll-y:hover::-webkit-scrollbar-thumb { background: #bbb; }
    .scroll-y::-webkit-scrollbar-thumb:vertical:hover { background: #999; }
    .scroll-y::-webkit-scrollbar-thumb:vertical:active { background: #777; }

    .scroll-y {
    overflow: scroll;
    padding-right: calc(15px - var(--scrollbar-width));
    }

    .scroll-y:hover {
    overflow: scroll;
    }`;

    this.el.nativeElement.shadowRoot.appendChild(style)
  }
  
  ngAfterContentInit() {
      this.addStyle()
  }
}
