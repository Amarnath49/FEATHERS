let searchBar = document.getElementById('search-bar');
let table = document.getElementById('table');
let tableRows = table.getElementsByTagName('tr');

searchBar.addEventListener('keyup', function() {
  let searchTerm = searchBar.value.toLowerCase();

  for (let i = 0; i < tableRows.length; i++) {
    let rowData = tableRows[i].textContent.toLowerCase();

    if (rowData.includes(searchTerm)) {
      tableRows[i].style.display = '';
    } else {
      tableRows[i].style.display = 'none';
    }
  }
});