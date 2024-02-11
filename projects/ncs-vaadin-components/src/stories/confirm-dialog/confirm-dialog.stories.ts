import type {Meta, StoryObj} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {ConfirmDialogComponent} from "../../lib/confirm-dialog/confirm-dialog.component";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ConfirmDialogComponent> = {
    title: 'Components/ConfirmDialog',
    component: ConfirmDialogComponent,
    tags: ['autodocs'],
    // Ajoutez des contrôles pour les propriétés du composant ici
    argTypes: {
        header: {
            control: 'text',
        },
        // disabled: {
        //   control: { type: 'inline-radio', options: [true, null] },
        // },
        opened: {control: 'boolean'},
        // theme: {
        //     control: 'text',
        // },
        // Pour onClick, vous pouvez simplement afficher une action
        // onClick: {
        //     action: 'clicked',
        // },
    },
    // render: (args: ConfirmDialogComponent) => ({
    //     props: {
    //         ...args,
    //         onClick: action('Button clicked'),
    //     },
    // }),
};

export default meta;
type Story = StoryObj<ConfirmDialogComponent>;

export const ConfirmDialog: StoryObj<ConfirmDialogComponent> = {
    render: (args) => ({
        template: `
            <button (click)="confirmDialog.openDialog()">Open Confirm Dialog</button>
            <ncs-vaadin-confirm-dialog #confirmDialog
                 [header]="header"
                 [confirmText]="confirmText"
                 [cancelButtonVisible]="cancelButtonVisible"
                 [rejectButtonVisible]="rejectButtonVisible"
                 [rejectText]="rejectText"
                 [opened]="opened"
                 (confirm)="onConfirm()"
                 (cancel)="onCancel()"
                 (reject)="onReject()"
            ></ncs-vaadin-confirm-dialog>
        `,
        props: {
            ...args,
            opened: false,
            header: 'Unsaved changes',
            confirmText: 'Save',
            cancelButtonVisible: true,
            rejectButtonVisible: true,
            rejectText: 'Discard',
            onConfirm: action('Confirmed'),
            onCancel: action('Canceled'),
            onReject: action('Rejected'),
        }
    }),
};
