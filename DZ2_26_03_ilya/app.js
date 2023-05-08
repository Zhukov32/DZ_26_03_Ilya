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
         present: false
      },
      caffèLatteCold: {
         name:  'Caffè Latte Cold',
         cost: '1600 KZT',
         description: 'Охлажденный напиток на основе эспрессо и молока с небольшим количеством молочной пены. Поддерживая эко-инициативу, мы отказались от трубочек, сделав удобные крышечки с более широким отверстием, чтобы пить было удобнее.',
         present: true
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

if (question === starBuks.tea.matchaGreenTeaLatte.name && starBuks.tea.matchaGreenTeaLatte.present != false) {
   alert('Order is accepted')
} else if (question === starBuks.tea.icedBlackTea.name && starBuks.tea.icedBlackTea.present != false) {
   alert('Order is accepted')
} else if (question === starBuks.tea.chaiTeaLatte.name && starBuks.tea.chaiTeaLatte.present != false) {
   alert('Order is accepted')
} else if (question === starBuks.tea.icedChaiTeaLatte.name && starBuks.tea.icedChaiTeaLatte.present != false) {
   alert('Order is accepted')
} else if (question === starBuks.tea.icedMatchaGreenTeaLatte.name && starBuks.tea.icedMatchaGreenTeaLatte.present != false) {
   alert('Order is accepted')
} else if (question === starBuks.tea.icedGreenTea.name && starBuks.tea.icedGreenTea.present != false) {
   alert('Order is accepted')
}

else if (question === starBuks.coffee.caffèLatte.name && starBuks.coffee.caffèLatte.present != false) {
   alert('Order is accepted')
} else if (question === starBuks.coffee.caffèLatteCold.name && starBuks.coffee.caffèLatteCold.present != false) {
   alert('Order is accepted')
} else if (question === starBuks.coffee.cappuccino.name && starBuks.coffee.cappuccino.present != false) {
   alert('Order is accepted')
} else if (question === starBuks.coffee.caramelMacchiato.name && starBuks.coffee.caramelMacchiato.present != false) {
   alert('Order is accepted')
} else if (question === starBuks.coffee.whiteChocolateMocha.name && starBuks.coffee.whiteChocolateMocha.present != false) {
   alert('Order is accepted')
} else if (question === starBuks.coffee.caffèMocha.name && starBuks.coffee.caffèMocha.present != false) {
   alert('Order is accepted')
}
else {
   alert("Sorry, but you entered the wrong name or the product is over.")
}