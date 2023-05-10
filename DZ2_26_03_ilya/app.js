const question = prompt('What would you like?')
const starBuks = {
   tea: {
      matchaGreenTeaLatte:{
         name: 'Matcha Green Tea Latte',
         cost: '1700 KZT',
         description: 'Фирменный горячий напиток на основе молока с добавлением зеленого чая Маття.',
         present: true
      },
      icedBlackTea:{
         name: 'Iced Black Tea',
         cost: '1100 KZT',
         description: 'Тонизирующий черный чай с добавлением льда. Поддерживая эко-инициативу, мы отказались от трубочек, сделав удобные крышечки с более широким отверстием, чтобы пить было удобнее.',
         present: true
      },
      chaiTeaLatte: {
         name: 'Chai Tea Latte',
         cost: '1700 KZT',
         description: 'Фирменный горячий чайный коктейль на основе черного чая с медом, пряностями и молоком.',
         present: true
      },
      icedChaiTeaLatte: {
         name: 'Iced Chai Tea Latte',
         cost: '1700 KZT',
         description: 'Фирменный охлаждённый чайный коктейль на основе черного чая с медом, пряностями и молоком. Поддерживая эко-инициативу, мы отказались от трубочек, сделав удобные крышечки с более широким отверстием, чтобы пить было удобнее.',
         present: false
      },
      icedMatchaGreenTeaLatte: {
         name: 'Iced Matcha Green Tea Latte',
         cost: '1700 KZT',
         description: 'Фирменный охлажденный напиток на основе молока с добавлением зеленого чая Маття. Поддерживая эко-инициативу, мы отказались от трубочек, сделав удобные крышечки с более широким отверстием, чтобы пить было удобнее.',
         present: true
      },
      icedGreenTea: {
         name: 'Iced Green Tea',
         cost: '1100 KZT',
         description: 'Тонизирующий зеленый чай с добавлением льда. Поддерживая эко-инициативу, мы отказались от трубочек, сделав удобные крышечки с более широким отверстием, чтобы пить было удобнее.',
         present: true
      },
   },
   coffee: {
      caffèLatte: {
         name:  'Caffè Latte',
         cost: '1600 KZT',
         description: 'Напиток на основе эспрессо и молока с небольшим количеством молочной пены.',
         present: true
      },
      caffèLatteCold: {
         name:  'Caffè Latte Cold',
         cost: '1600 KZT',
         description: 'Охлажденный напиток на основе эспрессо и молока с небольшим количеством молочной пены. Поддерживая эко-инициативу, мы отказались от трубочек, сделав удобные крышечки с более широким отверстием, чтобы пить было удобнее.',
         present: false
      },
      cappuccino: {
         name:  'Cappuccino',
         cost: '1500 KZT',
         description: 'Напиток на основе эспрессо и молока с большим количеством молочной пены.',
         present: true
      },
      caramelMacchiato: {
         name:  'Caramel Macchiato',
         cost: '1700 KZT',
         description: 'Горячий фирменный напиток Starbucks на основе эспрессо и молока с добавлением ванильного сиропа, украшается карамельным соусом',
         present: true
      },
      whiteChocolateMocha: {
         name:  'White Chocolate Mocha',
         cost: '1700 KZT',
         description: 'Напиток на основе эспрессо и молока с добавлением  соуса белого шоколада.',
         present: false
      },
      caffèMocha: {
         name:  'Caffè Mocha',
         cost: '1700 KZT',
         description: 'Напиток на основе эспрессо и молока с добавлением шоколадного соуса.',
         present: true
      },
   }
}

if ( starBuks.tea.matchaGreenTeaLatte.name === question && starBuks.tea.matchaGreenTeaLatte.present === true) {
   alert(starBuks.tea.matchaGreenTeaLatte.name + '\n' + starBuks.tea.matchaGreenTeaLatte.cost + '\n' + starBuks.tea.matchaGreenTeaLatte.description)
   alert('Order is accepted')
} else if (starBuks.tea.icedBlackTea.name === question && starBuks.tea.icedBlackTea.present === true) {
   alert(starBuks.tea.icedBlackTea.name + '\n' + starBuks.tea.icedBlackTea.cost + '\n' + starBuks.tea.icedBlackTea.description)
   alert('Order is accepted')
} else if (starBuks.tea.chaiTeaLatte.name === question && starBuks.tea.chaiTeaLatte.present === true) {
   alert(starBuks.tea.chaiTeaLatte.name + '\n' + starBuks.tea.chaiTeaLatte.cost + '\n' + starBuks.tea.chaiTeaLatte.description)
   alert('Order is accepted')
} else if (starBuks.tea.icedChaiTeaLatte.name === question && starBuks.tea.icedChaiTeaLatte.present === true) {
   alert(starBuks.tea.icedChaiTeaLatte.name + '\n' + starBuks.tea.icedChaiTeaLatte.cost + '\n' + starBuks.tea.icedChaiTeaLatte.description)
   alert('Order is accepted')
} else if (starBuks.tea.icedMatchaGreenTeaLatte.name === question && starBuks.tea.icedMatchaGreenTeaLatte.present === true) {
   alert(starBuks.tea.icedMatchaGreenTeaLatte.name + '\n' + starBuks.tea.icedMatchaGreenTeaLatte.cost + '\n' + starBuks.tea.icedMatchaGreenTeaLatte.description)
   alert('Order is accepted')
} else if (starBuks.tea.icedGreenTea.name === question && starBuks.tea.icedGreenTea.present === true) {
   alert(starBuks.tea.icedGreenTea.name + '\n' + starBuks.tea.icedGreenTea.cost + '\n' + starBuks.tea.icedGreenTea.description)
   alert('Order is accepted')
}

else if (starBuks.coffee.caffèLatte.name === question && starBuks.coffee.caffèLatte.present === true) {
   alert(starBuks.coffee.caffèLatte.name + '\n' + starBuks.coffee.caffèLatte.cost + '\n' + starBuks.coffee.caffèLatte.description)
   alert('Order is accepted')
} else if (starBuks.coffee.caffèLatteCold.name === question && starBuks.coffee.caffèLatteCold.present === true) {
   alert(starBuks.coffee.caffèLatteCold.name + '\n' + starBuks.coffee.caffèLatteCold.cost + '\n' + starBuks.coffee.caffèLatteCold.description)
   alert('Order is accepted')
} else if (starBuks.coffee.cappuccino.name === question && starBuks.coffee.cappuccino.present === true) {
   alert(starBuks.coffee.cappuccino.name + '\n' + starBuks.coffee.cappuccino.cost + '\n' + starBuks.coffee.cappuccino.description)
   alert('Order is accepted')
} else if (starBuks.coffee.caramelMacchiato.name === question && starBuks.coffee.caramelMacchiato.present === true) {
   alert(starBuks.coffee.caramelMacchiato.name + '\n' + starBuks.coffee.cara.cost + '\n' + starBuks.coffee.cara.description)
   alert('Order is accepted')
} else if (starBuks.coffee.whiteChocolateMocha.name === question && starBuks.coffee.whiteChocolateMocha.present === true) {
   alert(starBuks.coffee.whiteChocolateMocha.name + '\n' + starBuks.coffee.whiteChocolateMocha.cost + '\n' + starBuks.coffee.whiteChocolateMocha.description)
   alert('Order is accepted')
} else if (starBuks.coffee.caffèMocha.name === question && starBuks.coffee.caffèMocha.present === true) {
   alert(starBuks.coffee.caffèMocha.name + '\n' + starBuks.coffee.caffèMocha.cost + '\n' + starBuks.coffee.caffèMocha.description)
   alert('Order is accepted')
}
else {
   alert("Sorry, but you entered the wrong name or the product is over.")
}