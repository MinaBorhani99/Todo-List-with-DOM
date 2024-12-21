// call & create
let btnAdd = document.getElementById("btn");
let inputTask = document.getElementById("texBox");
let bodyTodo = document.getElementById("bodyTodo");

let ultask = document.createElement("ul");

bodyTodo.appendChild(ultask);

// button 
btnAdd.onclick = function () {
  // add task
  let textLli = inputTask.value.trim();
  if (textLli === ""){
    alert("empty!");
    return;
  }
  let liTask = document.createElement("li");
  liTask.setAttribute("class" , "li-task");

  // Add 
  let tastText = document.createElement("span")
  tastText.textContent = textLli;
  liTask.appendChild(tastText);

  // add edit
  const taskEdit = document.createElement("button");
  taskEdit.setAttribute = ("id", "task-Edit" );
  taskEdit.textContent = "Edit";
  liTask.appendChild(taskEdit);

   // add delete
   const taskDelete = document.createElement("button");
   taskDelete.textContent = "Delete";
   liTask.appendChild(taskDelete);

   // add item to list
   ultask.appendChild(liTask);

   // empety input
  inputTask.value = "";


  // add delete Button
   taskDelete.onclick = ()=> { liTask.remove(); }



   // add Edit Button
  taskEdit.onclick = () => {
    if (taskEdit.textContent === "Edit"){
      let editInput = document.createElement ("input");
      editInput.type = "text";
      editInput.value = tastText.textContent;
      liTask.insertBefore(editInput, tastText);
      liTask.removeChild(tastText);
      taskEdit.textContent = "Save";
    }else{
      let updateText = liTask.querySelector("input").value.trim();
      if (updateText === ""){
        alert("empty!!!");
        return;
      }
      tastText.textContent = updateText;
      liTask.insertBefore(tastText , liTask.querySelector("input"));
      liTask.removeChild(liTask.querySelector("input"));
      taskEdit.textContent = "Edit";
    }
  }
};
