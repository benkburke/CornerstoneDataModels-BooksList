import HttpGateway from "../shared/http.gateway";

class BooksRepository {
  constructor() {
    this.httpGateway = new HttpGateway();
  }

  getBooks = async () => {
    const booksDto = await this.httpGateway.get(
      "https://api.logicroom.co/api/bburke@greencheckverified.com/books"
    );
    const booksPm = booksDto.result.map((bookDto) => {
      return { name: bookDto.name };
    });

    return booksPm;
  };

  addBook = async () => {
    await this.httpGateway.post(
      "https://api.logicroom.co/api/bburke@greencheckverified.com/books",
      {
        name: "my private book",
        author: "my private author",
      }
    );
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
