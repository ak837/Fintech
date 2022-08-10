
const getBtcData = async () => {
   fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD&api_key=9abb9bb1371cbd037f81e705629744a17fb00a064c7b79651934b6450e713900')
  .then(response => response.json())
  .then(data => {   
    console.log(data);
    document.getElementById("info").innerHTML = '<b>1 BTC = ' + data.BTC.USD + ' USD</b><br>'+
    '<b>1 ETH = ' + data.ETH.USD + ' USD</b><br>' + '<b>1 XRP = ' + data.XRP.USD + ' USD</b><br>'
  });
}

getBtcData();
tcount=setInterval(function(){
  tcount++
  if (tcount==10) {getBtcData(); tcount=0}
  document.getElementById("infotime").innerHTML = 'Next update in ' + (10-tcount) + ' seconds'
},1000);
