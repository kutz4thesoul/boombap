import './DrumPad.css';

function handleClick(sound) {
    sound.currentTime = 0;
    sound.play();
}

function DrumPad(props) {

    window.addEventListener('keydown', handleKeyDown);
    function handleKeyDown(value) {
        const keyPressed = value.key.toUpperCase();
        if ( keyPressed === props.trigger ) {
            props.sound.currentTime = 0;
            props.sound.play();
        }
    }

    return(
        <div className="drum-machine__pad" onClick={() => handleClick(props.sound)}>{props.trigger}</div>
    )
}

export default DrumPad