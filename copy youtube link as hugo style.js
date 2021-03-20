// ==UserScript==
// @name         Copy Link as Hugo style
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/watch?*
// @grant    GM_registerMenuCommand
// @grant    GM_setClipboard
// ==/UserScript==
'use strict';

function getlink () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const v = urlParams.get('v')
    //console.log(v);

    var markdown_link = ["{{<", "youtube", v, ">}}"].join(" ");
    //console.log (markdown_link);
    GM_setClipboard(markdown_link);
}
GM_registerMenuCommand ("Youtube LInk as Hugo style", getlink);