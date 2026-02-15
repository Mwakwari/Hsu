onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    document.body.addEventListener('click', function() {
            var audio = document.getElementById('myAudio');
            audio.play().then(() => {
                // Audio is playing
            }).catch(error => {
                alert('Please enable audio permissions in your browser settings to play sound.');
            });
        });
  };
