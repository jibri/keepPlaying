console.log("keep-playing extension is active");
setInterval(() => {
  if (document.getElementById("confirm-button")) {
    document.getElementById("confirm-button").click();
    console.log("clicked !");
  }
}, 1000);
