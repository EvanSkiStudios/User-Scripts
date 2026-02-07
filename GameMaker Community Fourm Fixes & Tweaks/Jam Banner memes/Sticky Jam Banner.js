// ==UserScript==
// @name         Sticky Forum Notice on Scroll
// @namespace    https://example.com/sticky-notice
// @version      1.0
// @description  Stick notice banner to top when scrolling
// @match        https://forum.gamemaker.io/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const noticeList = document.querySelector('.notices.notices--block');
    if (!noticeList) return;

    const originalOffsetTop = noticeList.offsetTop;
    const placeholder = document.createElement('div');
    let isSticky = false;

    function onScroll() {
        if (window.scrollY > originalOffsetTop && !isSticky) {
            placeholder.style.height = `${noticeList.offsetHeight}px`;
            noticeList.parentNode.insertBefore(placeholder, noticeList);

            noticeList.style.position = 'fixed';
            noticeList.style.top = '0';
            noticeList.style.left = '0';
            noticeList.style.right = '0';
            noticeList.style.zIndex = '1000';

            isSticky = true;
        }

        if (window.scrollY <= originalOffsetTop && isSticky) {
            noticeList.style.position = '';
            noticeList.style.top = '';
            noticeList.style.left = '';
            noticeList.style.right = '';
            noticeList.style.zIndex = '';

            if (placeholder.parentNode) {
                placeholder.parentNode.removeChild(placeholder);
            }

            isSticky = false;
        }
    }

    window.addEventListener('scroll', onScroll);
})();
