export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero');
    numeros.forEach((numero) => {
      const total = +numero.innerHTML;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const time = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.inerText = total;
          clearInterval(time);
        }
      }, 25 * Math.random());
    });
  }
  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const observerTarget = document.querySelector('.numeros');
  observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
