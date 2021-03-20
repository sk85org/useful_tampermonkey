// ==UserScript==
// @name         Copy link and title as markdown style
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant    GM_registerMenuCommand
// @grant    GM_setClipboard
// ==/UserScript==



function getlink () {
    var url = window.location.href;
    var title = document.title;
    var markdown_link = ["[", title, "]","(",url,")"].join("");
    console.log (markdown_link);
    GM_setClipboard (markdown_link);
}
GM_registerMenuCommand ("Markdown LInk", getlink);