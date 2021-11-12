// locates account by id number
function findAccountById(accounts, id) {
  let result = accounts.find(account => account.id === id)
  
  return result
}

// Sorts accounts by last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) =>
  nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1
);
}

// Gets number of times an id appears in books borrowed list
let getTotalNumberOfBorrows = (account, books) =>
    books.reduce(
      (total,book)=> 
      total + 
      book.borrows
    .filter(entry => entry.id === account.id)
    .reduce((acc,entry)=>acc + 1,0),
    0)

// gets number of times an account borrowed a book
let getBooksPossessedByAccount = (account, books, authors) =>{
  const result = books.filter(book =>
    book.borrows.some(entry => entry.id === account.id && !entry.returned)
    )
    result.forEach(
      book => (book.author = authors.find(author => author.id ===book.authorId))
      )
      return result
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
