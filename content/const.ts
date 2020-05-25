export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export const vowel = ['a', 'i', 'u', 'e', 'o']

export const isVowel = (letter: string) => vowel.includes(letter)

export const firstIsVowel = (word: string) => isVowel(word.substr(0,1).toLocaleLowerCase())