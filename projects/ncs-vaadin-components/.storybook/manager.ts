import { addons } from '@storybook/manager-api';
import { ncsTheme } from './ncs-theme';

addons.setConfig({
    theme: ncsTheme
});
