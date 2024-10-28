import QRCode from 'qrcode'

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function draw() {
  document.getElementById("reee2").innerText = makeid(10);
  document.getElementById("reee").placeholder = makeid(10);
  document.getElementById("11rand").innerText = makeid(11);
  document.getElementById("rand8").innerText = makeid(8);
  document.getElementById("rand8b").placeholder = makeid(8);
  document.getElementById("htd").innerText = "https://" + makeid(Math.round(Math.random() * 8)) + ".com"
  window.requestAnimationFrame(draw);
}

document.getElementById("rarXDTehe").addEventListener("click", function() {
  // With promises
  QRCode.toDataURL(window.location.href + document.getElementById("reee").value)
  .then(url => {
    document.getElementById("qrCode").src = url;
  })
  .catch(err => {
    console.error(err)
  });
});

window.requestAnimationFrame(draw);
