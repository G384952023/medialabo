const dummyWeatherData = {
    "360630": { name: "Cairo", weather: "晴れ", temp_min: 18, temp_max: 30, humidity: 20, wind_speed: 4, wind_deg: 90, lat: 30.0, lon: 31.2 },
    "524901": { name: "Moscow", weather: "雪", temp_min: -5, temp_max: 0, humidity: 85, wind_speed: 6, wind_deg: 200, lat: 55.8, lon: 37.6 },
    "1850147": { name: "Tokyo", weather: "くもり", temp_min: 12, temp_max: 22, humidity: 70, wind_speed: 3, wind_deg: 180, lat: 35.6, lon: 139.7 },
    "2643743": { name: "London", weather: "雨", temp_min: 8, temp_max: 15, humidity: 80, wind_speed: 5, wind_deg: 250, lat: 51.5, lon: -0.1 },
  };
  

  document.getElementById("searchBtn").addEventListener("click", function () {
    const cityId = document.getElementById("cityIdInput").value;
    const data = dummyWeatherData[cityId];
  
    if (!data) {
      document.getElementById("result").innerHTML = "<p>その都市IDのデータはありません。</p>";
      return;
    }
  
    const html = `
      <p><strong>都市名:</strong> ${data.name}</p>
      <p><strong>緯度:</strong> ${data.lat}</p>
      <p><strong>経度:</strong> ${data.lon}</p>
      <p><strong>天気:</strong> ${data.weather}</p>
      <p><strong>最低気温:</strong> ${data.temp_min} ℃</p>
      <p><strong>最高気温:</strong> ${data.temp_max} ℃</p>
      <p><strong>湿度:</strong> ${data.humidity} %</p>
      <p><strong>風速:</strong> ${data.wind_speed} m/s</p>
      <p><strong>風向:</strong> ${data.wind_deg} °</p>
    `;
    document.getElementById("result").innerHTML = html;
  });
  
