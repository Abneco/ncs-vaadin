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
import '@vaadin/combo-box';

@Component({
    selector: 'ncs-vaadin-combo-box',
    standalone: true,
    imports: [],
    template: `
        <vaadin-combo-box #vaadinComboBox></vaadin-combo-box>
    `,
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComboBoxComponent implements AfterViewInit {

    @ViewChild('vaadinComboBox') vaadinComboBox!: ElementRef<ComboBoxComponentElement>;

    @Input() style: string | undefined;
    @Input() label: string | undefined;
    @Input() value: string | undefined;
    @Input() placeholder: string | undefined = '';
    @Input() theme: string | undefined;
    @Input() helperText: string | undefined;

    @Input() itemValuePath: string | undefined;

    @Input() disabled: boolean | undefined;
    @Input() readonly: boolean | undefined;
    @Input() items: any[] = [];
    // @Input() displayNameFields: string | string[] | undefined;
    @Input() displayNameRender: string | undefined;

    // @Input() renderer?: (root: HTMLElement, owner: ComboBoxComponentElement, model: { item: any }) => void;
    @Input() render: string | undefined;

    @Input() filteredItems: any[] = [];

    @Input() itemLabelPath: string | undefined = 'displayName';

    private renderers?: (root: HTMLElement, owner: ComboBoxComponentElement, model: { item: any }) => void;

    // @Output() filterChange = new EventEmitter<string>();
    @Output() valueChange = new EventEmitter<any>();
    @Output() selectedItemChange = new EventEmitter<any>();
    @Output() textInput = new EventEmitter<string>();

    @Input() customFilterMethod?: (items: any[], filterValue: string) => any[];

    @Input() autoOpenDisabled: boolean = false;


    ngAfterViewInit() {


        if (this.style) {
            // Applique le style d'entrée à l'élément vaadin-combo-box
            this.vaadinComboBox.nativeElement.setAttribute('style', this.style);
        }
        this.vaadinComboBox.nativeElement.setAttribute('label', this.label as ComboBoxComponentElement['label']);
        this.vaadinComboBox.nativeElement.setAttribute('value', this.value as ComboBoxComponentElement['value']);

        this.vaadinComboBox.nativeElement.setAttribute('placeholder', this.placeholder as ComboBoxComponentElement['placeholder']);
        this.vaadinComboBox.nativeElement.setAttribute('theme', this.theme as ComboBoxComponentElement['theme']);
        this.vaadinComboBox.nativeElement.setAttribute('helper-text', this.helperText as ComboBoxComponentElement['helperText']);
        this.vaadinComboBox.nativeElement.setAttribute('item-label-path', this.itemLabelPath as ComboBoxComponentElement['itemLabelPath']);
        this.vaadinComboBox.nativeElement.setAttribute('item-value-path', this.itemValuePath as ComboBoxComponentElement['itemValuePath']);
        // Vérifiez si l'élément natif supporte directement la propriété 'autoOpenDisabled'
        if (this.vaadinComboBox.nativeElement.autoOpenDisabled !== undefined) {
            this.vaadinComboBox.nativeElement.autoOpenDisabled = this.autoOpenDisabled;
        } else {
            // Si 'autoOpenDisabled' n'est pas supporté en tant que propriété, utilisez setAttribute pour les éléments qui traitent les attributs
            // Définir ou retirer l'attribut 'auto-open-disabled' selon la valeur de 'autoOpenDisabled'
            if (this.autoOpenDisabled) {
                this.vaadinComboBox.nativeElement.setAttribute('auto-open-disabled', '');
            } else {
                this.vaadinComboBox.nativeElement.removeAttribute('auto-open-disabled');
            }
        }

        if (this.itemLabelPath == "displayName") {
            this.items = this.items?.map((item) => {
                // if (typeof this.displayNameFields === 'string') {
                //     displayName = item[this.displayNameFields];
                // } else if (Array.isArray(this.displayNameFields)) {
                //     displayName = this.displayNameFields.map(field => item[field]).join('      -       '); // modifier pour avoir un syteme de rendu
                // }

                if (!this.displayNameRender) {
                    const firstKey = Object.keys(item)[0]; // Obtient le premier champ de l'objet item
                    this.displayNameRender = `{{${firstKey}}}`; // Définit displayNameRender au premier champ
                }

                let displayName = this.displayNameRender.replace(/{{(\w+)}}/g, (match: string, field: any) => {
                    return item[field] || '';
                });

                return {
                    ...item,
                    displayName,
                };
            });
        }


        this.vaadinComboBox.nativeElement.items = this.items as ComboBoxComponentElement['items'];
        this.vaadinComboBox.nativeElement.filteredItems = this.items as ComboBoxComponentElement['filteredItems'];


        //comboBox.items = [{'label': 'Hydrogen', 'value': 'H'}];
        // comboBox.renderer = (root: HTMLElement, owner: ComboBoxComponentElement, model: { item: any }) => {
        //     //if (!root.firstChild) {
        //     root.innerHTML = '';
        //     root.innerHTML = `<div style="display: flex; align-items: center; justify-content: space-between;">
        //                 <span>${model.item.name}</span>
        //                 <span style="color: lightslategrey">${model.item.id}</span>
        //               </div>`;
        //
        // }

        if (this.render) {
            this.renderers = this.createRenderer(this.render);
            const comboBox: ComboBoxComponentElement = this.vaadinComboBox.nativeElement
            comboBox.renderer = this.renderers;
            comboBox.requestContentUpdate();
        }

        this.vaadinComboBox.nativeElement.disabled = !!this.disabled;
        this.vaadinComboBox.nativeElement.readonly = !!this.readonly;

        // this.vaadinComboBox.nativeElement.addEventListener('filter-changed', ((event: CustomEvent) => {
        //     const filterValue = (event as any).detail.value;
        //     this.filterChange.emit(filterValue);
        // }) as EventListener);

        this.vaadinComboBox.nativeElement.addEventListener('value-changed', (event: Event) => {
            const detail = (event as CustomEvent).detail;
            if (detail && 'value' in detail) {
                const selectedValue = detail.value;
                this.valueChange.emit(selectedValue);
            }
        });

        this.vaadinComboBox.nativeElement.addEventListener('input', (event: Event) => {
            const filterValue = (event.target as HTMLInputElement).value;
            this.filterItems(filterValue);
            this.textInput.emit(filterValue); // Émet la valeur saisie si nécessaire
        });


        this.vaadinComboBox.nativeElement.addEventListener('selected-item-changed', (($event: CustomEvent) => {
            const selectedItem = $event.detail.value;
            if (selectedItem) {
                this.selectedItemChange.emit(selectedItem);
            }
        }) as EventListener);
    }


    private createRenderer(template: string): (root: HTMLElement, owner: any, model: { item: any }) => void {
        return (root, owner, model) => {
            // Expression régulière pour détecter les champs dans le template
            root.innerHTML = template.replace(/{{(\w+)}}/g, (match: string, field :any) => {
                // Remplace chaque champ trouvé par sa valeur correspondante dans model.item
                return model.item[field] || '';
            });
        };
    }

    private filterItems(filterValue: string) {
        const filterMethod = this.customFilterMethod || this.defaultFilterMethod;
        this.filteredItems = filterMethod(this.items, filterValue);
        this.vaadinComboBox.nativeElement.filteredItems = this.filteredItems;
    }

    private defaultFilterMethod(items: any[], filterValue: string): any[] {
        return items.filter(item => item.displayName.toLowerCase().includes(filterValue.toLowerCase()));
    }

}



interface ComboBoxComponentElement extends HTMLElement {

    label: string;
    value: string;
    placeholder: string;
    theme: string;
    helperText: string;
    itemLabelPath: string;
    itemValuePath: string;
    disabled: boolean;
    readonly: boolean;
    items: any[];
    renderer: (root: HTMLElement, comboBox: ComboBoxComponentElement, model: { item: any }) => void;
    renderTemplate: string;
    renderFields: string[];
    renderStyles: string;
    filteredItems: any[];
    autoOpenDisabled: boolean


    requestContentUpdate(): void;
}


/*
*
* :host([theme~="custom-spacing"]) {
  padding: 0;
  min-height: 0;
}

* */
