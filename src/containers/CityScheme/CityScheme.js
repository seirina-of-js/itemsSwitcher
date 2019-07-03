import React, { Component } from 'react';
import SchemeImage from '../../assets/city-image.jpg';
import classes from './CityScheme.css'
import MarkersList from '../../components/MarkersList/MarkersList';

class CityScheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'City Scheme',
            markers: [
                {
                    color: 'green',
                    top: '60%',
                    left: '20%',
                    id: 1
                },
                {
                    color: 'red',
                    top: '10%',
                    left: '50%',
                    id: 2

                },
                {
                    color: 'red',
                    top: '55%',
                    right: '30%',
                    id: 3
                },
                {
                    color: 'green',
                    bottom: '10%',
                    right: '40%',
                    id: 4
                }
            ],
            markersShown: 'green'
        };
    }

    filterMarkers() {
        const { markers, markersShown } = this.state;
        let markersFiltered;

        if (markersShown === 'green') {
            console.log('here')
            markersFiltered = markers.filter(item => item.color === 'green');
        }
        if (markersShown === 'red') {
            markersFiltered = markers.filter(item => item.color === 'red');
        }
        return markersFiltered;
    }

    switchMarkers() {
        this.setState({
            markersShown: event.target.value
        });
    }

    render() {
        const { title, markersShown } = this.state;

        return (
            <div className={classes.wrap}>
                <div className={classes.switchers}>
                    <div className={classes.switcher}>
                        <label className={classes.label} htmlFor="switchMarkersToRed">Красный</label>
                        <input
                            type="radio"
                            checked={markersShown === 'red'}
                            name="markersToShow"
                            id="switchMarkersToRed"
                            value="red"
                            className={classes.radioButton}
                            onChange={() => this.switchMarkers()}
                        />
                    </div>
                    <div className={classes.switcher}>
                        <label className={classes.label} htmlFor="switchMarkersToGreen">Зеленый</label>
                        <input
                            type="radio"
                            checked={markersShown === 'green'}
                            name="markersToShow"
                            id="switchMarkersToGreen"
                            value="green"
                            className={classes.radioButton}
                            onChange={() => this.switchMarkers()}
                        />

                    </div>
                </div>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.schemeContainer}>
                    <img src={SchemeImage} className={classes.schemeImg}/>
                    <MarkersList items={this.filterMarkers()} />
                </div>
            </div>
        )
    }
}

export default CityScheme;