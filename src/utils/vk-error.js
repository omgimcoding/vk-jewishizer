const errorsMap = {
  unknown: 'Unknown error.',
  15: 'Access denied.',
  18: 'This page was deleted or blocked.',
  100: 'Wrong ID.',
};

function getError(code) {
  return errorsMap[code] || errorsMap.unknown;
};

module.exports = getError;
