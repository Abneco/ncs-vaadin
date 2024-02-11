import {
    Component,
    ElementRef,
    Input,
    ViewChild,
    AfterViewInit,
    Output,
    EventEmitter,
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import '@vaadin/checkbox';

@Component({
    selector: 'ncs-vaadin-checkbox',
    standalone: true,
    template: `
        <vaadin-checkbox #vaadinCheckbox></vaadin-checkbox>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxComponent implements AfterViewInit {
    @ViewChild('vaadinCheckbox') vaadinCheckbox!: ElementRef<VaadinCheckboxElement>;

    @Input() label: string | undefined;
    @Input() value: string | undefined;
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;


    //@Output() valueChanged = new EventEmitter<boolean>();
    @Output() change = new EventEmitter<boolean>();


    ngAfterViewInit(): void {
        this.initC();
        this.initL();
    }

    private initC(): void {
        this.vaadinCheckbox.nativeElement.label = this.label as VaadinCheckboxElement['label'];
        this.vaadinCheckbox.nativeElement.value = this.value as VaadinCheckboxElement['value'];
        this.vaadinCheckbox.nativeElement.checked = this.checked;
        this.vaadinCheckbox.nativeElement.disabled = this.disabled;
    }

    private initL(): void {
        // this.vaadinCheckbox.nativeElement.addEventListener('value-changed', (event: any) => {
        //     this.valueChanged.emit(event);
        // });
        this.vaadinCheckbox.nativeElement.addEventListener('change', (event: any) => {
            event.stopPropagation();
            this.change.emit(event);
        });
    }
}

interface VaadinCheckboxElement extends HTMLElement {
    label: string;
    value: string;
    checked: boolean;
    disabled: boolean;
}

