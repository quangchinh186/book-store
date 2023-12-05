import "./cnb.css";
import { useState } from "react";
import axios from "axios";

const CreateNewBook = () => {
  const [newBook, setNewBook] = useState({
    title: "Title",
    description: "Description",
    price: 0,
    quantity: 0,
    author: "Author",
    publisher: "Publisher",
    content: "Content",
  });

  const handleChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreate = async () => {
    const res = await axios.post(
      "http://localhost:3001/book/add_book",
      newBook
    );
    console.log(res);
  };

  return (
    <div className="cnb">
      <h1>Create New Book</h1>
      <input
        type="text"
        placeholder="Book Title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Book Description"
        name="description"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book Price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book Quantity"
        name="quantity"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book Author"
        name="author"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book Publisher"
        name="publisher"
        onChange={handleChange}
      />
      <textarea
        type="text"
        placeholder="Book Content"
        name="content"
        onChange={handleChange}
      />
      <button id="create_new_book_btn" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
};

export default CreateNewBook;
