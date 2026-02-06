/* change poo to speak no evil monkey */
const collection = document.getElementsByClassName("smilie smilie--emoji");
for (let i = 0; i < collection.length; i++) {
  if (collection[i].alt == "💩"){
  	collection[i].src = "https://cdn.jsdelivr.net/gh/joypixels/emoji-assets@5.0/png/64/1f64a.png";
  }
}