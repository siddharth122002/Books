import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [summary, setSummary] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      image,
      author,
      year,
      genre,
    };
    setLoading(true);
      axios.post('https://books-backend-nine.vercel.app/books', data)
        .then(() => {
          setLoading(false);
          enqueueSnackbar('Book Created successfully', { variant: 'success' });
          navigate('/');
        })
        .catch((error) => {
          setLoading(false);
          enqueueSnackbar('Error', { variant: 'error' });
        });
  };

  return (
    <div className='p-4'>
  <BackButton />
  <h1 className='text-3xl my-4 font-semibold'>Create Book</h1>
  {loading ? <Spinner /> : ''}
  <div className='flex justify-center'>
    <div className='bg-white border border-gray-300 rounded-xl shadow-md w-[600px] p-6'>
      <div className='my-4'>
        <label className='text-lg mr-4 text-gray-700'>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-sky-500'
        />
      </div>
      <div className='my-4'>
        <label className='text-lg mr-4 text-gray-700'>Image link</label>
        <input
          type='text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className='border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-sky-500'
        />
      </div>
      <div className='my-4'>
        <label className='text-lg mr-4 text-gray-700'>Author</label>
        <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-sky-500'
        />
      </div>
      <div className='my-4'>
        <label className='text-lg mr-4 text-gray-700'>Publish Year</label>
        <input
          type='number'
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className='border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-sky-500'
        />
      </div>
      <div className='my-4'>
        <label className='text-lg mr-4 text-gray-700'>About</label>
        <input
          type='text'
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className='border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-sky-500'
        />
      </div>
      <div className='my-4'>
        <label className='text-lg mr-4 text-gray-700'>Genre</label>
        <input
          type='text'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className='border border-gray-300 px-4 py-2 w-full rounded focus:outline-none focus:border-sky-500'
        />
      </div>
      <button onClick={handleSaveBook} className='py-2 px-4 bg-sky-500 mt-8 rounded-lg text-white hover:bg-sky-600 w-full'>
        Save
      </button>
    </div>
  </div>
</div>

  );
}

export default Create;