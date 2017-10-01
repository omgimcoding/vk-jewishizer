function normalizeUserId(string) {
  if (/^\d+$/.test(string)) {
    return string;
  }

  if (/^id\d+$/.test(string)) {
    return string.substr(2);
  }

  /*if (/^[a-z0-9_]+$/.test(string)) {
    return false;
  }*/

  return false;
}

module.exports = normalizeUserId;
