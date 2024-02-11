import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import '@vaadin/accordion/vaadin-accordion';

@Component({
    selector: 'ncs-vaadin-accordion',
    standalone: true,
    imports: [],
    template: `
        <vaadin-accordion>
            <ng-content></ng-content>
        </vaadin-accordion>
    `,
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionComponent {

}
