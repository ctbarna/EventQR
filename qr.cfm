<script type="text/javascript" src="qr.js"></script>
<div id="QR" style="left:200px; top:200px; width:200px;position:fixed;display:none; background-color:#fff;border:1px solid #000;padding:5px;">
    <div style="float:right;"><a href="#" onclick="javascript:document.getElementById('QR').style.display = 'none';">X</a></div>
    <img src="" id="QR-code"/>
    <select id="QR-select" onChange="javascript:changeImage(this.value)">
	<option value="poster">Poster</option>
	<option value="benson">Benson Screens</option>
    </select>
</div>
