import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox} from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
      axios.get('https://books-backend-nine.vercel.app/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl my-8 font-serif">List of Books</h1>
        <Link to="/books/create" className="text-sky-800 text-4xl ">
          <MdOutlineAddBox />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <BooksTable books={books} />
      )}
    </div>
  );
  
};

export default Home;