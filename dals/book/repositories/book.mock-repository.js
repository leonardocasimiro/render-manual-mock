import { db } from "../../mock-data.js";
const insertBook = (book) => {
    const id = (db.books.length + 1).toString();
    const newBook = {
        ...book,
        id,
    };
    db.books = [...db.books, newBook];
    return newBook;
};
const updateBook = (book) => {
    db.books = db.books.map((b) => (b.id === book.id ? { ...b, ...book } : b));
    return book;
};
export const mockRepository = {
    getBookList: async () => db.books,
    getBook: async (id) => db.books.find((b) => b.id === id),
    saveBook: async (book) => Boolean(book.id) ? updateBook(book) : insertBook(book),
    deleteBook: async (id) => {
        db.books = db.books.filter((b) => b.id !== id);
        return true;
    },
};
