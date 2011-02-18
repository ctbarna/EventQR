<script type="text/javascript" src="qr.js"></script>
<div id="QR" style="left:200px; top:200px; position:fixed;display:none; background-color:#fff;border:1px solid #000;padding:5px;">
    <div style="float:right;"><a href="#" onclick="javascript:document.getElementById('QR').style.display = 'none';">X</a></div>
    <img src="" id="QR-code"/>
    <select id="QR-select" onChange="javascript:changeImage(this.value)" style="float:left;">
    </select>
    <select id="QR-size" onChange="javascript:changeImageSize(this.value)" style="float:left;">
	<option value="200">200x200</option>
	<option value="300">300x300</option>
	<option value="400">400x400</option>
    </select>
</div>
