const getWeekDayString = (weekDay) => {
  let result = "";
  switch (weekDay) {
    case 0:
      result = "Domingo";
      return result;
    case 1:
      result = "Segunda-feira";
      return result;
    case 2:
      result = "Terça-feira";
      return result;
    case 3:
      result = "Quarta-feira";
      return result;
    case 4:
      result = "Quinta-feira";
      return result;
    case 5:
      result = "Sexta-feira";
      return result;
    case 6:
      result = "Sábado";
      return result;
  }
};

const getMounthString = (mounth) => {
  let result = "";
  switch (mounth) {
    case 0:
      result = "Janeiro";
      return result;
    case 1:
      result = "Fevereiro";
      return result;
    case 2:
      result = "Março";
      return result;
    case 3:
      result = "Abril";
      return result;
    case 4:
      result = "Maio";
      return result;
    case 5:
      result = "Junho";
      return result;
    case 6:
      result = "Julho";
      return result;
    case 7:
      result = "Agosto";
      return result;
    case 8:
      result = "Setembro";
      return result;
    case 9:
      result = "Outubro";
      return result;
    case 10:
      result = "Novembro";
      return result;
    case 11:
      result = "Dezembro";
      return result;
  }
};

const formatHours = (hours, minutes) => {
  let result = '';
  let formatedHours = `${hours}`;
  let formatedMinutes = `${minutes}`;

  if (hours < 10) { 
    formatedHours = `0${hours}`; 
  }
  if (minutes < 10) { 
    formatedMinutes = `0${minutes}`; 
  }

  result = `${formatedHours}:${formatedMinutes}`;
  return result;
};

const createP = () => {
  const p = document.createElement("p");
  return p;
};

const mountMsg = (weekDayString, mounthDay, mounth, year, formatedHours) => {
  const msgDiv = document.querySelector("#timeContainer");
  const msg = `${weekDayString}, ${mounthDay} de ${mounth} de ${year} <br> ${formatedHours}`;
  const p = createP();
  p.innerHTML = msg;
  msgDiv.appendChild(p);
};

const data = new Date();

const weekDay = data.getDay();
const mounthDay = data.getDate();
const mounth = data.getMonth();
const year = data.getFullYear();
const hours = data.getHours();
const minutes = data.getMinutes();

const weekDayString = getWeekDayString(weekDay);
const mounthString = getMounthString(mounth);
const formatedHours = formatHours(hours, minutes);

mountMsg(weekDayString, mounthDay, mounthString, year, formatedHours);
