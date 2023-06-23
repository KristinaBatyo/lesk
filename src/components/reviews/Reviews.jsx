import { useState, useEffect } from 'react';
import ReactStarRatings from 'react-star-ratings';
import {
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  TextField,
  // Button,
} from '@mui/material';
import CustomPaginate from './Reviews.styled';
import { ContactsButton } from './Reviews.styled';
import axios from 'axios';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const databaseURL = 'https://lesk-backend.onrender.com';



function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 10;
  // const [replyText, setReplyText] = useState('');
  // const [replyId, setReplyId] = useState('');

  const handleRatingChange = newRating => {
    setRating(newRating);
  };

useEffect(() => {
  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${databaseURL}/api/contacts/`); 
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };
  fetchReviews();
}, []);


const handleSubmit = async e => {
  e.preventDefault();
  const name = e.target.name.value;
  const comment = e.target.comment.value;
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const timestamp = `${year}-${month}-${day}`;
  const data = {
    name,
    comment,
    rating,
    timestamp,
  };

  try {
    await axios.post(`${databaseURL}/api/contacts/`, data, axiosConfig);
    const newReview = { name, comment, rating, timestamp, id: Date.now() };
    setReviews(prevReviews => [newReview, ...prevReviews]);
    e.target.reset();
    setCurrentPage(0);
  } catch (error) {
    console.error('Error adding review:', error);
  }
};


  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = currentPage * reviewsPerPage;
  const endIndex = (currentPage + 1) * reviewsPerPage;
  const displayReviews = reviews.slice(startIndex, endIndex);

  return (
    <div>
      <Box m={4}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Jméno a Příjmení"
                    variant="outlined"
                    name="name"
                    required
                  />
                </Grid>
                <Grid id="recenze" item xs={12} md={6}>
                  <ReactStarRatings
                    rating={rating}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="5px"
                    changeRating={handleRatingChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Správa"
                    variant="outlined"
                    name="comment"
                    required
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ContactsButton variant="contained" type="submit">
                    Přidat recenzi
                  </ContactsButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={8}>
            {displayReviews.map((review, index) => (
              <Card
                key={index}
                sx={{
                  padding: '16px',
                  marginBottom: '16px',
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {review.name}
                  </Typography>
                  <ReactStarRatings
                    starRatedColor="orange"
                    rating={review.rating}
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="5px"
                  />
                  <Typography variant="body1" component="p">
                    {review.comment}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {review.timestamp}
                  </Typography>
                  {review.reply ? (
                    <Typography
                      marginTop={'30px'}
                      variant="body2"
                      component="p"
                    >
                      <strong>Odpověď konzultanta:</strong> {review.reply}
                    </Typography>
                  ) : (
                    <></>
                    // <form onSubmit={handleReply}>
                    //   <TextField
                    //     fullWidth
                    //     label="Reply"
                    //     variant="outlined"
                    //     value={replyText}
                    //     onChange={handleReplyChange}
                    //     required
                    //   />
                    //   <Button
                    //     variant="contained"
                    //     type="submit"
                    //     onClick={() => handleReplyClick(review.id)}
                    //   >
                    //     Send Reply
                    //   </Button>
                    // </form>
                  )}
                </CardContent>
              </Card>
            ))}
            {displayReviews.length === 0 && (
              <Typography
                display={'flex'}
                justifyContent={'center'}
                variant="body1"
                component="p"
              >
                Žádné recenze k zobrazení.
              </Typography>
            )}
            <CustomPaginate
              pageCount={pageCount}
              onPageChange={handlePageClick}
              forcePage={currentPage}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Reviews;