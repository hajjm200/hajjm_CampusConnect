// recommendations.js
// This file connects CampusConnect to the Recommendation Microservice.

// Example function to fetch recommendations
async function getRecommendations(userId, favorites, categories) {
  const response = await fetch("http://localhost:4000/recommendations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: userId,
      favorites: favorites,
      categories: categories
    })
  });

  const data = await response.json();
  console.log("Recommended Clubs:", data.recommendations);

  return data.recommendations;
}
