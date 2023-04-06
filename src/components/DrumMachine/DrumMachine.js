import './DrumMachine.css';
import DrumPad from '../DrumPad/DrumPad';
import kick from '../../assets/sounds/kick.wav';
import clap from '../../assets/sounds/clap.wav';
import closedHat from '../../assets/sounds/closed-hat.wav';
import openHat from '../../assets/sounds/open-hat.wav';

const padData = [
    {trigger: 'A', sound: new Audio(kick)},
    {trigger: 'S', sound: new Audio(clap)},
    {trigger: 'D', sound: new Audio(closedHat)},
    {trigger: 'F', sound: new Audio(openHat)},
];

const drumPads = padData.map( pad => (<DrumPad key={pad.trigger} trigger={pad.trigger} sound={pad.sound}/>) );

function DrumMachine() {

    return (
        <>
            <h1>The Boom Bap</h1>
            <div className="drum-machine__pad-container">{drumPads}</div>
        </>
    )
}
export default DrumMachine