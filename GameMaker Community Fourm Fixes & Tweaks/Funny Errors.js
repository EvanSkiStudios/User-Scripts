const mainBody = document.querySelector('.p-body-main');

if (mainBody) {
    const errorBlock = mainBody.querySelector('.blockMessage');
    // if (errorBlock && errorBlock.textContent.includes('An error occurred')) {
    if (errorBlock){
	    if (errorBlock.textContent.includes('The requested page could not be found.') || errorBlock && errorBlock.textContent.includes('An error occurred')){
	        handlePageError();
	        
	        // Wait for page load
	        /*
					window.addEventListener('load', () => {
					    const delayInMilliseconds = 17000; // Change delay here (seconds)
					
					    setTimeout(() => {
					        const divs = document.querySelectorAll('div');
					
					        divs.forEach(div => {
					            // Make sure each div is positioned relative for the transform to work properly
					            div.style.position = 'relative';
					            div.style.transition = 'transform 2s ease-in';
					
					            // Trigger the "fall"
					            div.style.transform = 'translateY(1000px)';
					        });
					
					    }, delayInMilliseconds);
					});
					*/
	    }
    }
}


function handlePageError() {
		console.log('Error detected in page.');
    const errorBlock = document.querySelector('.p-body-main .blockMessage');

    if (errorBlock) {
        // Create new div
        const videoContainer = document.createElement('div');
        videoContainer.style.marginTop = '20px';

        // Embed YouTube iframe
        videoContainer.innerHTML = `
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/slwmJLaVrdE?autoplay=1&mute=0"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen>
            </iframe>
        `;

        // Append the video div
        errorBlock.appendChild(videoContainer);
    }
}

