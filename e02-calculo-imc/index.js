const imcForm = document.querySelector('#form');

imcForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const weightInput = Number(e.target.querySelector('#weight').value);
  const heightInput = Number(e.target.querySelector('#height').value);

  const imc = getImc(weightInput, heightInput);
  const imcLevel = getImcLevel(imc);
  const msg = getMsg(imc, imcLevel);
  mountMsg(msg);

});

const getImc = (weightInput, heightInput) => {
  const heightInMeters = heightInput / 100;
  const imc = weightInput / (heightInMeters * heightInMeters);

  return imc;
};

const getImcLevel = (imc) => {
  const imcLevel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

  if (imc < 18.5) return imcLevel[0];
  if (imc <= 24.9) return imcLevel[1];
  if (imc <= 29.9) return imcLevel[2];
  if (imc <= 34.9) return imcLevel[3];
  if (imc <= 39.9) return imcLevel[4];
  if (imc > 40) return imcLevel[5];
};

const getMsg = (imc, imcLevel) => {
  const msg = `Seu IMC é de ${imc.toFixed(1)} (${imcLevel})`;
  return msg;
};

const mountMsg = (msg) => {
  const result = document.querySelector('#result');
  result.innerHTML = '';
  const p = createP();
  p.innerHTML = msg;
  p.classList = 'px-6 py-3 bg-gray-200 rounded-lg';
  result.appendChild(p);
};

const createP = () => {
  const p = document.createElement('p');
  return p;
};