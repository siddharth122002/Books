import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Edit = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [summary, setSummary] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://books-backend-nine.vercel.app/books/${id}`)
    .then((response) => {
        setAuthor(response.data.author);
        setImage(response.data.image);
        setYear(response.data.year)
        setTitle(response.data.title)
        setSummary(response.data.summary)
        setGenre(response.data.genre)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditBook = () => {
    const data = {
      title,
      image,
      author,
      year,
      summary,
      genre,
    };
    setLoading(true);
    axios
      .put(`https://books-backend-nine.vercel.app/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 font-semibold'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex justify-center'>
        <div className='bg-white shadow-md rounded-xl p-6 w-[600px]'>
          <div className='my-4'>
            <label className='text-lg font-semibold text-gray-700'>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-lg font-semibold text-gray-700'>Image Link</label>
            <input
              type='text'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-lg font-semibold text-gray-700'>Author</label>
            <input
              type='text'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-lg font-semibold text-gray-700'>Publish Year</label>
            <input
              type='number'
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-lg font-semibold text-gray-700'>About</label>
            <input
              type='text'
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label className='text-lg font-semibold text-gray-700'>Genre</label>
            <input
              type='text'
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
          <button className='p-2 bg-sky-300 rounded-md w-full mt-8' onClick={handleEditBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
  
  
}

export default Edit