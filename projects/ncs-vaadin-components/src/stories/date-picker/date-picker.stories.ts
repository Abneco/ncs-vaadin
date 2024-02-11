import type { Meta, StoryObj } from '@storybook/angular';
import {DatePickerComponent} from "../../lib/date-picker/date-picker.component";
import {action} from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<DatePickerComponent> = {
    title: 'Components/DatePicker',
    component: DatePickerComponent,
    tags: ['autodocs'],
    // Ajoutez des contrôles pour les propriétés du composant ici
    argTypes: {
        disabled: {control: 'boolean'},
        readonly: {control: 'boolean'},
        theme: {
            control: 'text',
        },
        label: {
            control: 'text',
        },
        value: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
        helperText: {
            control: 'text',
        },
        min: {
            control: 'text',
        },
        max: {
            control: 'text',
        },
        errorMessage: {
            control: 'text',
        },
        // Pour onClick, vous pouvez simplement afficher une action
        onChange: {
            action: 'date changed',
        },
    },
     // render: (args: DatePickerComponent) => ({
     //     props: {
     //         ...args,
     //         onClick: action('DatePickerComponent changed'),
     //     },
     // }),
};

export default meta;
type Story = StoryObj<DatePickerComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DatePicker: Story = {
    args: {
        label: 'Date Picker Small',
        theme: 'small',
        helperText: 'Select or type a browser - Format: DD/MM/YYYY',
        value: '2025-01-01'
    },
};

export const DatePickerError: Story = {
    args: {
        label: 'Date Picker Error',
        helperText: 'Select or type a browser - Format: DD/MM/YYYY',
        value: '2025-01-01',
        errorMessage: 'test error message',
        min: '2024-01-01',
    },
};
