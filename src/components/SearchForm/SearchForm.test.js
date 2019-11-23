import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('Search Form', () => {

  let event = { keyCode: 13, target: { name: 'input', value: 'test value' } };
  let wrapper
  let handleSearchMock

  beforeEach(() => {
    handleSearchMock = jest.fn();
    wrapper = shallow(<SearchForm 
      handleSearch={handleSearchMock}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state on the input', () => {
    wrapper.instance().handleChange(event)
    expect(wrapper.state('inputValue')).toEqual('test value')
  });

  it('should call handleSearch when the search button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(handleSearchMock).toHaveBeenCalled()
  });

  it('should run handleEnterKey when the enter key is pressed', () => {
    wrapper.instance().handleEnterKey(event)
    expect(handleSearchMock).toHaveBeenCalled()
  });
});