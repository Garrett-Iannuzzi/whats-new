import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';


describe('Menu', () => {

  let mockFilterByNewsType;
  let mockBtnTitles;
  let wrapper;

  beforeEach(() => {
    mockFilterByNewsType = jest.fn();
    mockBtnTitles = ['local news', 'entertainment', 'tech', 'science', 'health'];
    wrapper = shallow(<Menu
      filterByNewsType={mockFilterByNewsType}
      btnTitles={mockBtnTitles}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should filter by correct news type when filterByNewsType is clicked, first btn', () => {

  });

  it('should filter by correct news type when filterByNewsType is clicked, second btn', () => {

  });

  it('should filter by correct news type when filterByNewsType is clicked, third btn', () => {

  });

  it('should filter by correct news type when filterByNewsType is clicked, fourth btn', () => {

  });

  it('should filter by correct news type when filterByNewsType is clicked, fifth btn', () => {

  });

})