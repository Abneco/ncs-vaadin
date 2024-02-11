import {
    AfterViewInit, ChangeDetectorRef,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    ElementRef,
    EventEmitter,
    Input, Output,
    ViewChild
} from '@angular/core';
import '@vaadin/confirm-dialog';

//import '@vaadin/confirm-dialog/theme/lumo/vaadin-confirm-dialog.js';

@Component({
    selector: 'ncs-vaadin-confirm-dialog',
    standalone: true,
    imports: [],
    template: `
        <vaadin-confirm-dialog #vaadinConfirmDialog></vaadin-confirm-dialog>
    `,
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConfirmDialogComponent implements AfterViewInit {


    @ViewChild('vaadinConfirmDialog') vaadinConfirmDialog!: ElementRef<ConfirmDialogComponentElement>;

    @Input() header: string = 'Unsaved changes';
    @Input() confirmText: string = 'Save';
    @Input() cancelButtonVisible: boolean = true;
    @Input() rejectButtonVisible: boolean = true;
    @Input() rejectText: string = 'Discard';
    @Input() opened: boolean = false;

    @Output() confirm = new EventEmitter<void>();
    @Output() cancel = new EventEmitter<void>();
    @Output() reject = new EventEmitter<void>();
    @Output() openedChanged = new EventEmitter<boolean>();

    ngAfterViewInit() {
        this.vaadinConfirmDialog.nativeElement.setAttribute('confirm-text', this.confirmText as ConfirmDialogComponentElement['confirmText']);
        this.vaadinConfirmDialog.nativeElement.setAttribute('header', this.header as ConfirmDialogComponentElement['header']);
        // this.vaadinConfirmDialog.nativeElement.header = this.header;
        this.vaadinConfirmDialog.nativeElement.confirmText = this.confirmText;
        this.vaadinConfirmDialog.nativeElement.cancelButtonVisible = this.cancelButtonVisible;
        this.vaadinConfirmDialog.nativeElement.rejectButtonVisible = this.rejectButtonVisible;
        this.vaadinConfirmDialog.nativeElement.rejectText = this.rejectText;


        this.vaadinConfirmDialog.nativeElement.addEventListener('confirm', () => this.confirm.emit());
        this.vaadinConfirmDialog.nativeElement.addEventListener('cancel', () => this.cancel.emit());
        this.vaadinConfirmDialog.nativeElement.addEventListener('reject', () => this.reject.emit());

        // Gestion de l'événement opened-changed pour mettre à jour la propriété opened et émettre l'événement openedChanged
        this.vaadinConfirmDialog.nativeElement.addEventListener('opened-changed', (event) => {
            const detail = (event as CustomEvent).detail;
            this.opened = detail.value;
            this.openedChanged.emit(this.opened);
        });

        console.log(this.opened)
        this.vaadinConfirmDialog.nativeElement.opened = this.opened;
    }

    // @Input() openDialog() {
    //     this.opened = true;
    //     this.vaadinConfirmDialog.nativeElement.opened = this.opened;
    //     // this.cdr.detectChanges();
    // }

    public openDialog() {
        this.opened = true;
        this.vaadinConfirmDialog.nativeElement.opened = this.opened;
    }
}


interface ConfirmDialogComponentElement extends HTMLElement {

    header: string;
    confirmText: string;
    cancelButtonVisible: boolean;
    rejectButtonVisible: boolean;
    rejectText: string;
    opened: boolean;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
}
