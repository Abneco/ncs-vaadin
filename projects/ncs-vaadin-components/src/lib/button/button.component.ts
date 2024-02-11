/**
 * @fileoverview This file contains the Button component.
 *
 * @author Sylvain Bernard NEURONICS SA
 */

import {
    AfterViewInit,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    ElementRef,
    EventEmitter,
    Input, OnDestroy,
    Output,
    ViewChild
} from '@angular/core';
import '@vaadin/button';

/**
 * Button component.
 */
@Component({
    selector: 'ncs-vaadin-button',
    standalone: true,
    imports: [],
    template: `
        <vaadin-button #vaadinButton></vaadin-button>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent implements AfterViewInit, OnDestroy {
    /**
     * Reference to the Vaadin button element.
     */
    @ViewChild('vaadinButton') vaadinButton!: ElementRef<VaadinButtonElement>;

    /**
     * Button label.
     */
    @Input() label: string | undefined;

    /**
     * Button theme.
     */
    @Input() theme: string | undefined;

    /**
     * Whether the button is disabled.
     */
    @Input() disabled: boolean | undefined;

    /**
     * Emitted when the button is clicked.
     */
    @Output() onClick = new EventEmitter<MouseEvent>();

    /**
     * Initialization hook for the component.
     */
    ngAfterViewInit(): void {
        if (this.label) {
            this.vaadinButton.nativeElement.innerText = this.label;
        }
        this.vaadinButton.nativeElement.setAttribute('theme', this.theme as VaadinButtonElement['theme']);
        this.vaadinButton.nativeElement.disabled = !!this.disabled;

        this.vaadinButton.nativeElement.addEventListener('click', (event: MouseEvent) => {
            this.vaadinButton.nativeElement.addEventListener('click', this.clickListener);
        });
    }

    ngOnDestroy(): void {
        this.vaadinButton.nativeElement.removeEventListener('click', this.clickListener);
    }

    private clickListener = (event: MouseEvent) => {
        this.onClick.emit(event);
    };
}

/**
 * Extended properties of the Vaadin button element.
 */
interface VaadinButtonElement extends HTMLElement {
    /**
     * If true, the user cannot interact with this element.
     */
    label: string;
    /**
     * The theme variants to apply to the component.
     */
    theme: string;
    /**
     * If true, the user cannot interact with this element.
     */
    disabled: boolean;
}
