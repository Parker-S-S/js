/// urun.js
document.addEventListener("keydown", function (e) {
	if (e.key == "~" && e.ctrlKey) {
		var t = window.open("", "_blank", "width=500,height=300");
		var e = t.document.createElement("iframe");
		(e.src = "//inglan2.github.io/uRun/popup.html"),
			(e.style.cssText = "width:100%; height:100%; border:none;"),
			t.document.body.appendChild(e),
			t.document.title = "uRun",
			t.addEventListener("message", function (e) {
				e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
			});
	}
});
document.addEventListener("keydown", function (r) {
	if (r.key == "|" && r.ctrlKey) {
	    var location = prompt("What site do you want to visit? You NEED to include https://");
		var t = window.open("", "_blank", "width = 1000,height = 600");
		var r = t.document.createElement("iframe");
		(r.src = location),
			(r.style.cssText = "width:100%; height:100%; border:none;"),
			t.document.body.appendChild(r),
			t.document.title = "Blocked",
			t.addEventListener("message", function (r) {
				r.data.toString().startsWith("execute:") && (eval(r.data.toString().replace("execute:", "")), t.close());
			});
	}
});