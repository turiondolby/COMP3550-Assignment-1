//validate check boxes
function validateBoxes() {
	// keep a count of how many checked
	var boxesChecked=0;
	// cycle thru all check-box ids - increment boxes checked var if true
	for(var i=0; i<6; i++) {
		document.getElementById("c"+String(i)).checked == true ? boxesChecked++: null; //abbreviated if statement
	}
	if (boxesChecked >=1) {
		return 1;
	} else {
		alert("Please select at least 1 check-box!");
		return 0;
	}
}