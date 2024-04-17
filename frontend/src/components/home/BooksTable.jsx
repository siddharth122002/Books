import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';

const BookCard = ({ book }) => {
  return (
    <div className="bg-sky-100 rounded-lg shadow-md p-4 mt-4 hover:scale-105">
        <Link to={`/books/details/${book._id}`}>
          <div className="font-bold mb-2 text-xl ">{book.title}</div>
          <div className='flex justify-center'>
            <img src={book.image} alt='No image' className="w-48 h-64 object-contain" />
          </div>
        </Link>
        <div className="text-gray-900 text-lg font-semibold">{book.author}</div>
        <div className="text-gray-900 mb-2 text-lg text-semibold">Genre: {book.genre}</div>
        <div className="text-gray-600 mb-2">Published: {book.year}</div>
        <div className="flex justify-center items-center gap-x-4 mt-10">
          <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className="text-2xl text-yellow-600" />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className="text-2xl text-red-600" />
          </Link>
        </div>
      </div>
  );
};

const BooksTable = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book, index) => (
        <div key={book._id} >
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};

export default BooksTable;

