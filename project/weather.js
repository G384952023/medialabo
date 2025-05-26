
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("都市: " + data.name);
  console.log("国: " + data.sys.country);

  let weather = data.weather[0];
  console.log("天気: " + weather.main);
  console.log("天気の詳細: " + weather.description);
  console.log("天気アイコン: " + weather.icon);

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

  let sunrise = new Date(data.sys.sunrise * 1000);
  let sunset = new Date(data.sys.sunset * 1000);
  console.log("日の出: " + sunrise.toLocaleTimeString());
  console.log("日の入り: " + sunset.toLocaleTimeString());
}
  


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  // 既存の div#result があれば削除
  const existing = document.getElementById("result");
  if (existing) {
    existing.remove();
  }

  // 新しい div#result を作成して body に追加
  const resultDiv = document.createElement("div");
  resultDiv.id = "result";
  document.body.appendChild(resultDiv);

  const weather = data.weather[0];
  const sunrise = new Date(data.sys.sunrise * 1000);
  const sunset = new Date(data.sys.sunset * 1000);

  resultDiv.innerHTML = `
    <p><strong>都市:</strong> ${data.name}</p>
    <p><strong>国:</strong> ${data.sys.country}</p>
    <p><strong>天気:</strong> ${weather.main}</p>
    <p><strong>天気の詳細:</strong> ${weather.description}</p>
    <p><strong>天気アイコン:</strong> ${weather.icon}</p>
    <p><strong>現在の気温:</strong> ${data.main.temp} ℃</p>
    <p><strong>体感温度:</strong> ${data.main.feels_like} ℃</p>
    <p><strong>最低気温:</strong> ${data.main.temp_min} ℃</p>
    <p><strong>最高気温:</strong> ${data.main.temp_max} ℃</p>
    <p><strong>湿度:</strong> ${data.main.humidity} %</p>
    <p><strong>気圧:</strong> ${data.main.pressure} hPa</p>
    <p><strong>風速:</strong> ${data.wind.speed} m/s</p>
    <p><strong>風向:</strong> ${data.wind.deg} °</p>
    <p><strong>風の突風:</strong> ${data.wind.gust ?? "なし"} m/s</p>
    <p><strong>雲の割合:</strong> ${data.clouds.all} %</p>
    <p><strong>日の出:</strong> ${sunrise.toLocaleTimeString()}</p>
    <p><strong>日の入り:</strong> ${sunset.toLocaleTimeString()}</p>
  `;
}

// 課題5-1 のイベントハンドラの定義
function show() {
  printDom(data); // dataはグローバル変数として与えられている前提
}



// 課題5-1, 6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

