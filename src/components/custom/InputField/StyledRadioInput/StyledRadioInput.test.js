import React from 'react';
import StyledRadioInput from '.';
import { shallow, } from 'enzyme';

describe('<StyledRadioInput />', () => {
    it('should render button without crashing', () => {
        shallow(<StyledRadioInput />);
    });

    it('should receive clicks', () => {
        const onClick = jest.fn();
        const button = shallow(<StyledRadioInput onClick={onClick} />);
        
        expect(onClick).toBeCalledTimes(0);
        button.find('button').simulate('click');
        expect(onClick).toBeCalledTimes(1);
    })

})
