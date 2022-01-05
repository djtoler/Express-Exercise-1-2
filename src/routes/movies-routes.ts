import express from "express";
import Movies from "../models/Movies";
const moviesRoutes = express.Router();

const moviesArray: Movies[] = [
    { id: 100, title: "Scary Movie", year: 2021, animated: false },
    { id: 200, title: "Very Scary Movie", year: 2022, animated: false },
    { id: 300, title: "Funny Movie", year: 2022, animated: true },
    { id: 400, title: "Very Funny Movie", year: 2022, animated: true }
];

moviesRoutes.get("/", function (req, res) {
    let maxYear = Number.parseInt(req.query.maxYear as string);
    let minYear = Number.parseInt(req.query.minYear as string);

    if (minYear && maxYear) {
        let newEmptyMovieArray: Movies[] = [];
        for (let i = 0; i < moviesArray.length; i++) {
            if (moviesArray[i].year > minYear && moviesArray[i].year < maxYear) {
                newEmptyMovieArray.push(moviesArray[i]);
            }
        }
    res.json(newEmptyMovieArray)
    } else {
        res.json(moviesArray)
    }

    
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