import {
    Component,
    ContentChildren,
    QueryList,
    Output,
    EventEmitter,
    AfterViewInit, ViewChild, ElementRef, Input, CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import '@vaadin/checkbox-group';
import {CheckboxComponent} from "../checkbox/checkbox.component";

@Component({
    selector: 'ncs-vaadin-checkbox-group',
    standalone: true,
    imports: [CheckboxComponent],
    template: `
        <vaadin-checkbox-group #vaadinCheckboxGroup [attr.theme]="theme" [attr.label]="label">
            <ng-content></ng-content>
        </vaadin-checkbox-group>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxGroupComponent implements AfterViewInit {
    @ViewChild('vaadinCheckboxGroup') vaadinCheckboxGroup!: ElementRef<VaadinCheckboxGroupElement>;
    @ContentChildren(CheckboxComponent) checkboxes!: QueryList<CheckboxComponent>;

    @Input() label: string | undefined;
    @Input() theme: string | undefined;

    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;

    //@Output() valueChanged = new EventEmitter<any>();
    @Output() change = new EventEmitter<any>();

    ngAfterViewInit(): void {
        this.initC();
        this.initL();
    }


    private initC(): void {
        // if (this.label) {
        //     this.vaadinCheckboxGroup.nativeElement.label = this.label;
        // }
        // this.vaadinCheckboxGroup.nativeElement.setAttribute('theme', this.theme as VaadinCheckboxGroupElement['theme']);
        // this.vaadinCheckboxGroup.nativeElement.setAttribute('label', this.label as VaadinCheckboxGroupElement['label']);
        // this.vaadinCheckboxGroup.nativeElement.disabled = this.disabled;
    }

    private initL(): void {
        this.vaadinCheckboxGroup.nativeElement.addEventListener('change', (event: any) => {
            this.change.emit(event);
        });
    }



}

interface VaadinCheckboxGroupElement extends HTMLElement {
    label: string;

    value: string[];
    theme: string;
    checked: boolean;
    disabled: boolean;
}

