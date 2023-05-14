const list = [null, 123, undefined, null, 'qwerty', 34, 65, undefined, null, null, 43, 'aerg', 'пкцйк', null, `uioo`]
const nulls = []
const numbers = []
const undefineds= []
const strings = []

for (let i = 0; i < list.length; i++) {
   if (list[i] === null) {
      nulls.push(list[i])
   } else if (typeof(list[i]) === 'number') {
      numbers.push(list[i])
   } else if (typeof(list[i]) === 'undefined') {
      undefineds.push(list[i])
   } else if (typeof(list[i]) === 'string') {
      strings.push(list[i])
   }
}

const result = [nulls, numbers, undefineds, strings]

result.sort(function(a, b) {
   return b.length - a.length
})

console.log(result);