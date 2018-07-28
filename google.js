
const search = ()=> {

	let searchInput = document.googleForm.searchBox.value;

	if (searchInput == ""){
		alert('Please input some text in the text field');
	} else {
		alert(searchInput);
	}

	document.getElementById('searchBox').value = "";
}