const sum = (a, b) => {
  return a + b
}

const multipli = (a, b) => {
  return a * b
}

const division = (a, b) => {
  if (b === 0) {
    return null
  }
  return a / b
}

const generateNumber = (limit) => {
  return Math.floor(Math.random() * limit)
}

module.exports = {
  sum,
  multipli,
  division,
  generateNumber
}
