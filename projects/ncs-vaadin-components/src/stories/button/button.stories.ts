import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../../lib/button/button.component';
import {action} from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
    title: 'Components/Button',
    component: ButtonComponent,
    tags: ['autodocs'],
    // Ajoutez des contrôles pour les propriétés du composant ici
    argTypes: {
        // disabled: {
        //   control: { type: 'inline-radio', options: [true, null] },
        // },
        disabled: {control: 'boolean'},
        theme: {
            control: 'text',
        },
        // Pour onClick, vous pouvez simplement afficher une action
        onClick: {
            action: 'clicked',
        },
    },
    render: (args: ButtonComponent) => ({
        props: {
            ...args,
            onClick: action('Button clicked'),
        },
    }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
    args: {
        label: 'Button Small',
        theme: 'small',
    },
};

export const Normal: Story = {
    args: {
        label: 'Button Normal',
        theme: 'normal',
    },
};

export const Large: Story = {
    args: {
        label: 'Button Large',
        theme: 'large',
    },
};
