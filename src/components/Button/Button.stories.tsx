import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {SimpleButton, ButtonProps} from './Button';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

export const Primary:React.FunctionComponent<{}> = SimpleButton;

// export const Primary = () => <Button />;
// export const Primary: React.SFC<ButtonProps> = () => <Button />

// const Template:Story<ButtonProps> = (args) => <Button {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
// };

