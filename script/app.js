window.navigator.mozSetMessageHandler('nfc-hci-event-transaction', (msg) => {
  var origin = document.getElementById("origin");
  origin.textContent = "Hello 2";

  var aid = document.getElementById("aid");
  aid.textContent = " World 2";

  var payload = document.getElementById("payload");
  payload.textContent = "WWWWW 2";
  dump("receive hci test 2");
});

dump("hci test 2");
