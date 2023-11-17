const handleFormInput = (e) => {
  console.log(e.target);
  console.log(e.target.name);
  console.log(e.target.value);
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log('Form Submitted');
};
const EventExample = () => {
  return (
    <section className="bg-green-200 px-4 py-10 flex   items-end justify-end shadow-lg shadow-slate-500  h-full gap-2 rounded-xl">
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Form</h2>
        <input
          className="p-1 mt-2"
          type="text"
          name="product"
          onChange={handleFormInput}
        />
      </form>
      <button
        type="button"
        className="bg-blue-300 p-2 mt-4 rounded-xl text-sm"
        onClick={() => console.log('button Clicked')}
      >
        Click me
      </button>
      <button
        type="submit"
        className="bg-blue-300 p-2 mt-4 rounded-xl text-sm"
        onClick={handleFormSubmit}
      >
        Submit Form
      </button>
    </section>
  );
};
export default EventExample;
