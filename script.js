let clubs = [
  { name: "Coding Club", category: "Tech", time: "Fridays 5 PM", contact: "coding@osu.edu" },
  { name: "Reading Club", category: "Hobby", time: "Wednesdays 6 PM", contact: "reading@osu.edu" },
  { name: "Robotics Club", category: "STEM", time: "Thursdays 4 PM", contact: "robotics@osu.edu" },
  { name: "Cultural Exchange Club", category: "Diversity", time: "Tuesdays 3 PM", contact: "culture@osu.edu" },
  { name: "Art and Design Society", category: "Creative", time: "Mondays 6 PM", contact: "art@osu.edu" }
];

function searchClubs() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = clubs.filter(club =>
    club.name.toLowerCase().includes(input) ||
    club.category.toLowerCase().includes(input)
  );
  localStorage.setItem("searchResults", JSON.stringify(results));
  window.location.href = "clubs.html";
}

window.onload = function() {
  const container = document.getElementById("clubContainer");
  if (container) {
    const storedResults = JSON.parse(localStorage.getItem("searchResults"));
    const resultsToShow = (storedResults && storedResults.length > 0) ? storedResults : clubs;

    resultsToShow.forEach(club => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${club.name}</h3>
        <p>Category: ${club.category}</p>
        <p>Meeting Time: ${club.time}</p>
        <p>Contact: ${club.contact}</p>
        <button onclick='addToFavorites("${club.name}")'>Add to Favorites</button>
      `;
      container.appendChild(div);
    });

    // Clear stored search results after displaying them
    localStorage.removeItem("searchResults");
  }

  const favList = document.getElementById("favoritesList");
  if (favList) {
    displayFavorites();
  }
};

function displayFavorites() {
  const favList = document.getElementById("favoritesList");
  favList.innerHTML = "";
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.forEach(club => {
    const li = document.createElement("li");
    li.textContent = club;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = function() {
      removeFavorite(club);
    };

    li.appendChild(removeBtn);
    favList.appendChild(li);
  });
}

function addToFavorites(name) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(name)) favorites.push(name);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  alert(`${name} added to favorites!`);
}

function removeFavorite(name) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites = favorites.filter(fav => fav !== name);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  displayFavorites(); // refresh list
}

function clearFavorites() {
  if (confirm("Are you sure? This will remove all favorites.")) {
    localStorage.removeItem("favorites");
    document.getElementById("favoritesList").innerHTML = "";
  }
}
