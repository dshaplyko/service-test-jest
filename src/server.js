/* eslint no-console: 0 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hi! This is our stub API for testing');
});
// Where we will keep books
let books = [{
  id: '123',
  title: 'Title',
}];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
  // We will be coding here
  const book = req.body;

  // Output the book to the console for debugging
  books.push(book);

  res.send('Book is added to the database');
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/book/:id', (req, res) => {
  const { id } = req.params;

  for (const book of books) {
    if (book.id === id) {
      res.json(book);
      return;
    }
  }

  // Sending 404 when not found something is a good practice
  res.status(404).send('Book not found');
});

app.delete('/book/:id', (req, res) => {
  const { id } = req.params;

  // Remove item from the books array
  books = books.filter((i) => {
    if (i.id !== id) {
      return true;
    }
    return false;
  });

  res.send('Book is deleted');
});

app.post('/book/:id', (req, res) => {
  const { id } = req.params;
  const newBook = req.body;

  // Remove item from the books array
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.id === id) {
      books[i] = newBook;
    }
  }

  res.send('Book is edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
