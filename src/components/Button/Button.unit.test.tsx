import * as Jest from 'jest';
import {shallow, mount, configure} from 'enzyme';
import {Button} from "./Button";
import React from "react";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Button unit tests', () => {
   it('should render by default now', () => {
      const button = shallow(<Button />);
   });
   
   it('should render with custom text', () => {
      const Text = 'Test text';
      const button = shallow(<Button text={Text} />);
      expect(button.find('button').text()).toEqual(Text);
   });
   
   it('should take action', () => {
      const Function = jest.fn();
      const button = mount(<Button action={Function} text={''}/>);
      button.find('button').simulate('click');
      expect(Function).toBeCalled();
   })
});