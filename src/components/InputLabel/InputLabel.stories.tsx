import React from 'react';
import {Story, Meta} from "@storybook/react/types-6-0";
import {InputLabel, InputLabelProps} from "./InputLabel";

export default {
	title: 'Components/Inputlabel',
	component: InputLabel,
	argTypes: {
		text: {control:'text'}
	}
} as Meta;

const Template: Story<InputLabelProps> = (args) => <InputLabel {...args} />

export const Standard = Template.bind({});
Standard.args = {
	text: 'This is a ....err.... thing'
}