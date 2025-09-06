const IMCform = document.querySelector('#imcForm');

IMCform.addEventListener('submit', function (e) {
  e.preventDefault();

  const weight = Number(e.target.querySelector('#idweight').value);
  const heightInCM = Number(e.target.querySelector('#idheight').value);
  const imc = getIMC(weight, heightInCM);
  const imcLevel = getIMClevel(imc);
  displayResult(imcLevel);
});

const getIMC = (w, h) => {
  const heightInM = h / 100;
  const imc = w / (heightInM * heightInM);
  return imc;
};

const getIMClevel = (imc) => {
  let classification = "";
  if (imc < 18.5) classification = `Abaixo do peso`;
  else if (imc <= 24.9) classification = `Peso normal`;
  else if (imc <= 29.9) classification = `Sobrepeso`;
  else if (imc <= 34.9) classification = `Obesidade grau I`;
  else if (imc <= 39.9) classification = `Obesidade grau II`;
  else classification = `Obesidade grau III`;

  return `Seu IMC é de: ${imc.toFixed(2)} (${classification})`;
};

const createP = () => {
  const p = document.createElement('p');
  return p;
};

const displayResult = (msg) => {
  const result = document.querySelector('#imcResult');
  result.innerHTML = '';
  const p = createP();
  p.innerHTML = msg;
  result.appendChild(p);
};
