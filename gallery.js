// ============================================================
// TOTTENHAM HOTSPUR
// GALLERY JAVASCRIPT
// ============================================================


// Get the image upload input
const imageUpload = document.getElementById("imageUpload");

// Get the gallery area
const gallery = document.getElementById("gallery");


// Check that the upload area exists
if (imageUpload) {

    // Run when the user selects images
    imageUpload.addEventListener("change", function () {

        // Get selected images
        const files = imageUpload.files;


        // Go through each image
        for (let i = 0; i < files.length; i++) {

            const file = files[i];


            // Make sure the file is an image
            if (!file.type.startsWith("image/")) {
                continue;
            }


            // Create temporary image URL
            const imageURL = URL.createObjectURL(file);


            // Create Bootstrap column
            const column = document.createElement("div");

            column.className = "col-lg-3 col-md-4 col-sm-6";


            // Create image
            const image = document.createElement("img");

            image.src = imageURL;

            image.alt = "Tottenham Hotspur photograph";

            image.className = "uploaded-image";


            // Put image inside column
            column.appendChild(image);


            // Put column inside gallery
            gallery.appendChild(column);

        }

    });

}