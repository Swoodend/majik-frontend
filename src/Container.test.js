import React from 'react';
import Container from './Container';
import { shallow, mount } from 'enzyme';

describe("<Container/>", () => {
    it("render without crashing", () => {
        let containers = [<div>Hello</div>, <div>World</div>];
        let component = shallow(<Container subcontainers={containers}/>);
        expect(component.length).toEqual(1);
    });

    it("should render this.props.subcontainers amount of <Subcontainers/>", () => {
        let containers = [<div>Hello</div>, <div>World</div>];
        let component = shallow(<Container subcontainers={containers}/>);
        expect(component.find('.container').children().length).toEqual(component.getProps('subcontainers').length);
    });

});