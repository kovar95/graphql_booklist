import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery, {
    pollInterval: 500,
  });

  const [selected, setSelected] = useState(null);

  const displayBookList = () => {
    if (loading) {
      return <p>Loading book list...</p>;
    } else if (error) {
      return <p>An error occured durring loading list !!!</p>;
    } else {
      return (
        <ul id="book-list">
          {data.books.map(({ id, name }) => (
            <li key={id} onClick={() => setSelected(id)}>
              {name}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      {displayBookList()}
      <BookDetails bookId={selected} />
    </div>
  );
};

export default BookList;
