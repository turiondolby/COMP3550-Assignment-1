function validate() {
	"use strict";
	var ddown,
		value,
		radios,
		i,
		check,
		size;

	ddown = document.getElementById("dropDown");
	value = ddown.options[ddown.selectedIndex].value;
	radios = document.getElementsByName("genderRadios");
	i = 0;
	check = false;
	size = radios.length;

	while (!check && i < size) {
		if (radios[i].checked) {
			check = true;
		}
		i += 1;
	}

	if (check === false) {
		alert("ERROR: Please select a gender.");
	} else if (value === "none") {
		alert("ERROR: Please select an option for how you found out about this website.");
	} else {
		return true;
	}
	return false;
}
