import React from "react";
import ReactDOM from "react-dom";
import BooksPresenter from "./books/books.presenter";

import "./styles.css";

function App() {
  const [vm, setVm] = React.useState([]);

  async function load() {
    const booksPresenter = new BooksPresenter();
    const generatedVm = await booksPresenter.load();

    setVm(generatedVm);
  }

  React.useEffect(() => {
    load();
  }, []);

  const addBook = async () => {
    console.log("clicked");
    const booksPresenter = new BooksPresenter();

    await booksPresenter.add();
    await load();
  };

  return (
    <div>
      {vm.map((bookVm, i) => {
        return <div key={i}>{bookVm.visibleName}</div>;
      })}

      <button name="addBook" onClick={addBook}>
        Add Book
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
