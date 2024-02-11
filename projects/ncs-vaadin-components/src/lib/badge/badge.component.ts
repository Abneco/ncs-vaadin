import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import '@vaadin/vaadin-lumo-styles/badge-global.js';


@Component({
    selector: 'ncs-vaadin-badge',
    standalone: true,
    imports: [],
    template: `
        <span #vaadinBadge></span>
    `,
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BadgeComponent implements AfterViewInit, OnDestroy {

    @ViewChild('vaadinBadge') vaadinBadge!: ElementRef<VaadinBadgeElement>;

    /**
     * Badge theme.
     */
    @Input() theme: string | undefined;

    @Input() label: string | undefined;

    ngAfterViewInit(): void {
        this.vaadinBadge.nativeElement.setAttribute('theme', this.theme as VaadinBadgeElement['theme']);
        if (this.label) {
            this.vaadinBadge.nativeElement.innerText = this.label;
        }
    }

    ngOnDestroy(): void {
    }
}

interface VaadinBadgeElement extends HTMLElement {
    /**
     * The theme variants to apply to the component.
     */
    theme: string;

    label: string;
}

