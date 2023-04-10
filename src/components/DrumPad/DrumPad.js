function DrumPad(props) {

    function handleClick(sound) {
        sound.currentTime = 0;
        sound.play();
    }

    window.addEventListener('keydown', handleKeyDown);
    function handleKeyDown(value) {
        const keyPressed = value.key.toUpperCase();
        if ( keyPressed === props.trigger ) {
            props.sound.currentTime = 0;
            props.sound.play();
        }
    }

    return(
        <div className="drum-machine__pad" onClick={() => handleClick(props.sound)}><p>{props.trigger}</p></div>
    )
}

export default DrumPad