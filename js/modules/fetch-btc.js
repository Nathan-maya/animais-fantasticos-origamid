export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker').then((response) => response.json()).then((jsonBtc) => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (1000 / jsonBtc.BRL.sell).toFixed(4);
  }).catch((error) => {
    console.log(Error(error));
  });
}
