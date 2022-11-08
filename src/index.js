import React from "react";
import ReactDOM from "react-dom";
import BooksPresenter from "./books/books.presenter";

import "./styles.css";

function App() {
  const [vm, setVm] = React.useState([]);

  React.useEffect(() => {
    async function load() {
      const booksPresenter = new BooksPresenter();
      const generatedVm = await booksPresenter.load();

      setVm(generatedVm);
    }

    load();
  }, []);

  return (
    <div>
      {vm.map((bookVm, i) => {
        return <div key={i}>{bookVm.visibleName}</div>;
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
