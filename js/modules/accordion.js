export default class Accordion {
  constructor(list, nameClass) {
    this.accordionList = document.querySelectorAll(list);
    if (nameClass === undefined) {
      this.activeClass = 'ativo';
    } else {
      this.activeClass = nameClass;
    }
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
  // adiciona os eventos ao accordion

  addAccordionEvent() {
    this.accordionList.forEach((item) => { item.addEventListener('click', () => this.toggleAccordion(item)); });
  }

  // iniciarFuncao
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
