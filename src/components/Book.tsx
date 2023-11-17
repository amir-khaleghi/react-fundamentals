const Book = ({ id, img, author, job, title, number, getBook, children }) => {
  console.log();

  return (
    <div className="  flex relative bg-slate-200 gap-2 m-4 shadow-lg shadow-slate-500 rounded-lg flex-col justify-center items-center p-2 ">
      <img
        // inlineStyles
        style={{ width: '200px' }}
        //
        src={img}
        alt="book"
      />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{job}</p>
      <p>{title}</p>
      {/* children */}
      <p>{children}</p>
      <button
        onClick={() => {
          getBook(id);
        }}
        className="p-2 bg-slate-300"
      >
        Get Book
      </button>

      <p id="numbers">{`#${number + 1}`}</p>
    </div>
  );
};

export default Book;
