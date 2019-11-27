const hasEnoughPoints = (userPoints = 0, productPoints = 0) => {
  return (userPoints - productPoints >= 0)
}

const remainPoints = (userPoints = 0, productPoints = 0) => {
  return userPoints - productPoints
}

module.exports = {
  hasEnoughPoints, remainPoints
}
