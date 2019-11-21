import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local';

describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('Default Properties', () => {
    it('should load with the local news displaying', () => {
      expect(wrapper.state().data).toEqual(local);
    });
  });

  it('should render an App component', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('Methods', () => {
    it('should change news displayed based on a search', () => {

    });
  });

});

