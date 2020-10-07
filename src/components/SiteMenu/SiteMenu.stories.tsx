import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {SiteMenu, SiteMenuProps} from './SiteMenu';

export default {
	title: 'Components/SiteMenu',
	component: SiteMenu,
} as Meta;

const Template: Story<{}> = (args) => <SiteMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};