document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});

function fetchData() {
    fetch('https://api.sheety.co/fb2c43f0e1959a2647bbc247a7c96b2a/sheetyTest/sheet1')
        .then(response => response.json())
        .then(data => {
            displayData(data.sheet1);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = ''; 
    if (data && data.length > 0) {
      const lastThreeItems = data.slice(-3);
  
      const table = document.createElement('table');
      table.classList.add('data-table');
  
      const headerRow = document.createElement('tr');
      Object.keys(lastThreeItems[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);
  
      lastThreeItems.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
          const td = document.createElement('td');
          td.textContent = value;
          row.appendChild(td);
        });
        table.appendChild(row);
      });
  
      dataContainer.appendChild(table);
    } else {
      const noDataMessage = document.createElement('div');
      noDataMessage.classList.add('no-data');
      noDataMessage.textContent = 'No data available.';
      dataContainer.appendChild(noDataMessage);
    }
  }
  
  
