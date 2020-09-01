<!DOCTYPE html>
<html lang="en">

<head>
</head>


<body class="nav-md">
<input type="text" id="indata">
<button type="button" onclick="processit()">SUBMIT</button>
</body>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="js/testscript.js"></script>
<script>
function processit() {
	alert('kkk');
	var userdata =document.getElementById('indata').value;
	userdata = userdata.split('-').join(' ');
var title= encodeURIComponent(userdata);
console.log(title);
calculateTitleSentiments(title);

}
</script>
</html>