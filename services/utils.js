function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function isKeyInValid(key) {
  return (key === null || key === undefined)
}

module.exports = {
  capitalizeFirstLetter,
  isKeyInValid
};