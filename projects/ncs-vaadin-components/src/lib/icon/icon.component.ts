import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild} from '@angular/core';

// import '@vaadin/icons/vaadin-icons.js';
// import '@vaadin/icons/vaadin-iconset.js';
//
import '@vaadin/vaadin-lumo-styles/icons.js';
// import '@vaadin/vaadin-lumo-styles/font-icons.js';
import '@vaadin/vaadin-lumo-styles/sizing';
// import '@vaadin/vaadin-material-styles/font-icons.js';
// import '@vaadin/vaadin-lumo-styles/node_modules/@vaadin/icon/vaadin-icon';
// import '@vaadin/vaadin-lumo-styles/node_modules/@vaadin/icon/vaadin-iconset';



@Component({
    selector: 'ncs-vaadin-icons',
    standalone: true,
    imports: [],
    template: `
        <vaadin-icon #vaadinIcon></vaadin-icon>
    `,
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IconComponent implements AfterViewInit {

    @ViewChild('vaadinIcon') vaadinIcon!: ElementRef<VaadinIconElement>;

    @Input() icon: string | undefined;
    @Input() role: string | undefined;
    @Input() ariaLabel: string | undefined;


    ngAfterViewInit(): void {
        this.vaadinIcon.nativeElement.setAttribute('icon', this.icon as VaadinIconElement['icon']);
        this.vaadinIcon.nativeElement.setAttribute('role', this.role as VaadinIconElement['role']);
        this.vaadinIcon.nativeElement.setAttribute('aria-label', this.ariaLabel as VaadinIconElement['ariaLabel']);
    }
}

interface VaadinIconElement extends HTMLElement {

    icon: string;
    role: string;
    ariaLabel: string;
}
