
// Helper function to sort top 5 entries
function sortnSplice(arr){
  arr.sort((entryA,entryB) => entryB.count - entryA.count)
  return arr.splice(0,5)
}

// Total number of books
function getTotalBooksCount(books) {
  return books.length
}

// retrieves total number of accounts
function getTotalAccountsCount(accounts) {
  return accounts.length
}


// retrieves total number of books borrowed
function getBooksBorrowedCount(books) {
  let result = 0
  books.forEach((index)=> {
    let borrow = index.borrows;
      borrow.forEach((index2) =>{
        let total = index2.returned
          if (total === false){          
          result += 1
        }
      })
    })
    return result
  }

  // Sorts books by genre
function getMostCommonGenres(books) {
  let result = []
  let genres = {};
    books.forEach((book) => {
      if (genres[book.genre] > 0){
        genres[book.genre]++
      }
      else(genres[book.genre] = 1)
    })    
    for (const [key, value] of Object.entries(genres)) {
      result.push({'name' : key,'count' : value})    
      }     
  result.sort((a,b)=> b.count - a.count)    
  return result.slice(0,5)
}

// Sorts books by popularity
let getMostPopularBooks=(books) =>
  books
    .map(({borrows,title}) => ({ name: title, count: borrows.length}))
    .sort((borrowsA,borrowsB)=> borrowsB.count - borrowsA.count)
    .slice(0, 5);
    
// Sorts authors by popularity
let getMostPopularAuthors =(books, authors) =>{
    let result = [];
    authors.forEach((author) =>{
      let authorName = {
          name: `${author.name.first} ${author.name.last}`,
          count: 0        
        }
        books.forEach((book) =>{
          if( book.authorId === author.id){
            authorName.count += book.borrows.length
          }
        })
        result.push(authorName)
      })
  return sortnSplice(result);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
