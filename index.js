window.onload = function() {
    // Display an alert when the page has completely loaded
    alert('Please click anywhere to display the table');
  };


document.addEventListener('click', async () => { //Click event
    const api = "https://raw.githubusercontent.com/huysam11/CS601_HW5_SAM/main/degrees.json";
    try {
        const response = await fetch(api); //Create a fetch request to return a promise
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json(); // Parse the JSON data from the response
        //Log the status code and received data to the console 
        console.log(`Status Code: ${data.status}`);
        console.log('Received Data:', data);
        var col = "";
        data.forEach((itemData) => { //Create HTML string to display the data in a table
            col += "<tr>";
            col += "<td>" + itemData.school + "</td>";
            col += "<td>" + itemData.major + "</td>";
            col += "<td>" + itemData.type + "</td>";
            col += "<td>" + itemData.year_conferred + "</td></tr>";
        });
        document.getElementById('data').innerHTML = col; //Set inner HTML with id 'data'
    } catch (error) {
        console.error('Fetch Error:', error); //Handle errors
    }
});
