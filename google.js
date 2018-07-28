const search = ()=> {

	let searchInput = document.googleForm.searchBox.value;

	if (searchInput == ""){
		alert('Please input some text in the text field');
	} else {
		alert(searchInput);
	}

	document.getElementById('searchBox').value = "";
}

const lucky = ()=> {
	let luckyInput = document.googleForm.searchBox.value;

	if (luckyInput == ""){
		alert('Please input some text in the text field');
	} else {
		alert("this button doesn't search");
	}

	document.getElementById('searchBox').value = "";
}