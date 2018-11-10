import React from 'react';
import ReactDom from 'react-dom';
import PropertyInput from './PropertyInput';

describe('PropertyInput Container',()=>{
    it('should render without crashing',()=>{
        const div = document.createElement('div');
        ReactDom.render(<PropertyInput />,div);
        ReactDom.unmountComponentAtNode(div);
    });
});
