import express from "express";
const app = express();
import cors from "cors";
import path from "path";
import routes from "./routes/app-routes";
import languageRoutes from "./routes/language-routes";
import userRoutes from "./routes/user-routes";
import searchRoutes from "./routes/search-routes";
import shopRoutes from "./routes/shop-routes";
import moviesRoutes from "./routes/movies-routes";
import shopRoutesApp from "./routes/shop-routes-app";

import home from "./routes/home";



const port = 7777;

// enable routes
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "Pulic")));


app.use("/", routes);
app.use("/languages/", languageRoutes);
app.use("/users/", userRoutes);
app.use("/", searchRoutes);//alternative to languages and users
app.use("/api/shops", shopRoutes);
//enable /api/shops
app.use("/api/movies", moviesRoutes);
app.use("/home", shopRoutesApp)




//Directly set routes
app.get("/students", function(req, res){
    res.json("Getting all students...");
});

app.post("/students", function(req, res){
    res.json("Adding a student");
});

app.put("/students", function(req, res){
    res.json("Updating a student");
});

app.delete("/students", function(req, res){
    res.json("Deleting a student");
});

app.listen(port, function(){
    console.log(`Listening on port ${port}`);
});