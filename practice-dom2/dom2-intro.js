function changeDom() {
    const kazoeuta = document.querySelector("#kazoeuta");
    const newItem = document.createElement("li");
    newItem.textContent = "ヨット";
    kazoeuta.appendChild(newItem);
  
    let i = document.querySelector('img#bluemoon');    // 要素の検索
     i.setAttribute('src', 'bluemoon.jpg');
  
     let a =　document.createElement('a');        // 新規要素 a を作成
      a.textContent = '拓殖大学HP';                 // 要素 a のテキスト設定
      a.setAttribute('href', 'https://www.takushoku-u.ac.jp'); // 属性 href の設定
      let p = document.querySelector('p#takudai');
      p.insertAdjacentElement('afterend', a);
  

    const kassen = document.querySelector("#kassen");
    while (kassen.firstChild) {
      kassen.removeChild(kassen.firstChild);
    }
  

    const colors = ["赤", "緑", "青"];
    const ul = document.createElement("ul");
    colors.forEach(color => {
      const li = document.createElement("li");
      li.textContent = color;
      ul.appendChild(li);
    });
  
    const fukuzatu = document.querySelector("#fukuzatu");
    fukuzatu.appendChild(ul);
  }
  
  // ボタンにイベントハンドラを登録
  document.querySelector("#henkou").addEventListener("click", changeDom);
  