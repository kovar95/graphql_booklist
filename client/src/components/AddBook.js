import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);

  const [values, setValues] = useState({
    name: '',
    genre: '',
    authorid: '',
  });

  const { name, genre, authorid } = values;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    addBook({
      variables: { ...values },
    });
    setValues({
      name: '',
      genre: '',
      authorid: '',
    });
  };

  const displayAuthors = () => {
    if (loading) return <option disabled>Loading Authors...</option>;

    return data.authors.map(({ name, id }) => (
      <option key={id} value={id}>
        {name}
      </option>
    ));
  };

  return (
    <form id="add-book" onSubmit={clickSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input value={name} name="name" type="text" onChange={handleChange} />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input value={genre} name="genre" type="text" onChange={handleChange} />
      </div>

      <div className="field">
        <label>Author:</label>
        <select name="authorid" value={authorid} onChange={handleChange}>
          <option value="">Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
