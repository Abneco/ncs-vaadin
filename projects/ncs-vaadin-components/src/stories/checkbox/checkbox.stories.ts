import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CheckboxComponent} from "../../lib/checkbox/checkbox.component";
import {CheckboxGroupComponent} from "../../lib/checkbox/checkbox-group.component";
import {action} from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CheckboxComponent> = {
    title: 'Components/Checkbox',
    component: CheckboxComponent,
    decorators: [
        moduleMetadata({
            imports: [CheckboxGroupComponent, CheckboxComponent],
        }),
    ],
    tags: ['autodocs'],
    // Ajoutez des contrôles pour les propriétés du composant ici
    argTypes: {
        label: {
            control: 'text',
            description: 'Label of the checkbox',
            defaultValue: 'Default Label',
        },
        checked: {
            control: 'boolean',
            description: 'Checked state of the checkbox',
            defaultValue: false,
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the checkbox is disabled',
            defaultValue: false,
        }
    },
    // render: (args: CheckboxComponent) => ({
    //     props: {
    //         ...args,
    //         onClick: action('Button clicked'),
    //     },
    // }),
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
    args: {
        label: 'checkbox',
    },
};

export const CheckboxGroup: StoryObj = {
    render: (args) => ({
        props: args,
        template: `
            <ncs-checkbox-group [label]="label" [theme]="theme" (valueChanged)="onChange($event)">
                <ncs-checkbox label="Option 1" value="1"></ncs-checkbox>
                <ncs-checkbox label="Option 2" value="2" checked></ncs-checkbox>
                <ncs-checkbox label="Option 3" value="3"></ncs-checkbox>
                <ncs-checkbox label="Option 4" value="4"></ncs-checkbox>
            </ncs-checkbox-group>
        `,
    }),
    args: {
        label: 'Group Label',
        theme: 'vertical',
        onChange: action('change event triggered')
    },
};
