const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

const cards = [
  ...document.querySelectorAll(".card-item"),
  ...document.querySelectorAll(".section-content"),
];

const noResults = document.createElement("p");
noResults.className = "no-results";
noResults.textContent = "No content found. Try another search.";
noResults.hidden = true;

const featuredContent = document.querySelector(".featured-content");
if (featuredContent) {
  featuredContent.appendChild(noResults);
}

function filterContent() {
  const query = searchInput.value.trim().toLowerCase();
  let matches = 0;

  cards.forEach((card) => {
    const found = card.textContent.toLowerCase().includes(query);
    card.style.display = found ? "" : "none";
    if (found) matches++;
  });

  noResults.hidden = query === "" || matches > 0;
}

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    filterContent();
  });

  searchInput.addEventListener("input", filterContent);
}

// Optional: smooth scroll for "Start Exploring" button
const exploreBtn = document.querySelector(".exploring-btn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    const categories = document.querySelector(".categories-container");
    if (categories) {
      categories.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}
