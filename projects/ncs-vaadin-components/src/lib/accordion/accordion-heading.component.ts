import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import '@vaadin/accordion/vaadin-accordion-heading';


@Component({
    selector: 'ncs-vaadin-accordion-heading',
    standalone: true,
    imports: [],
    template: `
        <ng-content></ng-content>
    `,
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionHeadingComponent {

}
