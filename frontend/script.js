function calculateLove() {
  var name1 = document.getElementById("yourName").value;
  var name2 = document.getElementById("yourPartnersName").value;
  var score = Math.floor((Math.random()*100)+1);

  document.getElementById("result").textContent = name1+" ❤️ "+name2+" = "+score+"%";
}