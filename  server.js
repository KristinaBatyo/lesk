const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// налаштування CORS-заголовків
app.use(cors());

// підключення до бази даних MongoDB
mongoose.connect(
  'mongodb+srv://Sofiian:140717Cc@cluster0.iydzzk5.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

// створення моделі відгуків
const reviewSchema = new mongoose.Schema({
  name: String,
  comment: String,
  rating: Number,
});

const Review = mongoose.model('Review', reviewSchema);

// отримання відгуків
app.get('/reviews', async (req, res) => {
  const reviews = await Review.find();
  res.send(reviews);
});

// додавання відгуку
app.post('/reviews', async (req, res) => {
  const { name, comment, rating } = req.body;
  const review = new Review({ name, comment, rating });
  await review.save();
  res.send(review);
});
// видалення відгуку
app.delete('/reviews/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Review.findByIdAndDelete(id);
    res.send('Review deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

// запуск сервера
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
