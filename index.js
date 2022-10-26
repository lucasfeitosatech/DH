const user = {
  likes: {
    books: ["Moby Dick", "Ulysses"],
  },
  friends: [
    {
      id: "YazL",
      likes: {
        books: ["Ulysses", "War and Peace"],
      },
    },
    {
      id: "queen9",
      likes: {
        books: ["The Great Gatsby", "Ulysses"],
      },
    },
    {
      id: "joyJoy",
      likes: {
        books: ["Don Quixote", "The Great Gatsby"],
      },
    },
    {
      id: "0sin5k1",
      likes: {
        books: ["The Great Gatsby", "War and Peace"],
      },
    },
    {
      id: "mariP",
      likes: {
        books: ["Don Quixote", "Hamlet", "Ulysses"],
      },
    },
  ],
};

const minimalScore = 0.3;
const userBooksLikes = [...user.likes.books];
const alreadyLikedByUser = (book) => {
  for (let likedBook of userBooksLikes) {
    if (likedBook === book) return true;
  }
  return false;
};
let booksCountLikes = {};
for (let friend of user.friends) {
  const friendLikes = friend.likes.books;
  for (let friendBook of friendLikes) {
    if (!alreadyLikedByUser(friendBook)) {
      if (booksCountLikes[friendBook] === undefined) {
        booksCountLikes[friendBook] = 1;
      } else booksCountLikes[friendBook] += 1;
    }
  }
}

let books = [];
const qtdFriend = user.friends.length;
for (let [key, value] of Object.entries(booksCountLikes)) {
  if (value / qtdFriend >= minimalScore) {
    books.push({
      book: key,
      qtd: value,
    });
  }
}

const sortedBooks = books.sort((book, nextBook) => nextBook.qtd - book.qtd);
const ret = sortedBooks.map((book) => book.book);

console.log(`
      
        Meu retorno: 

        Minimo:"${minimalScore}

        ${JSON.stringify(ret)}
      
      
      `);

return {
  ret,
};
