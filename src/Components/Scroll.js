import { props } from 'bluebird';
import React from 'react';

const Scroll = (props) => {

return (<div className="cards" >
    {props.children}
</div>);
};

export default Scroll;