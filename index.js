function addingEventListener() {
    const input = document.getElementById("input");
    function clickAlert() {
      alert("Clicked!");
    }
    input.addEventListener("click", clickAlert);
}
