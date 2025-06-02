
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("都市: " + data.name);
  console.log("国: " + data.sys.country);

  let weather = data.weather[0];
  console.log("天気: " + weather.main);
  console.log("天気の詳細: " + weather.description);

  console.log("現在の気温: " + data.main.temp + "℃");
  console.log("体感温度: " + data.main.feels_like + "℃");
  console.log("最低気温: " + data.main.temp_min + "℃");
  console.log("最高気温: " + data.main.temp_max + "℃");

  console.log("湿度: " + data.main.humidity + "%");
  console.log("気圧: " + data.main.pressure + "hPa");

  console.log("風速: " + data.wind.speed + "m/s");
  console.log("風向: " + data.wind.deg + "°");
  console.log("風の突風: " + data.wind.gust + "m/s");

  console.log("雲の割合: " + data.clouds.all + "%");

  console.log("日の出: " + sunrise.toLocaleTimeString());
  console.log("日の入り: " + sunset.toLocaleTimeString());
}
  


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let old = document.querySelector('div#result');
  if (old !== null) {
    old.remove();
  }
  // 新しい div#result を作成して body に追加
  let resultDiv = document.createElement("div");
  resultDiv.id = "result";
  document.body.appendChild(resultDiv);
   
  let pop = document.querySelector('div#result');

let a1 = document.createElement('p');
a1.textContent = "都市: " + data.name;
pop.appendChild(a1);

let a2 = document.createElement('p');
a2.textContent = "天気: " + data.weather[0].main;
pop.appendChild(a2);

let a3 = document.createElement('p');
a3.textContent = "天気の詳細: " + data.weather[0].description;
pop.appendChild(a3);

let a5 = document.createElement('p');
a5.textContent = "現在の気温: " + data.main.temp + "℃";
pop.appendChild(a5);

let a6 = document.createElement('p');
a6.textContent = "体感温度: " + data.main.feels_like + "℃";
pop.appendChild(a6);

let a7 = document.createElement('p');
a7.textContent = "最低気温: " + data.main.temp_min + "℃";
pop.appendChild(a7);

let a8 = document.createElement('p');
a8.textContent = "最高気温: " + data.main.temp_max + "℃";
pop.appendChild(a8);

let a9 = document.createElement('p');
a9.textContent = "湿度: " + data.main.humidity + "%";
pop.appendChild(a9);

let a10 = document.createElement('p');
a10.textContent = "気圧: " + data.main.pressure + "hPa";
pop.appendChild(a10);

let a11 = document.createElement('p');
a11.textContent = "風速: " + data.wind.speed + "m/s";
pop.appendChild(a11);

let a12 = document.createElement('p');
a12.textContent = "風向: " + data.wind.deg + "°";
pop.appendChild(a12);

let a13 = document.createElement('p');
a13.textContent = "風の突風: " + data.wind.gust + "m/s";
pop.appendChild(a13);

let a14 = document.createElement('p');
a14.textContent = "雲の割合: " + data.clouds.all + "%";
pop.appendChild(a14);

let sunrise = new Date(data.sys.sunrise * 1000);
let a15 = document.createElement('p');
a15.textContent = "日の出: " + sunrise.toLocaleTimeString();
pop.appendChild(a15);

let sunset = new Date(data.sys.sunset * 1000);
let a16 = document.createElement('p');
a16.textContent = "日の入り: " + sunset.toLocaleTimeString();
pop.appendChild(a16);
}

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
    let key;
    let select = document.querySelector("select#citySelect");
    key = select.value;
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+key+'.json';
  console.log(url);
  axios.get(url)
      .then(showResult)
      .catch(showError)
      .finally(finish);
  }
let u =document.querySelector('button#searchButton');
u.addEventListener('click', sendRequest);

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  // サーバから送られてきたデータを出力
  console.log(resp);
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);

  // data.x を出力
  console.log(data.x);
  printDom(data);
}


// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
