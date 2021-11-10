function findAuthorById(authors, id) {
  return authors.find(author=> author.id === id)
}

function findBookById(books, id) {
  return found = books.find(book=> book.id ===id)
}

function partitionBooksByBorrowedStatus(books) {
  let result =[]
  let returned = []
  let checkedOut = []

  books.forEach(book => (!book.borrows[0].returned) ? checkedOut.push(book) : returned.push(book))

  result.push(checkedOut)
  result.push(returned)
  return result
   }

function getBorrowersForBook(book, accounts) {
  let result = []
  let borrowed = book.borrows
  borrowed.forEach((borrow) => {
    let account = accounts.find((acc) => acc.id === borrow.id);
    let obj = account;
    obj["returned"] = borrow.returned;
    result.push(obj);
  })
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
