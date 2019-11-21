import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';


describe('Menu', () => {
  const mockHandleButton = jest.fn();
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Menu
      h1='What/s News'
      // handleButton={mockHandleButton}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

})