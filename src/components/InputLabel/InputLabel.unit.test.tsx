import {shallow, configure} from 'enzyme';
import {InputLabel} from "./InputLabel";
import React from "react";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Input label unit tests', () => {
	it('should render the text', () => {
		const Text = 'Test text';
		const label = shallow(<InputLabel text={Text} /> );
		expect(label.find('label').text()).toEqual(Text);
	})
});