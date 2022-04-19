function centsToDecimals(centValue) {
  if (typeof centValue !== 'number' || isNaN(centValue)) {
    return undefined;
  }

  let result = centValue / 100;

  return result.toFixed(2) + '$';
}

centsToDecimals(1000)
centsToDecimals(50273)
centsToDecimals(0)

// The following is required to make automated tests run. Please ignore it.
if (typeof module !== 'undefined') module.exports = { centsToDecimals };
