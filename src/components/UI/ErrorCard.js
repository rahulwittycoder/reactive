import React from 'react';

import './ErrorCard.css';

const ErrorCard = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}
export default ErrorCard;