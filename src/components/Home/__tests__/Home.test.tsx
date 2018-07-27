import { ShallowWrapper, shallow } from 'enzyme';
import * as React from 'react';

import Home from '../Home';

describe('App', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});