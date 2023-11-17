import ReactDOM from 'react-dom/client';
import './style.css';
import Book from './components/Book';
import { v4 as uuidv4 } from 'uuid';
import EventExample from './components/EventExample';
import { books } from './Data';
// ──────────────────────────────────────────────────── 🟩 ─

const BookList = () => {
  // handler
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <>
      <h1 id="title">Amazon Best Seller</h1>
      <section className="flex gap-4 flex-col justify-center items-center pt-10 text-lg">
        <EventExample />
        <div className="grid grid-cols-2">
          {books.map((book, index) => {
            return (
              <Book
                number={index}
                getBook={getBook}
                key={uuidv4()}
                {...book}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
