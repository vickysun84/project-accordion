import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VickyAccordionComponent } from './vicky-accordion.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [VickyAccordionComponent, SectionComponent],
  imports: [CommonModule
  ],
  exports: [VickyAccordionComponent, SectionComponent]
})
export class VickyAccordionModule { }
