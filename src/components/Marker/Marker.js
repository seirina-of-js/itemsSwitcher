import React from 'react';
import classes from './Marker.css'


const marker = props => (

    <div className={classes.Marker}
         style={{
             backgroundColor: props.color === 'green' ? 'green' : 'red',
             top: props.top ? props.top : '',
             bottom: props.bottom ? props.bottom : '',
             left: props.left ? props.left : '',
             right: props.right ? props.right : ''
         }}>
    </div>
)

export default marker;