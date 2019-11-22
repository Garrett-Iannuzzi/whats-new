import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('News Container', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const articles = [
        { img: '//www.img.com', headline: 'Go Nuggets', description: 'They win 5th' }, 
        { img: '//www.img.com', headline: 'Go Broncos', description: 'Spoiler, they suck'}
      ]
    const wrapper = shallow(<NewsContainer 
      articles={articles}
    />)
    expect(wrapper).toMatchSnapshot();
  });

})