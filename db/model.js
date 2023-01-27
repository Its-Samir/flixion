require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL);

const movieSchema = new mongoose.Schema({
    title: String,
    img: String,
    desc: String,
    directedBy: String,
});

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

export default Movie;