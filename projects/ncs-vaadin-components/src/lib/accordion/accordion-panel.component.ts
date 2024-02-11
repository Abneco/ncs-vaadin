import {Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import '@vaadin/accordion/vaadin-accordion-panel';


@Component({
    selector: 'ncs-vaadin-accordion-panel',
    standalone: true,
    imports: [],
    template: `
        <vaadin-accordion-panel [attr.theme]="theme">
            <div slot="summary"><ng-content select="[slot='summary']"></ng-content></div>
            <ng-content></ng-content>
        </vaadin-accordion-panel>
    `,
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionPanelComponent {

    @Input() theme: string = '';

}
