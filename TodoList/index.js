// // dragger
// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// event.preventDefault()

// // // Ondrop

// const boxArray = ["Adiya", "Dulmaa", "Bat", "Dondog", "Zulaa", "Nomin"];

// let str = "";
// for (let i = 0; i < boxArray.length; i++) {
//   str += str + " " + boxArray[i];
// }
// console.log(str);

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(boxId));
}

// show function
// array

const boxArray = [
  {
    title: "Read book",
    Description: " 30 minutes reading ",
    Status: "",
    Priority: "Low",
  },
];

// render => array dahi el-d-g niiluulj box bolgood white board -d hiih

const render = () => {
  let boxString = "";
  boxArray.forEach((el, i) => {
    boxString += `<div ondragstart="drag(event)" class="box white-board gap" dragabble="true" i
d="box-${el.title + i}">
<div class="task-icon circle">
<img src="./completed.png" alt="" />
</div>
<ul class="">
  <li class="h3" >${el.title}</li>
  <li class="margin-16 ">${el.Description}</li>
  <li class="">${el.Status}</li>
  <li class="priority-box center ">${el.Priority}</li>
</ul>
<div class="action-buttons">
<div class="remove circle">
  <img src="./x.png" alt="" />
</div>
<div class="edit circle">
  <img src="./editicon.png" alt="" />
</div>
</div>

</div>
`;
  });
  if (document.getElementById("status-input").value === "Stuck") {
    document.getElementById("stuck-whiteboard").innerHTML = boxString; //appendchild bolgoh
  } else if (document.getElementById("status-input").value === "To do") {
    document.getElementById("todo-whiteboard").innerHTML = boxString;
  } else if (document.getElementById("status-input").value === "In progress") {
    document.getElementById("ip-whiteboard").innerHTML = boxString;
  } else if (document.getElementById("status-input").value === "Done") {
    document.getElementById("done-whiteboard").innerHTML = boxString;
  }
};
render();
// filter uusgeh

console.log(render);

const addTodo = () => {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status-input").value;
  const priorityInputValue = document.getElementById("priority-input").value;
  const inputObj = {
    title: titleInputValue,
    Description: descriptionInputValue,
    Status: statusInputValue,
    Priority: priorityInputValue,
  };
  boxArray.push(inputObj);
  render();
};

const show = () => {
  document.getElementsByClassName("add-task-window")[0].classList.add("show");
};
//modal nuuh
const hide = () => {
  document
    .getElementsByClassName("add-task-window")[0]
    .classList.remove("show");
};

//submit hiigeed hide hiih

const modalContainer = document.getElementsByClassName("add-task-window")[0];
window.onclick = function (event) {
  console.log(event.target);
  if (event.target == modalContainer) {
    //
    console.log(event.target, "=====", modalContainer);
    modalContainer.classList.remove("show");
  }
};
