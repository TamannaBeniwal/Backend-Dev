import express from "express";
const app = express();

// EJS setup
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Response time logger middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    console.log(`${req.method} ${req.url} - ${Date.now() - start}ms`);
  });
  next();
});

const users = [
  { name: "Amit" },
  { name: "Bhavya" },
  { name: "Rohit" },
  { name: "Anita" }
];

app.get("/users", (req, res) => {
  const { name } = req.query;

  const filteredUsers = name
    ? users.filter(u =>
        u.name.toLowerCase().includes(name.toLowerCase())
      )
    : users;

  res.render("users", { users: filteredUsers });
});

// ---------------- CONTACT FORM ----------------
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Contact form submitted!");
});

// ---------------- GALLERY ----------------
app.get("/gallery", (req, res) => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
  res.render("gallery", { images });
});

// ---------------- BLOG ----------------
let posts = [];

app.get("/blog", (req, res) => {
  res.render("blog", { posts });
});

app.get("/blog/new", (req, res) => {
  res.render("new-post");
});

app.post("/blog", (req, res) => {
  posts.push({
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  });
  res.redirect("/blog");
});

app.get("/blog/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render("post", { post });
});


app.use((req, res) => {
  res.status(404).render("404");
});

// Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});