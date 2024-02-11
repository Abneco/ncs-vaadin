import type { Meta, StoryObj } from '@storybook/angular';
import {PasswordFieldComponent} from "../../lib/password-field/password-field.component";
import {Input} from "@angular/core";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<PasswordFieldComponent> = {
    title: 'Components/PasswordField',
    component: PasswordFieldComponent,
    tags: ['autodocs'],
    // Ajoutez des contrôles pour les propriétés du composant ici
    argTypes: {
        label: {
            control: 'text',
        },
        value: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
        minLength: {
            control: 'text',
        },
        maxLength: {
            control: 'text',
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
type Story = StoryObj<PasswordFieldComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PasswordField: Story = {
    args: {
        label: 'Password',
        value: 'Ex@mplePassw0rd',
        minLength: '6',
        maxLength: '16',
        placeholder: 'Enter your password',
    },
};


