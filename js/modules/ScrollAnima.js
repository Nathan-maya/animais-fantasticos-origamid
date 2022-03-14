export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada item em relacao topo
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distancia em cada objeto
  // em relacao ao scroll do site
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        section.element.classList.add('ativo');
      } else {
        section.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o event do scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
