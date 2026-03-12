import express from "express";
import methodOverride from "method-override";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();

// __dirname fix (ES module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// public folder static
app.use(express.static(path.join(__dirname, "public")));

// dummy user data
let userData = [
  { id: 1, name: "amit", age: 23 },
];

// HOME route - pagination (10 images per page)
app.get("/", (req, res) => {
  const imageFolder = path.join(__dirname, "public");
  const images = fs.readdirSync(imageFolder);

  const page = parseInt(req.query.page) || 1;
  const limit = 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedImages = images.slice(startIndex, endIndex);
  const totalPages = Math.ceil(images.length / limit);

  res.render("index", {
    images: paginatedImages,
    currentPage: page,
    totalPages: totalPages,
  });
});

// render edit page
app.get("/editpage/:id", (req, res) => {
  const id = req.params.id;
  const user = userData.find((ele) => ele.id == id);

  if (!user) return res.send("User not found");

  res.render("edit", { userData: [user] });
});

// get user list
app.get("/user", (req, res) => {
  res.render("user", { userData });
});

// add user
app.post("/api/user", (req, res) => {
  const { name, age } = req.body;

  let newUserData = {
    id: userData.length + 1,
    name,
    age,
  };

  userData.push(newUserData);
  res.redirect("/user");
});

// delete user
app.delete("/api/user/:id", (req, res) => {
  const userid = req.params.id;
  const useridx = userData.findIndex((ele) => ele.id == userid);

  if (useridx === -1) return res.send("user not found");

  userData.splice(useridx, 1);
  res.redirect("/user");
});

// update user
app.put("/api/user/:id", (req, res) => {
  const userid = req.params.id;
  const { name, age } = req.body;

  const user = userData.find((ele) => ele.id == userid);
  if (!user) return res.send("user not found");

  user.name = name;
  user.age = age;

  res.redirect("/user");
});

// server start
app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});