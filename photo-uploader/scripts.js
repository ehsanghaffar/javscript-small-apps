// Get the form element
var form = document.getElementById("upload-form");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the selected file
  var file = document.getElementById("image-file").files[0];

  // Create a new FormData object
  var formData = new FormData();

  // Add the file to the FormData object
  formData.append("image", file);

  // Add any additional data to the FormData object
  formData.append("user", "John Doe");

  // Send the request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/upload");
  xhr.send(formData);

  // Handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert("Image uploaded successfully");
    } else {
      alert("An error occurred");
    }
  };
});

function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}