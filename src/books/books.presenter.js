import booksRepository from "./books.repo";

export default class BooksPresenter {
    load = async () => {
        const booksPm = await booksRepository.getBooks();
        const booksVm = booksPm.map((bookPm) => {
            return { visibleName: bookPm.name }
        });
        
        return booksVm;
    }
}