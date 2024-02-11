import type { Meta, StoryObj } from '@storybook/angular';
import {IconComponent} from "../../lib/icon/icon.component";
import {action} from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<IconComponent> = {
    title: 'Components/Icons',
    component: IconComponent,
    tags: ['autodocs'],
    // Ajoutez des contrôles pour les propriétés du composant ici
    argTypes: {
        // // disabled: {
        // //   control: { type: 'inline-radio', options: [true, null] },
        // // },
        // disabled: {control: 'boolean'},
        // theme: {
        //     control: 'text',
        // },
        icon: {
            control: 'text',
        }
        // // Pour onClick, vous pouvez simplement afficher une action
        // onClick: {
        //     action: 'clicked',
        // },
    },
    // render: (args: DatePickerComponent) => ({
    //     props: {
    //         ...args,
    //         onClick: action('Button clicked'),
    //     },
    // }),
};

export default meta;
type Story = StoryObj<IconComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Clock: Story = {
    args: {
        icon: 'lumo:clock',
        role: "img",
        ariaLabel: "Favorite"
    },
};

export const Photo: Story = {
    args: {
        icon: 'lumo:photo',
        role: "img",
        ariaLabel: "Favorite"
    },
};


