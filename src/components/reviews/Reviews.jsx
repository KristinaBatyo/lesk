import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  // deleteDoc,
  // doc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import ReactStarRatings from 'react-star-ratings';
import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  TextField,
} from '@mui/material';
import CustomPaginate from './Reviews.styled';
import { ContactsButton } from './Reviews.styled';

const firebaseConfig = {
  apiKey: 'AIzaSyDaxA9z4ZR8Pi7M_qG8bHqoTtGwAWjVt9k',
  authDomain: 'reviews-4c539.firebaseapp.com',
  databaseURL:
    'https://reviews-4c539-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'reviews-4c539',
  storageBucket: 'reviews-4c539.appspot.com',
  messagingSenderId: '566511584630',
  appId: '1:566511584630:web:85d7bfaf9f166af9d82657',
  measurementId: 'G-EQZDYS8YK9',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 10;

  const handleRatingChange = newRating => {
    setRating(newRating);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'reviews'));
        const result = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setReviews(result);
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
  try {
    const docRef = await addDoc(collection(db, 'reviews'), {
      name,
      comment,
      rating,
    });
    const newReview = { name, comment, rating, id: docRef.id };
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

  // const pageCount = Math.ceil(reviews.length / reviewsPerPage);
  // const displayReviews = reviews.slice(
  //   currentPage * reviewsPerPage,
  //   (currentPage + 1) * reviewsPerPage
  // );

   const pageCount = Math.ceil(reviews.length / reviewsPerPage);
   const startIndex = currentPage * reviewsPerPage;
   const endIndex = (currentPage + 1) * reviewsPerPage;
   const displayReviews = reviews.slice(startIndex, endIndex);


  return (
    <div>
      <Box m={4}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            {/* <Typography variant="h4" align="center" gutterBottom>
              Recenze
            </Typography> */}
          </Grid>
          <Grid item xs={12} md={8}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Název"
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
                    // count={5}
                    // value={rating}
                    // onChange={handleRatingChange}
                    // size={24}
                    // rating={rating}
                    activeColor="orange"
                    // starRatedColor="orange"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Odezva"
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
            {displayReviews.map(review => (
              <Card
                key={review.id}
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
                    // count={5}
                    // value={review.rating}
                    // size={24}
                    // edit={false}
                    // activeColor="#ffd700"
                  />
                  <Typography variant="body1" component="p">
                    {review.comment}
                  </Typography>
                </CardContent>
              </Card>
            ))}
            {displayReviews.length === 0 && (
              <Typography variant="body1" component="p">
                No reviews to display.
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







// function Reviews() {
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(5);

//   const handleRatingChange = newRating => {
//     setRating(newRating);
//   };

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'reviews'));
//         const result = querySnapshot.docs.map(doc => ({
//           ...doc.data(),
//           id: doc.id,
//         }));
//         setReviews(result);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//         // відобразити користувачеві повідомлення про те, що сталася помилка
//       }
//     };
//     fetchReviews();
//   }, []);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const comment = e.target.comment.value;
//     try {
//       await addDoc(collection(db, 'reviews'), { name, comment, rating });
//       const querySnapshot = await getDocs(collection(db, 'reviews'));
//       const result = querySnapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setReviews(result);
//     } catch (error) {
//       console.error('Error adding review:', error);
//       // відобразити користувачеві повідомлення про те, що сталася помилка
//     }
//   };
  
//     // const handleDelete = async id => {
//     //   await deleteDoc(doc(db, 'reviews', id));
//     //   const querySnapshot = await getDocs(collection(db, 'reviews'));
//     //   const result = querySnapshot.docs.map(doc => ({
//     //     ...doc.data(),
//     //     id: doc.id,
//     //   }));
//     //   setReviews(result);
//     // };

//   return (
//     <div>
// <Box m={4}>
// <Grid container spacing={3} justifyContent="center">
// <Grid item xs={12}>
// <Typography variant="h3" align="center" gutterBottom>
//               Reviews
//               </Typography>
// </Grid>
// <Grid item xs={12} md={8}>
// <form onSubmit={handleSubmit}>
// <Grid container spacing={2}>
// <Grid item xs={12} sm={6}>
// <TextField
// label="Name"
// name="name"
// variant="outlined"
// required
// fullWidth
// />
// </Grid>
// <Grid item xs={12} sm={6}>
//     <ReactStarRatings
//     rating={rating}
//     starRatedColor="orange"
//     numberOfStars={5}
//     starDimension="20px"
//     starSpacing="5px"
//     changeRating={handleRatingChange}
    
//     />
// </Grid>
// <Grid item xs={12}>
// <TextField
// label="Comment"
// name="comment"
// variant="outlined"
// required
// fullWidth
// multiline
// rows={4}
// />
// </Grid>
// <Grid item xs={12}>
// <Button type="submit" variant="contained" color="primary">
// Submit
// </Button>
// </Grid>
// </Grid>
// </form>
// </Grid>
// <Grid item xs={12} md={8}>
// <Box mt={4}>
// <Typography variant="h5" gutterBottom>
// Recent Reviews
// </Typography>
// {reviews.map(review => (
// <Card key={review.id} variant="outlined" >
// <CardContent>
// <Grid container spacing={2} justifyContent="space-between" alignItems="center">
// <Grid item xs={12} sm={6}>
// <Typography variant="h6" gutterBottom>
// {review.name}
// </Typography>
// </Grid>
// <Grid item xs={12} sm={6}>
// <ReactStarRatings
// rating={review.rating}
// starRatedColor="orange"
// numberOfStars={5}
// starDimension="20px"
// starSpacing="5px"
// />
// </Grid>
// <Grid item xs={12}>
// <Typography variant="body1">
// {review.comment}
// </Typography>
// </Grid>
// </Grid>
// </CardContent>
// <CardActions>
// {/* <Button size="small" color="secondary" >
// Delete
// </Button> */}
// </CardActions>
// </Card>
// ))}
// </Box>
// </Grid>
// </Grid>
// </Box>
// </div>
// );
// }































    // <div>
    //   <h1>Reviews</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Name:
    //       <input type="text" name="name" required />
    //     </label>
    //     <br />
    //     <label>
    //       Comment:
    //       <textarea name="comment" required></textarea>
    //     </label>
    //     <br />
    //     <label>
    //       Rating:
    //       <ReactStarRatings
    //         rating={rating}
    //         starRatedColor="orange"
    //         numberOfStars={5}
    //         starDimension="20px"
    //         starSpacing="5px"
    //         changeRating={handleRatingChange}
    //       />
    //     </label>
    //     <br />
    //     <button type="submit">Submit</button>
    //   </form>
    //   <ul>
    //     {reviews.map(review => (
    //       <li key={nanoid()}>
    //         <p>Name: {review.name}</p>
    //         <p>Comment: {review.comment}</p>
    //         <ReactStarRatings
    //           rating={review.rating}
    //           starRatedColor="orange"
    //           numberOfStars={5}
    //           starDimension="20px"
    //           starSpacing="5px"
    //         />
    //         {/* <button
    //           className="delete-btn"
    //           onClick={() => handleDelete(review._id)}
    //         >
    //           Delete
    //         </button> */}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
//   );
// }

// export default Reviews;
