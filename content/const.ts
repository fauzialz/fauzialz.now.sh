export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export const vowel = ['a', 'i', 'u', 'e', 'o']

export const isVowel = (letter: string) => vowel.includes(letter)

export const firstIsVowel = (word: string) => isVowel(word.substr(0,1).toLocaleLowerCase())

export const printMonth = (date: Date, full?: boolean) => `${monthNames[date.getMonth()].substr(0, full? monthNames[date.getMonth()].length : 3)}`

export const printDate = (date: Date) => `${printMonth(date)} ${date.getFullYear()}`

export const printInterval = (date: Date) => {
    let now = new Date()
    let gap = (now.getTime() - date.getTime()) / 1000 / 60 / 60
    let days = Math.floor(gap / 24)
    let year = Math.floor(days / 365)
    let month = year > 0? Math.floor((days - (year * 365)) / 30) : Math.floor(days / 30)
    let printYear = year > 0 ? `${year} yr` : ''
    let printMonth = month > 0? `${month} mos` : ''
    return `${printYear} ${printMonth}`
}