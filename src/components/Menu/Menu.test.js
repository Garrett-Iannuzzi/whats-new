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

  describe('Search Buttons', () => {
    it('should filter by correct news type when filterByNewsType is clicked, first btn', () => {
      wrapper.find('button').at(0).simulate('click');
      expect(mockFilterByNewsType).toHaveBeenCalled();
    });
  
    it('should filter by correct news type when filterByNewsType is clicked, second btn', () => {
      wrapper.find('button').at(1).simulate('click');
      expect(mockFilterByNewsType).toHaveBeenCalled();
    });
  
    it('should filter by correct news type when filterByNewsType is clicked, third btn', () => {
      wrapper.find('button').at(2).simulate('click');
      expect(mockFilterByNewsType).toHaveBeenCalled();
    });
  
    it('should filter by correct news type when filterByNewsType is clicked, fourth btn', () => {
      wrapper.find('button').at(3).simulate('click');
      expect(mockFilterByNewsType).toHaveBeenCalled();
    });
  
    it('should filter by correct news type when filterByNewsType is clicked, fifth btn', () => {
      wrapper.find('button').at(4).simulate('click');
      expect(mockFilterByNewsType).toHaveBeenCalled();
    });
  })


})