module.exports = {
  objValuesToLowerCase: obj => {
    for (const [key, value] of Object.entries(obj)) {
      obj[`${key}`] = obj[`${key}`].toLowerCase()
    }
  
    return obj
  },
  processNota: nota => {
    nota.labels = nota.labels.map(label => label.toLowerCase())
    nota.color = nota.color.toLowerCase()

    return nota
  }
}