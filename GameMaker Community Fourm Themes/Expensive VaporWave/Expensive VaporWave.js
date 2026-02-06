// Requires theme to be set to cheap vaporwave


// This is all just for playing vaporwave on the forum using SoundCloud


// Inject SoundCloud iframe player
const iframe = document.createElement("iframe");
iframe.src = "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-204876641/home-resonance-432-hz-slowed";
iframe.width = "300";
iframe.height = "150";
iframe.allow = "autoplay";
iframe.style.position = "fixed";
iframe.style.bottom = "10px";
iframe.style.right = "10px";
iframe.style.zIndex = "9999";
document.body.appendChild(iframe);

// Load SoundCloud API
const script = document.createElement("script");
script.src = "https://w.soundcloud.com/player/api.js";
document.body.appendChild(script);

script.onload = () => {
  const player = SC.Widget(iframe);

  // Create Play Button
  const playButton = document.createElement("button");
  playButton.textContent = "Play";
  playButton.onclick = () => player.play();
  document.body.appendChild(playButton);

  // Create Pause Button
  const pauseButton = document.createElement("button");
  pauseButton.textContent = "Pause";
  pauseButton.onclick = () => player.pause();
  document.body.appendChild(pauseButton);
};