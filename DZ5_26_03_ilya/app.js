function filterBooks(...books) {
   const bookY = []
   const bookOther = []
   for (let i = 0; i < books.length; i++) {
      if (books[i].toLowerCase().includes('y')) {
         bookY.push(books[i])
      }else if (books[i].toLowerCase().includes('у')) {
         bookY.push(books[i])
      } else {
         bookOther.push(books[i])
      }
   }
   console.log(bookY);
   console.log(bookOther);
};
filterBooks()

const midlNum = (...numbers) => {
   const sum = numbers.reduce((a, b) => a + b);
   const length = numbers.length;
   return sum / length;
};
console.log(midlNum(4, 5, 9));
