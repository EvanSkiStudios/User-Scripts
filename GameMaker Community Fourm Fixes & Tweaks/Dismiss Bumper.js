// ==UserScript==
// @name         Dismiss forum notice
// @namespace    https://example.com/
// @version      1.1
// @description  Adds an X button to forum notices and removes the entire notice item on click
// @match        https://forum.gamemaker.io/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const notices = document.querySelectorAll('.notice-content');

    notices.forEach(noticeContent => {
        // Prevent duplicate buttons
        if (noticeContent.querySelector('.custom-notice-close')) return;

        if (getComputedStyle(noticeContent).position === 'static') {
            noticeContent.style.position = 'relative';
        }

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '×';
        closeBtn.className = 'custom-notice-close';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '4px';
        closeBtn.style.right = '6px';
        closeBtn.style.border = 'none';
        closeBtn.style.background = 'transparent';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.fontSize = '16px';
        closeBtn.style.lineHeight = '1';
		closeBtn.style.color = 'rgb(183 181 181)';

        closeBtn.addEventListener('click', () => {
            const noticeItem = noticeContent.closest('li.notice');
            if (noticeItem) {
                noticeItem.remove();
            }
        });

        noticeContent.appendChild(closeBtn);
    });
})();
