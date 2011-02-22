/**
 * qr.js
 *
 *  Copyright 2011 Chris Barna <chris@unbrain.net>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 **/

// Some of the base URL variables.
var base;
var base_choice = new Array();

base_choice[0] = "http://m.scu.edu/events/?eventid=";
base_choice["careercenter"] = "http://m.scu.edu/careercenter/?eventid=";

// Google Analytics info.
var ga_campaign = generateCampaignName();
var ga_medium = "poster";

if (base_choice[generateCampaignName()] != undefined) {
    base = base_choice[generateCampaignName()];
} else {
    base = base_choice[0];
}

// QR Settings
var qr_size = 200;
var base_qr = "http://chart.apis.google.com/chart?chs="+qr_size+"x"+qr_size+"&cht=qr&chl=";

// GA Mediums
var mediums = ["Posters", "Benson Screens"];

window.onload = function() {
    for (i=0; i < mediums.length; i++) {
	var option = document.createElement("option");
	option.innerHTML = mediums[i];
	option.value = mediums[i].replace(" ", "+");
	document.getElementById("QR-select").appendChild(option);
    }
}

// Set event listener for the 'q' key.
document.onkeydown = function(event) {
    if(event.keyCode == 81) {
	url = formURL(getEventId(), "QR", ga_medium);
	var src = base_qr+url;
	document.getElementById("QR-code").src = src;
	document.getElementById("QR").style.width = qr_size+"px";
	document.getElementById("QR").style.display = 'block';
    }	    
}

function changeImage(value) {
    ga_medium = value;
    document.getElementById("QR-code").src = base_qr+formURL(getEventId(), 'QR', value);
}

function changeImageSize(value) {
    setBaseQR(value);
    changeImage(ga_medium);
    document.getElementById("QR").style.width = value+"px";
}

function setBaseQR(size) {
    base_qr = "http://chart.apis.google.com/chart?chs="+size+"x"+size+"&cht=qr&chl=";}

// Form the URL to be passed to Google with utm codes
function formURL(eventid, source, medium) {
    var url = base+eventid+"%26utm_source="+source+"%26utm_medium="+medium+"%26=utm_campaign="+ga_campaign;
    ga_medium = medium;
    return url;
}

// Return the event ID.
function getEventId() {
    vars = getUrlVars();
    return vars["event"];
}

// Get the URL encoded values. (http://snipplr.com/view/799/get-url-variables/)
function getUrlVars() {
    var vars  = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') +1).split('&');

    for (var i = 0; i < hashes.length; i++) {
	hash = hashes[i].split('=');
	vars.push(hash[0]);
	vars[hash[0]] = hash[1];
    }

    return vars;
}

// Split URL at slashes to generate GA campaign.
function generateCampaignName() {
    var splitURL = window.location.href.split('/');
    return splitURL[3];
}

// Unrelated javascript. Hides an element on the CC website.
var sidebarElement = document.getElementById("cs_control_9943888");
sidebarElement.style.display = 'none';
