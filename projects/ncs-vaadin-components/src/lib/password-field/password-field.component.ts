import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild} from '@angular/core';
import '@vaadin/password-field/vaadin-password-field';

@Component({
    selector: 'ncs-vaadin-password-field',
    standalone: true,
    imports: [],
    template: `
        <vaadin-password-field #vaadinPasswordField></vaadin-password-field>
    `,
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PasswordFieldComponent implements AfterViewInit {

    @ViewChild('vaadinPasswordField') vaadinPasswordField!: ElementRef<VaadinPasswordFieldElement>;

    @Input() label: string | undefined;
    @Input() value: string | undefined;
    @Input() placeholder: string | undefined;
    @Input() minLength: string | undefined;
    @Input() maxLength: string | undefined;


    ngAfterViewInit(): void {
        this.vaadinPasswordField.nativeElement.setAttribute('label', this.label as VaadinPasswordFieldElement['label']);
        this.vaadinPasswordField.nativeElement.setAttribute('value', this.value as VaadinPasswordFieldElement['value']);
        this.vaadinPasswordField.nativeElement.setAttribute('placeholder', this.placeholder as VaadinPasswordFieldElement['placeholder']);
        this.vaadinPasswordField.nativeElement.setAttribute('min-length', this.minLength as VaadinPasswordFieldElement['minLength']);
        this.vaadinPasswordField.nativeElement.setAttribute('max-length', this.maxLength as VaadinPasswordFieldElement['maxLength']);
    }
}

interface VaadinPasswordFieldElement extends HTMLElement {

    label: string;
    value: string;
    placeholder: string;
    minLength: string;
    maxLength: string;
}
