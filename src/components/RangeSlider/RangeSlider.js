import { useState } from 'react';

function RangeSlider() {

    const [rangeVal, setRangeVal] = useState([
        {
            name: 'Volume',
            min: 0,
            max: 100,
            value: 50
        },
        {
            name: 'Tempo',
            min: 60,
            max: 140,
            value: 120
        }
    ]);

    return (
        // iterate through the state to display both sliders
        rangeVal.map((range, index) => {
            return (
                <div key={index} className="drum-machine__range-container">
                    <h2 className="drum-machine__sub-heading">{range.name}</h2>
                    <input type="range" min={range.min} max={range.max} />
                </div>
            )
        })
    )
}

export default RangeSlider;