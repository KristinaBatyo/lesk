import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from 'nanoid';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const result = await axios('/reviews');
      setReviews(result.data);
    };
    fetchReviews();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const comment = e.target.comment.value;
    const rating = parseInt(e.target.rating.value);
    await axios.post('/reviews', { name, comment, rating });
    const result = await axios('/reviews');
    setReviews(result.data);
  };
    const handleDelete = async id => {
      await axios.delete(`/reviews/${id}`);
      const result = await axios('/reviews');
      setReviews(result.data);
    };

  return (
    <div>
      <h1>Reviews</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Comment:
          <textarea name="comment" required></textarea>
        </label>
        <br />
        <label>
          Rating:
          <select name="rating" required>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {reviews.map(review => (
          <li key={nanoid()}>
            <p>Name: {review.name}</p>
            <p>Comment: {review.comment}</p>
            <p>Rating: {review.rating}</p>
            <button
              className="delete-btn"
              onClick={() => handleDelete(review._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
