let bodyTodo = document.getElementById("bodyTodo");
let texBox = document.getElementById("texBox");
let btn = document.getElementById("btn");

btn.onclick = function () {
  // creat task
  let labale = document.createElement("label");
  let tex = texBox.value;
  labale.textContent = tex;
  labale.style.display = "block";
  labale.setAttribute("id", "task");
  bodyTodo.insertBefore(labale, btn);
  // add trash btn
  let imgbic = document.createElement("img");
  imgbic.setAttribute("src", "/img/trash.png");
  imgbic.setAttribute("class", "trash");
  imgbic.style.position = "absolute";
  labale.appendChild(imgbic);
  // add edit btn
  let imgedit = document.createElement("img");
  imgedit.setAttribute("src", "/img/edit.png");
  imgedit.setAttribute("class", "edit");
  imgedit.style.position = "absolute";
  // add task
  labale.appendChild(imgedit);
  // remove task
  imgbic.onclick = function () {
    labale.remove();
  };
  //edit task
  imgedit.onclick = function () {
    
  };

  // empety input
  texBox.value = "";
};
