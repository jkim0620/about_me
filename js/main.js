var modal = document.getElementById('myModal');

var btn = document.getElementById("modal-btn");

var close = document.getElementById("exit");

btn.onclick = function() {
   modal.style.display = "block";
}

close.onclick = function() {
	modal.style.display = "none";
}

