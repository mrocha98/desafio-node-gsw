const keyboard = [
  { value: '0', letters: [' '] },
  { value: '2', letters: ['A', 'B', 'C'] },
  { value: '3', letters: ['D', 'E', 'F'] },
  { value: '4', letters: ['G', 'H', 'I'] },
  { value: '5', letters: ['J', 'K', 'L'] },
  { value: '6', letters: ['M', 'N', 'O'] },
  { value: '7', letters: ['P', 'Q', 'R', 'S'] },
  { value: '8', letters: ['T', 'U', 'V'] },
  { value: '9', letters: ['W', 'X', 'Y', 'Z'] }
]

const separator = '_'

const msg = 'TESTE DE MESA'

const sms = msg
  .toUpperCase()
  .split('')
  .map((character, index, elements) => {
    const equivalentKey = keyboard.find((key) => key.letters.includes(character))
    const position = equivalentKey.letters.findIndex((letter) => letter === character)

    const repetitions = equivalentKey.value.repeat(position + 1)

    const next = elements[index + 1]

    return equivalentKey.letters.includes(next) ? repetitions + separator : repetitions
  })
  .join('')

const decoded = sms
  .split('')
  .reduce((newArray, character, index, elements) => {
    if (character === separator) return newArray

    const last = elements[index - 1]
    if (last === character) return newArray

    let counter = 1
    while (elements[index + counter] === character) {
      counter++
    }
    return newArray.concat({ value: character, times: counter })
  }, [])
  .map((item) => {
    const foundedIndex = keyboard.findIndex((key) => key.value === item.value)
    return keyboard[foundedIndex].letters[item.times - 1]
  })
  .join('')

console.log(decoded)
