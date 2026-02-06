//window.location.replace("https://youtu.be/ZXsQAXx_ao0?t=3");


// Function to handle clipboard write event
function handleClipboardWrite(event) {
    //console.log("Something was written to the clipboard!");
    
    // Get clipboard text (requires site permission)
    navigator.clipboard.readText()
        .then(text => {
        	console.log("Clipboard content:", text);
        	
        	searchTerm = 'https:';
					indexOfFirst = text.indexOf(searchTerm);
				//	console.log("indexOfFirst:", indexOfFirst);
					
					if (indexOfFirst == -1) { return; }
        	
        	// modify twitter link to fix embed
            linkStart = text.slice(0, 8); // https://
            linkEnd = text.slice(9, (text.length)) //.com~
            
            fixedLink = linkStart+"fxtwitter"+linkEnd;
            console.log(fixedLink);
            
            // write fixed link to clipboard
			navigator.clipboard.writeText(String(fixedLink));
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
}


// Event listener for 'copy' event
document.addEventListener('copy', function(event) {
    handleClipboardWrite(event);
});

