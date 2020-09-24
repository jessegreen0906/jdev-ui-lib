import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {Heading, HeadingProps} from './Heading';

export default {
    title: 'Components/Heading',
    component: Heading,
    argTypes: {
        text: {control:'text'}
    }
} as Meta;

const Template: Story<{}> = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
    text: 'Heading text'
};

export const H1Pseudo = Template.bind({});
H1Pseudo.args = {
    text: 'Heading text',
    pseudoHeading: true
};

export const H2 = Template.bind({});
H2.args = {
    text: 'Heading text',
    level: 2
};

export const H2Pseudo = Template.bind({});
H2Pseudo.args = {
    text: 'Heading text',
    level: 2,
    pseudoHeading: true
};

export const H3 = Template.bind({});
H3.args = {
    text: 'Heading text',
    level: 3
};

export const H3Pseudo = Template.bind({});
H3Pseudo.args = {
    text: 'Heading text',
    level: 3,
    pseudoHeading: true
};

export const H4 = Template.bind({});
H4.args = {
    text: 'Heading text',
    level: 4
};

export const H4Pseudo = Template.bind({});
H4Pseudo.args = {
    text: 'Heading text',
    level: 4,
    pseudoHeading: true
};

export const H5 = Template.bind({});
H5.args = {
    text: 'Heading text',
    level: 5
};

export const H5Pseudo = Template.bind({});
H5Pseudo.args = {
    text: 'Heading text',
    level: 5,
    pseudoHeading: true
};

export const H6 = Template.bind({});
H6.args = {
    text: 'Heading text',
    level: 6
};

export const H6Pseudo = Template.bind({});
H6Pseudo.args = {
    text: 'Heading text',
    level: 6,
    pseudoHeading: true
};
