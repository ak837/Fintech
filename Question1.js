
const getBtcData = async () => {
   fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD&api_key=f65355cfcf50e300e5fcf3123382110667b44175c066ed2202cf0ae56931e8e7')
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
  if (tcount==15) {getBtcData(); tcount=0}
  document.getElementById("infotime").innerHTML = 'Next update in ' + (15-tcount) + ' seconds'
},1000);
