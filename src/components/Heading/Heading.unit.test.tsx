import * as Jest from 'jest';
import {shallow, mount, configure} from 'enzyme';
import {Heading} from "./Heading";
import React from "react";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Heading unit tests', () => {
});