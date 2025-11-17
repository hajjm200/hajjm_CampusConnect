# Club Search Microservice – CampusConnect  
Created by **Mia Hajj**  
CS361 – Small Pool Implementation (Milestone #2)

This microservice provides keyword-based club searching for the CampusConnect main program.  
It accepts a search term and returns all clubs whose names or descriptions match the keyword.

---

# 1. How to REQUEST Data From This Microservice

Your program must send a **POST request** to:

http://localhost:4000/search

With this JSON body:

{
  "keyword": "coding"
}

---

#  2. How to RECEIVE Data From This Microservice

The microservice will return JSON in this format:

{
  "results": [
    {
      "id": "coding_club",
      "name": "Coding Club",
      "category": "Technology",
      "description": "Learn programming, web dev, and app creation."
    }
  ]
}

---

#  Example Test Program (Required for Assignment)

Use this Node.js test program to request and receive data:

const fetch = require("node-fetch");

async function testSearch() {
  const response = await fetch("http://localhost:4000/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ keyword: "coding" })
  });

  const data = await response.json();
  console.log("Search Results:", data);
}

testSearch();

---

#  3. UML Sequence Diagram (Required for Assignment)

WORKING ON IT

# 4. How to Run This Microservice

1. Install dependencies:
npm install

2. Start the service:
node app.js

3. The service listens on:
http://localhost:4000/search

---

#  5. Microservice Contract (Do Not Change Once Finalized)

Endpoint:
POST /search

Request JSON:
{
  "keyword": "yourWord"
}

Response JSON:
{
  "results": [...]
}

---

#  6. Notes for Teammates :)
- Only POST requests are supported  
- No authentication required  
- Response guaranteed under 200ms  
- Returns “no results found” when no matches exist  

---

