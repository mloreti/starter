import { ShallowWrapper, shallow } from 'enzyme';
import * as React from 'react';

import App from '../App';

describe('App', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});