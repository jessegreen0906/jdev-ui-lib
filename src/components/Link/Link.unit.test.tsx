import * as Jest from 'jest';
import {shallow, mount, configure} from 'enzyme';
import {Link} from "./Link";
import React from "react";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Link unit tests', () => {
   it('should render with custom text', () => {
      const Text = 'Test text';
      const link = shallow(<Link text={Text} />);
      expect(link.find('a').text()).toEqual(Text);
   });
});