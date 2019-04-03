import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { SectionComponent } from './section/section.component';

@Component({
  selector: 'lib-vicky-accordion',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: []
})
export class VickyAccordionComponent implements AfterContentInit {
  @ContentChildren(SectionComponent)
  
  sections: QueryList<SectionComponent>;

  ngAfterContentInit() {
    this.sections.toArray().forEach((s) => {
      s.toggle.subscribe(() => {
        if(s.opened == true){
          this.closeSection(s);
        }else{
          this.openSection(s);
        }
      });
    });
  }

  closeSection(section) {
    section.opened = false;
  }
  openSection(section) {
    this.sections.toArray().forEach((t) => t.opened = false);
    section.opened = true;
  }
}
