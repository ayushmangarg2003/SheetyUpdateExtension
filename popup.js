
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('updateButton').addEventListener('click', function () {
        updateDetails();
    });
});


function updateDetails() {
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    
    const apiUrl = 'https://api.sheety.co/fb2c43f0e1959a2647bbc247a7c96b2a/sheetyTest/sheet1';

    const newData = {
        'sheet1': {
            'name': name,
            'age': age,
        }
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Details updated successfully!');
        })
        .catch(error => {
            alert('Error updating details. Please try again later.');
        });
}
