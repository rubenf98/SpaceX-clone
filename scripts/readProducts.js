fetch('https://dummyjson.com/products')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => displayProducts(data))
    .catch((error) => console.error("READ ERROR:", error));

function displayProducts(data) {
    const section = document.getElementById("product-container");

    data.products.forEach(product => {
        const productDiv = document.createElement("div");
        const image = document.createElement("img");
        const brand = document.createElement("h3");
        const heading = document.createElement("h2");
        const description = document.createElement("p");

        productDiv.classList.add("product");
        productDiv.style.borderBottom = "1px solid gray";
        section.appendChild(productDiv);

        image.src = product.thumbnail;
        productDiv.appendChild(image);

        brand.innerHTML = product.brand;
        productDiv.appendChild(brand);

        heading.innerHTML = product.title;
        productDiv.appendChild(heading);

        description.innerHTML = product.description;
        productDiv.appendChild(description);


    });
}