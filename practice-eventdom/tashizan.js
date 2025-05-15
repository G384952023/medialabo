document.getElementById("calc").addEventListener("click", function() {
    let left = document.getElementById("left").value;
    let right = document.getElementById("right").value;
  
    let a = parseInt(left, 10);
    let b = parseInt(right, 10);
  
    document.getElementById("answer").textContent = a + b;
  });
  