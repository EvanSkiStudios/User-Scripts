// ==UserScript==
// @name         Recursive notice duplication
// @namespace    https://example.com/
// @version      1.0
// @description  Duplicates forum notices every 30 seconds, including all duplicates
// @match        https://forum.gamemaker.io/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const INTERVAL_MS = 5000;

    function duplicateNotice(noticeLi) {
        const clone = noticeLi.cloneNode(true);
        noticeLi.parentNode.appendChild(clone);
        scheduleDuplication(clone);
    }

    function scheduleDuplication(noticeLi) {
        setTimeout(() => {
            // Ensure the node still exists in DOM
            if (!document.body.contains(noticeLi)) return;
            duplicateNotice(noticeLi);
        }, INTERVAL_MS);
    }

    // Initialize for existing notices
    const notices = document.querySelectorAll('li.notice');
    notices.forEach(scheduleDuplication);

})();
