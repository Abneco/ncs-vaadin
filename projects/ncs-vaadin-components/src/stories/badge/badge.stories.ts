import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from '../../lib/badge/badge.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BadgeComponent> = {
    title: 'Components/Badge',
    component: BadgeComponent,
    tags: ['autodocs'],
    // Ajoutez des contrôles pour les propriétés du composant ici
    argTypes: {
        // disabled: {
        //   control: { type: 'inline-radio', options: [true, null] },
        // },
        // disabled: {control: 'boolean'},
        theme: {
            control: 'text',
        },
        // Pour onClick, vous pouvez simplement afficher une action
        // onClick: {
        //     action: 'clicked',
        // },
    },
    // render: (args: BadgeComponent) => ({
    //     props: {
    //         ...args,
    //         onClick: action('Button clicked'),
    //     },
    // }),
};

export default meta;
type Story = StoryObj<BadgeComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Pending: Story = {
    args: {
        label: 'Pending',
        theme: 'badge',
    },
};

export const Confirmed: Story = {
    args: {
        label: 'Confirmed',
        theme: 'badge success',
    },
};


export const Denied: Story = {
    args: {
        label: 'Denied',
        theme: 'badge error',
    },
};

export const OnHold: Story = {
    args: {
        label: 'On hold',
        theme: 'badge contrast',
    },
};
