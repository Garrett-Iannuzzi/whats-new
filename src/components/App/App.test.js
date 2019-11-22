import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local';
import technology from '../../data/technology';


describe('App', () => {

  let wrapper
  const mockArticle = [{
    id: 2,
    description: "The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library. Skeletal wings extend to the side, and it looks downright prehistoric.",
    headline: "Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner",
    img: "https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376",
    url: "https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/",
  }];
  
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  
  it('should render an App component', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('Default Properties', () => {
    it('should load with the local news displaying', () => {
      expect(wrapper.state().data).toEqual(local);
    });
  });
  
  describe('Methods', () => {
    it('should change news displayed based on a string from a search button', () => {
      const mockEvent = { target: { dataSets: 'tech' } };
      const expected = technology;
      expect(wrapper.state('data')).toEqual(local)
      wrapper.instance().filterByNewsType(mockEvent.target.dataSets.text())
      expect(wrapper.instance().setState('data')).toEqual(expected)
    });

    it('should display stories based on a search result', () => {
      expect(wrapper.state('data')).toEqual(local)
      wrapper.instance().handleSearch('SkeLeton');
      expect(wrapper.state('data')).toEqual(mockArticle);
    })
  });
});

