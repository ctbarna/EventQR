// Some of the base URL variables.
var base = "http://m.scu.edu/events/?eventid=";
var campaign = "CareerCenter";

document.onkeydown = function(event) {
    if(event.keyCode == 81) {
	url = formURL(getEventId(), "QR", "poster");
	var src = "http://chart.apis.google.com/chart?chs=200x200&cht=qr&chl="+url;
	document.getElementById("QR-code").src = src;
	document.getElementById("QR").style.display = 'block';
    }	    
}

function changeImage(value) {
    document.getElementById("QR-code").src = "http://chart.apis.google.com/chart?chs=200x200&cht=qr&chl="+formURL(getEventId(), 'QR', value);
}

function formURL(eventid, campaign, medium) {
    var url = "http://m.scu.edu/events/?eventid="+eventid+"%26utm_source="+campaign+"%26utm_medium="+medium+"%26=utm_campaign=CareerCenter";
    return url;
}

function getEventId() {
    var url = location.href.split('=');
    return url[1];
}

// Unrelated javascript. Hides an element on the CC website.
var sidebarElement = document.getElementById("cs_control_9943888");
sidebarElement.style.display = 'none';
