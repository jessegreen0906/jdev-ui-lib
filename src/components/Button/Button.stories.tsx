import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {Button, ButtonProps} from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        text: {control:'text'}
    }
} as Meta;

const Template: Story<{}> = (args) => <Button {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    text: 'Button text'
};

export const Alternate = Template.bind({});
Alternate.args = {
    text: 'Alternate button',
    variant: 'alternate'
}

