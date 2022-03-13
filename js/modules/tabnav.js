export default class TabNav {
  constructor(menu, content, active) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    if (this.active === undefined) {
      this.active = 'ativo';
    }else {
      this.active = active;
    }
  }

  // ativa a tab de acordo com o index da mesma;
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.active);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.active, direcao);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
