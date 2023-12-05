import "./bookcard.css";
import { useState, useEffect } from "react";
import axios from "axios";

const BookCard = ({ book, onDelete, onUpdate, onView }) => {
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
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default BookCard;
