// import express from "express";
// const languageRoutes = express.Router();

// let languages :string[] = ["english", "french", "italian", "spanish"]

// languageRoutes.get("/", function (req, res) {
//     res.json("Languages")
// })

// languageRoutes.get("/:id", function(req, res) {
//     let searchId: number = Number.parseInt(req.params.id) -1;
//     let languageObjext = languages[searchIndex]
//     res.json(languages[searchIndex])
// })

// languageRoutes.get("/", function (req, res) {
//     res.json("Random Languages")
// })

// export default languageRoutes;

import express from "express";
const languageRoutes = express.Router();

let languages: string[] = ["English", "French", "Italian", "Spanish"];

//This is the post to /languages
languageRoutes.get("/", function(req, res){
    res.json(languages);
});

//This is to show a language by id /languages/:id
languageRoutes.get("/:id/", function(req,res){
    // use req.params.id -> a specific language
    let searchIndex: number = Number.parseInt(req.params.id) - 1;
    let languageObject = languages[searchIndex];
    res.json(languageObject);
});

languageRoutes.get("/random", function(req, res){
    res.json("Random languages");
});

export default languageRoutes;