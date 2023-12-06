import "./book_card.css";

const BookCard = ({ book, onView, onAddToCart }) => {
  return (
    <div className="book-card">
      <div className="row">{book.title}</div>
      <div className="row">{book.description}</div>
      <div className="row multiple">
        <span>Price: {book.price}</span>
        <span>Quantity: {book.quantity}</span>
      </div>
      <div className="row multiple">
        <span>Author: {book.author}</span>
        <span>Publisher: {book.publisher}</span>
      </div>
      <div className="row multiple">
        <button onClick={onView}>View</button>
        <button onClick={onAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default BookCard;
