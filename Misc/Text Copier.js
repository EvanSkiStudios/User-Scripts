// ==UserScript==
// @name         Copy Selected Text on F2
// @namespace    https://example.com/
// @version      1.0
// @description  Copies highlighted text to clipboard when F2 is pressed
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener('keydown', (e) => {
        if (e.key === 'F2') {
            const selection = window.getSelection().toString();
            if (!selection) return;

            navigator.clipboard.writeText(selection).catch(() => {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = selection;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            });
        }
    });
})();