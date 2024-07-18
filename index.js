// Function to submit data to the server
function submitData(name, email) {
  // Define the URL
  const url = "http://localhost:3000/users";

  // Prepare the request headers
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // Prepare the request body
  const body = JSON.stringify({ name: name, email: email });

  // Send the POST request and return the fetch chain
  return fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => response.json())
    .then((data) => {
      // Append the new id to the DOM
      const newId = data.id;
      const idElement = document.createElement("p");
      idElement.textContent = `New ID: ${newId}`;
      document.body.appendChild(idElement);
    })
    .catch((error) => {
      // Append the error message to the DOM
      const errorMessage = error.message;
      const errorElement = document.createElement("p");
      errorElement.textContent = `Error: ${errorMessage}`;
      document.body.appendChild(errorElement);
    });
}
