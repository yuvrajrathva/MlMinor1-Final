const productForm = document.querySelector("#product-form");
const submitBtn = document.querySelector("#submit-btn");
const productCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const productQuantity = document.querySelectorAll('input[type="number"]');

let selectedProducts = 0;

productCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      selectedProducts++;
    } else {
      selectedProducts--;
    }

    if (selectedProducts >= 5) {
      submitBtn.disabled = false;
      productCheckboxes.forEach((checkbox) => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      submitBtn.disabled = true;
      productCheckboxes.forEach((checkbox) => {
        checkbox.disabled = false;
      });
      if (checkbox.checked) {
        console.log(checkbox.value);
      }
    }
  });
});

let products = [];
fetch("./assets/product.csv")
  .then((response) => response.text())
  .then((data) => {
    products = data.split("\n").map((name) => name.trim());
    // console.log(values); // Do something with the names array
  });

// Get the search input element and products container element
const searchInput = document.getElementById("search-input");
const productsContainer = document.getElementById("product-list");

// Function to generate HTML for a product label and input field
function generateProductHTML(product) {
  const productLabel = document.createElement("label");
  const productDiv1 = document.createElement("div");
  const productInput = document.createElement("input");
  const productDiv2 = document.createElement("div");
  const quantityInput = document.createElement("input");

  productInput.setAttribute("type", "checkbox");
  productInput.setAttribute("value", product);
  productInput.setAttribute("name", product);
  productInput.setAttribute("required", true);

  productDiv1.classList.add("customerForm-radio");
  productDiv1.appendChild(productInput);
  productDiv1.appendChild(document.createTextNode(product));

  quantityInput.setAttribute("type", "number");
  quantityInput.setAttribute("name", product);
  quantityInput.setAttribute("placeholder", "Quantity");
  quantityInput.setAttribute("min", 0);
  quantityInput.setAttribute("required", true);

  productDiv2.classList.add("customerForm-quantity");
  productDiv2.appendChild(quantityInput);

  productLabel.appendChild(productDiv1);
  productLabel.appendChild(productDiv2);

  return productLabel;
}

// Function to display products based on the search input
function displayProducts() {
  // Clear the products container
  while (productsContainer.firstChild) {
    productsContainer.removeChild(productsContainer.firstChild);
  }

  // Get the search query
  const query = searchInput.value.toLowerCase();

  // Filter the products array based on the search query
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(query)
  );

  // Display the first 10 products if the search query is empty
  const productsToDisplay = query
    ? filteredProducts
    : filteredProducts.slice(0, 10);

  // Generate HTML for each product and append it to the products container
  productsToDisplay.forEach((product) => {
    const productHTML = generateProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}

// Display products on page load
displayProducts();

// Add event listener for the search input to display products based on search query
searchInput.addEventListener("input", displayProducts);
