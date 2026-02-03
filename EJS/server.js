import express from 'express';

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/user", (req, res) => {
    let userData={
        name:"amit",
        age:23
    }
    res.render("user",  {userData});
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
}   );