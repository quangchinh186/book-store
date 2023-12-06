import BookCard from "./BookCard";
import "./book.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Popup from "../../../UI/Popup/Popup";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [viewBox, setViewBox] = useState(undefined);

  const onView = async (content) => {
    setViewBox(content);
  };

  const onAddToCart = async (id) => {
    try {
      await axios.post(`http://localhost:3001/cart/add_to_cart`, {
        book_id: id,
        user_id: sessionStorage.getItem("user_id"),
        quantity: 1,
      });
      onFetch();
    } catch (err) {
      console.log(err);
    }
  };

  const onFetch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/book/get_book_list");
      console.log(res.data);
      setBooks(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  return (
    <div className="book_page">
      <div className="book_container">
        {books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onAddToCart={onAddToCart.bind(null, book._id)}
            onView={onView.bind(null, book.content)}
          />
        ))}
      </div>
      {viewBox && (
        <Popup>
          <p>{viewBox}</p>
          <button
            id="close_view_box_btn"
            onClick={() => {
              setViewBox(undefined);
            }}
          >
            Close
          </button>
        </Popup>
      )}
    </div>
  );
};

export default Books;
