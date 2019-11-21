import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';
import { jsxEmptyExpression } from '@babel/types';

describe('Search Form', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<SearchForm
      input={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot();
  });

})