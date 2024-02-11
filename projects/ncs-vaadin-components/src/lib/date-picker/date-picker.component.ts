import {
    AfterViewInit,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild
} from '@angular/core';
import '@vaadin/date-picker/vaadin-date-picker';

@Component({
    selector: 'ncs-vaadin-date-picker',
    standalone: true,
    imports: [],
    template: `
        <vaadin-date-picker #vaadinDatePicker></vaadin-date-picker>
    `,
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatePickerComponent implements AfterViewInit {

    @ViewChild('vaadinDatePicker') vaadinDatePicker!: ElementRef<DatePickerComboBoxElement>;

    @Input() value: string | undefined;

    @Input() label: string | undefined;
    @Input() placeholder: string | undefined;
    @Input() helperText: string | undefined;
    @Input() errorMessage: string | undefined;
    @Input() min: string | undefined
    @Input() max: string | undefined;
    @Input() theme: string | undefined;
    @Input() disabled: boolean | undefined;
    @Input() readonly: boolean | undefined;

    @Output() onChange = new EventEmitter<any>();


    ngAfterViewInit(): void {
        if (this.label) {
            this.vaadinDatePicker.nativeElement.label = this.label;
        }
        this.vaadinDatePicker.nativeElement.setAttribute('theme', this.theme as DatePickerComboBoxElement['theme']);
        this.vaadinDatePicker.nativeElement.setAttribute('value', this.value as DatePickerComboBoxElement['value']);
        this.vaadinDatePicker.nativeElement.setAttribute('errorMessage', this.errorMessage as DatePickerComboBoxElement['errorMessage']);
        this.vaadinDatePicker.nativeElement.setAttribute('placeholder', this.placeholder as DatePickerComboBoxElement['placeholder']);
        this.vaadinDatePicker.nativeElement.setAttribute('helper-text', this.helperText as DatePickerComboBoxElement['helperText']);
        this.vaadinDatePicker.nativeElement.setAttribute('min', this.min as DatePickerComboBoxElement['min']);
        this.vaadinDatePicker.nativeElement.setAttribute('max', this.max as DatePickerComboBoxElement['max']);
        this.vaadinDatePicker.nativeElement.disabled = !!this.disabled;
        this.vaadinDatePicker.nativeElement.readonly = !!this.readonly;

        this.vaadinDatePicker.nativeElement.addEventListener('change', (event: any) => {
            this.onChange.emit(event.target["__data"].value)
        });
    }

    setI18n() {
    }

    setDateFormat() {

    }


    // private valueChanged(event: any) {
    //     this.onChange.emit(event.target["__data"].value)
    // }

}

interface DatePickerComboBoxElement extends HTMLElement {

    value: string,
    label: string,
    placeholder: string,
    helperText: string,
    errorMessage: string,
    min: string,
    max: string,
    theme: string,
    disabled: boolean,
    readonly: boolean
}
