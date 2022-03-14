export default function initFetchBitcoin(url, target) {
  fetch(url).then((response) => response.json()).then((jsonBtc) => {
    const btcPreco = document.querySelector(target);
    btcPreco.innerText = (1000 / jsonBtc.BRL.sell).toFixed(4);
  }).catch((error) => {
    console.log(Error(error));
  });
}
