import React from 'react';
import Custombutton from '.';
import { shallow } from 'enzyme';

describe('check if button functions', () => {
    it('should render button without crashing', () => {
        shallow(<Custombutton />);
    });

    it('should receive clicks', () => {
        const onClick = jest.fn();
        const button = shallow(<Custombutton title='test button' bgColor='green' type='sumbit' onclick={onClick} />);
        
        expect(onClick).toBeCalledTimes(0);
        button.find('button').simulate('click');
        expect(onClick).toBeCalledTimes(1);
    })

})
