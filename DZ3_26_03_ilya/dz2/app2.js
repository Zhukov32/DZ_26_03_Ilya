const mass = ['milk', 'beer', 'beer', 'milk', 'milk']
const beer = ['beer']

for (let i = 0; i < mass.length; i++) {
   if (beer.includes(mass[i])) {
      console.log('Bad');
   } else {
      console.log('Good');
   }
}