//MANEIRA ABSOLETA
// const getDayName = (day) => {
//   switch (day) {
//     case 0:
//       return "Domingo";
//     case 1:
//       return "Segunda-feira";
//     case 2:
//       return "Terça-feira";
//     case 3:
//       return "Quarta-feira";
//     case 4:
//       return "Quinta-feira";
//     case 5:
//       return "Sexta-feira";
//     case 6:
//       return "Sábado";
//   }
// };

// const getMonthName = (month) => {
//   switch (month) {
//     case 0:
//       return "Janeiro";
//     case 1:
//       return "Fevereiro";
//     case 2:
//       return "Março";
//     case 3:
//       return "Abril";
//     case 4:
//       return "Maio";
//     case 5:
//       return "Junho";
//     case 6:
//       return "Julho";
//     case 7:
//       return "Agosto";
//     case 8:
//       return "Setembro";
//     case 9:
//       return "Outubro";
//     case 10:
//       return "Novembro";
//     case 11:
//       return "Dezembro";
//   }
// };

// const addZeroBefore = (num) => {
//   return num >= 10 ? num : `0${num}`;
// };

// const createH1 = () => {
//   const h1 = document.createElement("h1");
//   return h1;
// };

// const createDate = (date) => {
//   const weekDayNumber = date.getDay();
//   const monthNumber = date.getMonth();
//   const dayName = getDayName(weekDayNumber);
//   const monthName = getMonthName(monthNumber);

//   return `${dayName}, ${date.getDate()} de ${monthName} de ${date.getFullYear()}`;
// };

// const createHours = (date) => {
//   return `${addZeroBefore(date.getHours())}:${addZeroBefore(date.getMinutes())}`
// };

// const createMsg = (date, hours) => {
//   h1 = createH1();
//   h1.innerHTML = `${date} <br> <strong>${hours}`;
//   container = document.querySelector('#dateContainer');
//   container.appendChild(h1);
// };

// const date = new Date();
// const dateMsg = createDate(date);
// const hoursMsg = createHours(date);
// createMsg(dateMsg, hoursMsg);

//MANEIRA MODERNA
const date = new Date();

const options = {
  weekday: 'long',
  year: 'numeric', 
  month: 'long',  
  day: 'numeric',  
  hour: 'numeric',
  minute: 'numeric'
};

const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);
const h1 = document.querySelector('#dateContainer h1');
h1.innerHTML = formattedDate;
