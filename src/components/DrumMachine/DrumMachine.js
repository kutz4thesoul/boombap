import DrumPad from '../DrumPad/DrumPad';
import RangeSlider from '../RangeSlider/RangeSlider';
import Button from '../Button/Button';
import kick from '../../assets/kits/lo-fi/kick.wav';
import clap from '../../assets/kits/lo-fi/clap.wav';
import closedHat from '../../assets/kits/lo-fi/closed-hat.wav';
import openHat from '../../assets/kits/lo-fi/open-hat.wav';

function DrumMachine() {

    // TODO: Expand for multiple kits

    const padData = [
        {trigger: 'Q', sound: new Audio(kick)},
        {trigger: 'W', sound: new Audio(clap)},
        {trigger: 'E', sound: new Audio(closedHat)},
        {trigger: 'A', sound: new Audio(openHat)},
        {trigger: 'S', sound: new Audio(kick)},
        {trigger: 'D', sound: new Audio(clap)},
        {trigger: 'Z', sound: new Audio(closedHat)},
        {trigger: 'X', sound: new Audio(openHat)},
        {trigger: 'C', sound: new Audio(openHat)},

    ];

    const drumPads = padData.map( pad => (<DrumPad key={pad.trigger} trigger={pad.trigger} sound={pad.sound}/>) );

    return (
        <>
            <div className="drum-machine__container">
                <div className="drum-machine__left-container">
                    <div className="drum-machine__pads">
                        {drumPads}
                    </div>
                    <div className="drum-machine__controls">
                        <RangeSlider />
                        <div>
                            <h2 className="drum-machine__sub-heading">Demo</h2>
                            <Button />
                        </div>
                    </div>
                </div>
                <div className="drum-machine__right-container">
                    <p>I am a screen and some text</p>
                </div>
            </div>
        </>
    )
}
export default DrumMachine