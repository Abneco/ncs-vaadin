import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {AccordionComponent} from "../../lib/accordion/accordion.component";
import {AccordionPanelComponent} from "../../lib/accordion/accordion-panel.component";
import {AccordionHeadingComponent} from "../../lib/accordion/accordion-heading.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<AccordionComponent> = {
    title: 'Components/Accordion',
    component: AccordionComponent,
    decorators: [
        moduleMetadata({
            declarations: [AccordionComponent, AccordionPanelComponent, AccordionHeadingComponent],
        }),
    ],
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
        // onClick: {
        //     action: 'clicked',
        // },
    },
    // render: (args: AccordionComponent) => ({
    //     props: {
    //         ...args,
    //         onClick: action('Button clicked'),
    //     },
    // }),
};

export default meta;
type Story = StoryObj<AccordionComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args


export const Accordion: StoryObj = {
    render: (args) => ({
        props: args,
        template: `
<!--            <ncs-vaadin-accordion>-->
<!--                  <ncs-vaadin-accordion-panel theme="filled">-->
<!--                        <ncs-vaadin-accordion-heading slot="summary">Accordion Panel 1</ncs-vaadin-accordion-heading>-->
<!--                        <div>Accordion is a set of expandable sections.</div>-->
<!--                  </ncs-vaadin-accordion-panel>-->
<!--                    <ncs-vaadin-accordion-panel theme="filled">-->
<!--                        <ncs-vaadin-accordion-heading slot="summary">Accordion Panel 2</ncs-vaadin-accordion-heading>-->
<!--                        <div>Only one accordion panel can be opened.</div>-->
<!--                    </ncs-vaadin-accordion-panel>-->
<!--            </ncs-vaadin-accordion>-->

      <ncs-vaadin-accordion>
                <ncs-vaadin-accordion-panel theme="filled">
                    <div slot="summary">Accordion Panel 1</div>
                    <div>Content for Panel 1</div>
                </ncs-vaadin-accordion-panel>
                <ncs-vaadin-accordion-panel theme="filled">
                    <div slot="summary">Accordion Panel 2</div>
                    <div>Content for Panel 2</div>
                </ncs-vaadin-accordion-panel>
            </ncs-vaadin-accordion>
        `,
    }),
    args: {
        label: 'Group Label',
        theme: 'vertical',
        // onChange: action('change event triggered')
    },
};
