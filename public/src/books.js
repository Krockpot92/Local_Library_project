// finds author by "id" number
function findAuthorById(authors, id) {
  return authors.find(author=> author.id === id)
}
// finds book by "id number"
function findBookById(books, id) {
  return found = books.find(book=> book.id ===id)
}

// seperates books by borrowed status
//added filter function 
const partitionBooksByBorrowedStatus=(books=> { 
  let checkedOut = books.filter(book => !book.borrows[0].returned).map(book=> book)
  let returned = books.filter(book => book.borrows[0].returned == true).map(book => book)
  let result =[checkedOut,returned]
  return result
   })

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
