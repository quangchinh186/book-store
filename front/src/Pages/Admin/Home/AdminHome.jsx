import React from "react";
import "./adminhome.css";
import { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import axios from "axios";
import BookCard from "./BookCard";
import { toast, ToastContainer } from "react-toastify";
import Popup from "../../../UI/Popup/Popup";

const AdminHome = () => {
  const [books, setBooks] = useState([]);
  const [updateBox, setUpdateBox] = useState(false);
  const [updateBook, setUpdateBook] = useState({});

  const onFetch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/book/get_book_list");
      console.log(res.data);
      setBooks(res.data);
      return res.data;
    } catch (err) {
      toast.error(`API error ${err}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:3001/book/delete_book/${id}`)
      .then((res) => {
        onFetch();
        toast.success(`Delete book ${id} successfully`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      })
      .catch((err) => {
        toast.error(`API error ${err}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      });
  };

  const onUpdate = (id) => {
    setUpdateBox(true);
    setUpdateBook({ id: id });
  };

  const handleChange = (event) => {
    setUpdateBook({
      ...updateBook,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    onFetch();
  }, []);

  return (
    <div className="admin_home">
      <div className="book_container">
        {books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onDelete={onDelete.bind(null, book._id)}
            onUpdate={onUpdate.bind(null, book._id)}
            onView={null}
          />
        ))}
      </div>
      {updateBox && (
        <Popup>
          <div className="update_box">
            <h1>Update Book</h1>
            <input
              type="text"
              placeholder="Book Title"
              name="title"
              onChange={handleChange}
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
            <button
              id="update_book_btn"
              onClick={() => {
                console.log(updateBook);
                axios
                  .patch(
                    `http://localhost:3001/book/update_book/${updateBook.id}`,
                    { ...updateBook }
                  )
                  .then((res) => {
                    setUpdateBox(false);
                    onFetch();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Update
            </button>
            <button
              id="close_update_box_btn"
              onClick={() => {
                setUpdateBox(false);
                setUpdateBook({});
              }}
            >
              Close
            </button>
          </div>
        </Popup>
      )}
      <ToastContainer />
    </div>
  );
};

export default AdminHome;
