import { create } from '@storybook/theming/create';


export const ncsTheme = create({
    base: 'dark',
    // Typographie
    // fontBase: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    // fontCode: 'monospace',

    // Branding (remplacez par vos propres valeurs si nécessaire)
    brandTitle: 'NcsVaadin Storybook',
    brandUrl: 'https://neuronics.be',
    brandImage: 'https://www.neuronics.be/assets/logo/vaadin-logo.png',
    brandTarget: '_self',

    // Couleurs
    colorPrimary: '#FF4785',
    colorSecondary: '#2260c4',

    // UI
    appBg: '#1E1F22',
    appContentBg: '#1a1a1a',
    appBorderColor: '#232528',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#E6E6E6',
    textInverseColor: '#2260c4',

    // Toolbar default and active colors
    barTextColor: '#E6E6E6',
    barSelectedColor: '#ffffff',
    barBg: '#232528',

    // Form colors
    inputBg: '#1E1F22',
    inputBorder: '#2260c4',
    inputTextColor: '#2260c4',
    inputBorderRadius: 4,

})
