import express from "express";
import Movies from "../models/movies";
const moviesRoutes = express.Router();

const moviesArray: Movies[] = [
    { id: 100, title: "Scary Movie", year: 4.5, animated: false },
    { id: 200, title: "Very Scary Movie", year: 3.4, animated: false },
    { id: 300, title: "Funny Movie", year: 4.3, animated: true },
    { id: 400, title: "Very Funny Movie", year: 3.8, animated: true }
];

moviesRoutes.get("/", function (req, res) {
    res.json(moviesRoutes)
})

moviesRoutes.get("/:id", function (req, res) {
    for (let i = 0; i < moviesArray.length; i++) {
        let movieId: number = Number.parseInt(req.params.id)
        if (moviesArray[i].id === movieId) {
            res.json(moviesArray[i])
        } else {
            res.status(404);
            res.send({"error":`Movie with id ${movieId} does not exist`});
        }
    }
    
})





export default moviesRoutes;