/**
 * qr.js
 * @author Chris Barna <chris@unbrain.net>
 **/

// Some of the base URL variables.
var base = "http://m.scu.edu/events/?eventid=";
var ga_campaign = "CareerCenter";

// QR Settings
var qr_size = 200;
var base_qr = "http://chart.apis.google.com/chart?chs="+qr_size+"x"+qr_size+"&cht=qr&chl=";

document.onkeydown = function(event) {
    if(event.keyCode == 81) {
	url = formURL(getEventId(), "QR", "poster");
	var src = base_qr+url;
	document.getElementById("QR-code").src = src;
	document.getElementById("QR").style.display = 'block';
    }	    
}

function changeImage(value) {
    document.getElementById("QR-code").src = base_qr+formURL(getEventId(), 'QR', value);
}

function formURL(eventid, source, medium) {
    var url = base+eventid+"%26utm_source="+source+"%26utm_medium="+medium+"%26=utm_campaign="+ga_campaign;
    return url;
}

function getEventId() {
    var url = location.href.split('=');
    return url[1];
}

// Unrelated javascript. Hides an element on the CC website.
var sidebarElement = document.getElementById("cs_control_9943888");
sidebarElement.style.display = 'none';
