window.onload = function () {
    const pieces = document.getElementsByTagName('svg');
    for (var i = 0; i < pieces.length; i++) {
        let _piece = pieces[i];
        _piece.onclick = function(t) {
            if (t.target.getAttribute('data-position') != null) {
                document.getElementById('data').innerHTML = t.target.getAttribute('data-position');
                speakText(t.target.getAttribute('data-position')); // Call speakText function with the position data
            }
            if (t.target.parentElement.getAttribute('data-position') != null) {
                document.getElementById('data').innerHTML = t.target.parentElement.getAttribute('data-position');
                speakText(t.target.parentElement.getAttribute('data-position')); // Call speakText function with the position data
            }
        }
    }

    // Function to speak the given text
    function speakText(text) {
        // Play synthetic speech with ResponsiveVoice.js
        responsiveVoice.speak(text, 'Indonesian Female');
    }
}
