import React from 'react';
import classes from './MarkersList.css'
import Marker from '../Marker/Marker';

const markersList = props => (
    <div className={classes.wrapper}>
        <div className={classes.container}>
        {
            props.items.map( item => <Marker key={item.id} {...item} />)
        }
        </div>
    </div>
)


export default markersList;