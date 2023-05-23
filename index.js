const express = require("express");
const randomSentence = require("random-sentence");

const app = express();

app.get("/", (req, res) => {
  const posts = [];

  for (let i = 0; i < 20; i++) {
    posts.push({
      userId: 1,
      id: i,
      image: "https://via.placeholder.com/150/771796",
      caption: randomSentence({ min: 6, max: 9 }),
    });
  }

  res.send({
    posts,
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
