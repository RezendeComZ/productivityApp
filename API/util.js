module.exports = {
  objValuesToLowerCase: obj => {
    for (const [key, value] of Object.entries(obj)) {
      obj[`${key}`] = obj[`${key}`].toLowerCase()
    }
  
    return obj
  }
}