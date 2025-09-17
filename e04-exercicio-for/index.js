const elements = [
  { tag: "p", text: "Texto para tag <p>" },
  { tag: "div", text: "Texto para tag <div>" },
  { tag: "section", text: "Texto para tag <section>" },
  { tag: "footer", text: "Texto para tag <footer>" },
];

const putElements = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    const container = document.querySelector("section");
    const { tag, text } = elements[i];
    const htmlTag = document.createElement(tag);
    htmlTag.innerText = text;
    container.appendChild(htmlTag);
  }
};

putElements(elements);
