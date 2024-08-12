const csv = require('csv-parser')
const fs = require('fs')
const results = [];

const BRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

const REGEX = {
  BRL: /^\d+(.\d+)?$/
}

const RAISE_ERROR = false;

const validateRow = (obj) => {
  const error = {};
  
  Object.entries(obj).forEach(([field, value]) => {

    // checking if field is monetary
    if (field.substring(0,2) === "vl") {
      if (REGEX.BRL.test(value)) {
        obj[field] = BRL.format(value)
      } else {
        error[field] = `BRL not formatted: >${value}<`
        if (RAISE_ERROR) {
          throw Error(error[field]);
        }
      }
    }

    // check if vlTotal*100 == vlPresta*100*qtPrestacoes
    if (obj.vlTotal*100 !== obj.vlPresta*obj.qtPrestacoes*100) {
      error.vlPresta = `${obj.qtPrestacoes} * ${obj.vlPresta} != ${obj.vlTotal}`;
      if (RAISE_ERROR) {
        throw Error(error.vlPresta);
      }
    } /* else {
      error.vlPresta = `${obj.qtPrestacoes} * ${obj.vlPresta} == ${obj.vlTotal}`;
    } */

  });

  if (Object.keys(error).length !== 0) {
    console.error(error);
  }

  // console.log(obj);
  return obj;
}

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(validateRow(data)))
  .on('end', () => {
    console.log(123, results.length);
  });