import type {Meta, StoryObj} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {ComboBoxComponent} from "../../lib/combo-box/combo-box.component";
import {countries} from "../_data/countries";

const customFilterByIdAndName = (items: any[], filterValue: string) => {
    const filterValueLower = filterValue.toLowerCase();
    return items.filter(({ id, name }) => {
        const itemString = `${id.toString()} ${name}`.toLowerCase();
        return itemString.includes(filterValueLower);
    });
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ComboBoxComponent> = {
    title: 'Components/ComboBox',
    component: ComboBoxComponent,
    tags: ['autodocs'],
    // Ajoutez des contrôles pour les propriétés du composant ici
    argTypes: {
        // disabled: {
        //   control: { type: 'inline-radio', options: [true, null] },
        // },
        disabled: {control: 'boolean'},
        readonly: {control: 'boolean'},
        theme: {
            control: 'text',
        },
        // Pour onClick, vous pouvez simplement afficher une action
        selectedItemChange: {
            action: 'filterChange',
        },
        valueChange: {
            action: 'valueChange',
        },
        textInput: {
            action: 'textInput',
        },
        items: {
            control: 'objet',
        },
    },
    render: (args: ComboBoxComponent) => ({
        props: {
            ...args,
            valueChange: action('valueChange'),
            filterChange: action('filterChange'),
            customFilterMethod: customFilterByIdAndName
        },
    }),
};

export default meta;
type Story = StoryObj<ComboBoxComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Small: StoryObj<ComboBoxComponent> = {
    args: {
        label: 'Browser',
        // value: 'BE',
        placeholder: '',
        helperText: 'Select or type a browser',
        theme: 'small',
        items: countries,
        itemLabelPath: 'displayName',
        itemValuePath: 'id',
        // displayNameFields: ['name'], // ['name', 'id']
        displayNameRender: "{{name}}  -  {{id}}",
        render: `<div style="display: flex; align-items: center; justify-content: space-between;">
            <span>{{name}}</span>
            <span style="color: lightslategrey">{{id}}</span>
         </div>`,
        style: 'width: 300px;',
    },
    parameters: {
        docs: {
            source: {
                type: 'code',
                code: `
                        // Votre exemple de code ici
                        const items = [...]; // Remplacez par la définition réelle de vos items

                <ComboBoxComponent
                  label="Browser"
                  helperText="Select or type a browser"
                  theme="small"
                  items={items}
                  itemLabelPath="displayName"
                  itemValuePath="id"
                  displayNameFields={['name']}
                  render={\`
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                      <span>{{name}}</span>
                      <span style="color: lightslategrey">{{id}}</span>
                    </div>\`}
                  style="width: 300px"
                />
                `,
            },
        },
    },
};


