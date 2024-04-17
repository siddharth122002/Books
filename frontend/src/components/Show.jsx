import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const Show = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://books-backend-nine.vercel.app/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <BackButton />
      <h1 className='text-3xl my-4 font-semibold'>Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex justify-center'>
  <div className='bg-white shadow-md rounded-xl p-6'>
    <div className='my-4'>
      <h2 className='text-lg font-semibold text-gray-700'>Title</h2>
      <p className='text-gray-600'>{book.title}</p>
    </div>
    <div className='my-4'>
      <h2 className='text-lg font-semibold text-gray-700'>Author</h2>
      <p className='text-gray-600'>{book.author}</p>
    </div>
    <div className='my-4'>
      <h2 className='text-lg font-semibold text-gray-700'>Genre</h2>
      <p className='text-gray-600'>{book.genre}</p>
    </div>
    <div className='my-4'>
      <h2 className='text-lg font-semibold text-gray-700'>Publish Year</h2>
      <p className='text-gray-600'>{book.year}</p>
    </div>
    <div className='my-4'>
      <h2 className='text-lg font-semibold text-gray-700'>About</h2>
      <p className='text-gray-600'>{book.summary}</p>
    </div>
  </div>
</div>

      )}
    </div>
  );
};

export default Show;