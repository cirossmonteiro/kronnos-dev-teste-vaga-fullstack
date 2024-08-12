// inspired by https://pt.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas#C%C3%A1lculo_do_d%C3%ADgito_verificador
module.exports.validateCPF = (cpf) => {
  // cpf: string - without dots neither hifens

  const d = cpf.substring(0,9).split('');
  d.reverse();

  let v1 = 0;
  for(let i = 0; i < 9; i++) {
    v1 += d[i]*(9-(i%10));
  }
  v1 %= 11;
  v1 %= 10;

  let v2 = 0;
  for(let i = 0; i < 9; i++) {
    v2 += d[i]*(9-((i+1)%10));
  }
  v2 += 9*v1;
  v2 %= 11;
  v2 %= 10;
  
  return cpf[9] == v1 && cpf[10] == v2;
}

// inspired by https://pt.wikipedia.org/wiki/Cadastro_Nacional_da_Pessoa_Jur%C3%ADdica#Pseudoc%C3%B3digo
module.exports.validateCNPJ = (cnpj) => {
  // cnpj: string - without dots neither hifens and slashes

  const d = cnpj.substring(0,12).split('');

  let v1 = 0;
  for(let i = 0; i < 12; i++) {
    v1 += d[i]*(((11-i)%8)+2);
  }
  v1 = 11 - v1%11;
  v1 = v1 >= 10 ? 0 : v1;

  let v2 = 0;
  for(let i = 0; i < 12; i++) {
    v2 += d[i]*(((11-i+1)%8)+2);
  }
  v2 += 2*v1;
  v2 = 11 - v2%11;
  v2 = v2 >= 10 ? 0 : v2;

  return cnpj[12] == v1 && cnpj[13] == v2;
}
