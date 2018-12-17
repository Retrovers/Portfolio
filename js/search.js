function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchinput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("download-list");
  li = ul.getElementsByTagName('li');
  nofound = document.getElementById("nofound");

  // Loop through all list items, and hide those who don't match the search query
  c = 0;
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      ++c;
    } else {
      li[i].style.display = "none";
    }
  }
  if (c == 0){
    nofound.style.display = "block"
  } else {
    nofound.style.display = "none"
  }
}