let bodyTodo = document.getElementById("bodyTodo");
let texBox = document.getElementById("texBox");
let btn = document.getElementById("btn");

btn.onclick = function () {
  let labale = document.createElement("label");
  let tex = texBox.value;
  labale.textContent = tex;
  labale.style.display = "block";

  bodyTodo.insertBefore(labale, btn);
  texBox.value = "";

  //   if (texBox.trim() !== "") {
  //     let labale = document.createElement("label");
  //     let tex = texBox.value;
  //     labale.textContent = tex;
  //     labale.style.display = "block";

  //     bodyTodo.appendChild(labale);

  //     texBox.value = "";
  //   } else {
  //     alert("Please enter a task");
  //   }
};
