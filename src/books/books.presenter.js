import booksRepository from "./books.repo";

export default class BooksPresenter {
    add = async () => {
        await booksRepository.addBook();
    }
    
    load = async () => {
        const booksPm = await booksRepository.getBooks();
        const booksVm = booksPm.map((bookPm) => {
            return { visibleName: bookPm.name }
        });
        
        return booksVm;
    }        
}