// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// // налаштування CORS-заголовків
// app.use(cors());

// // підключення до бази даних MongoDB
// mongoose.connect(
//   'mongodb+srv://Sofiian:140717Cc@cluster0.iydzzk5.mongodb.net/',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   }
// );

// // створення моделі відгуків
// const reviewSchema = new mongoose.Schema({
//   name: String,
//   comment: String,
//   rating: Number,
// });

// const Review = mongoose.model('Review', reviewSchema);

// // отримання відгуків
// app.get('/reviews', async (req, res) => {
//   const reviews = await Review.find();
//   res.send(reviews);
// });

// // додавання відгуку
// app.post('/reviews', async (req, res) => {
//   const { name, comment, rating } = req.body;
//   const review = new Review({ name, comment, rating });
//   await review.save();
//   res.send(review);
// });
// // видалення відгуку
// app.delete('/reviews/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     await Review.findByIdAndDelete(id);
//     res.send('Review deleted successfully');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Something went wrong');
//   }
// });

// // запуск сервера
// app.listen(3001, () => {
//   console.log('Server started on port 3001');
// });


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6XF7edTZW_rBkmDQ1gkJ-mU2ti6Tyf9U",
  authDomain: "reviews-dc14c.firebaseapp.com",
  projectId: "reviews-dc14c",
  storageBucket: "reviews-dc14c.appspot.com",
  messagingSenderId: "94081057881",
  appId: "1:94081057881:web:1c30e6f34b4314a1fedd48",
  measurementId: "G-LW9PCERTX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

