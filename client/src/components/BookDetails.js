import { useQuery, useMutation } from '@apollo/client';
import { getBookQuery, removeBookMutation } from '../queries/queries';

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: {
      id: bookId,
    },
  });

  const [removeBook] = useMutation(removeBookMutation);

  const deleteBook = () => {
    removeBook({
      variables: {
        id: bookId,
      },
    });
  };

  const displayBookDetails = () => {
    if (loading) {
      return <div>Loading book details...</div>;
    } else if (error) {
      return <div>An error occured!!!</div>;
    } else if (data.book) {
      const {
        book: { name, genre, author },
      } = data;
      return (
        <div>
          <button className="remove" onClick={deleteBook}>
            Delete this book
          </button>
          <h2>{name}</h2>
          <p>{genre}</p>
          <p>{author.name}</p>
          <p>All books from this author:</p>
          <ul className="other-books">
            {author.books.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected!</div>;
    }
  };

  return <div id="book-details">{displayBookDetails()}</div>;
};

export default BookDetails;
