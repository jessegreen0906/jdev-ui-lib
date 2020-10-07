import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {Link, LinkProps} from './Link';

export default {
    title: 'Components/Link',
    component: Link,
    argTypes: {
        text: {control:'text'}
    }
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Standard = Template.bind({});
Standard.args = {
    text: 'Link text'
};


