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

// const render = () => {
//   let boxString = "";
//   boxArray.forEach((el, i) => {
//     boxString += `<div ondragstart="drag(event)" class="box white-board gap" dragabble="true" id="box-${el.title + i}">

const allowDrop=(event) =>{
  event.preventDefault();
};

const drag= (event) =>{
  event.dataTransfer.setData("text", event.target.id);
};

function drop(event) {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(boxId));
};

// show function
// array

const boxArray = [
  {
    title: "Read book",
    Description: " 30 minutes reading ",
    Status: "To do",
    Priority: "Low",
  },
];

// render => array dahi el-d-g niiluulj box bolgood white board -d hiih

const render = () => {
  let todoContainerElements = "";
  let doneContainerElements = "";
  let ipContainerElements = "";
  let stuckContainerElements = "";

  // let todo = [];
  // let inProgress = [];
  // let stuck = [];
  // let done = [];


  const filteredTodo = boxArray.filter((el, i) => el.Status === "To do");
  const filteredDone = boxArray.filter((el, i) => el.Status === "Done");
  const filteredIp = boxArray.filter((el, i) => el.Status === "In Progress");
  const filteredStuck = boxArray.filter((el, i) => el.Status === "Stuck");

  filteredTodo.forEach((el, i) => {
    todoContainerElements += `<div ondragstart="drag(event)" class="box white-board gap" draggable="true" id="${el.id}">

<div class="task-icon circle">
<img src="./completed.png" alt="" />
</div>
<ul class="">
  <li class="h3" >${el.title}</li>
  <li class="margin-16 ">${el.Description}</li>
  <li class=" none ">${el.Status}</li>
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

  filteredDone.forEach((el, i) => {
    doneContainerElements += `<div ondragstart="drag(event)" class="box white-board gap" draggable="true" id="${el.id}">

<div class="task-icon circle">
<img src="./completed.png" alt="" />
</div>
<ul class="">
  <li class="h3" >${el.title}</li>
  <li class="margin-16 ">${el.Description}</li>
  <li class="none">${el.Status}</li>
  <li class="priority-box  center ">${el.Priority}</li>
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

  filteredIp.forEach((el, i) => {
    ipContainerElements += `<div ondragstart="drag(event)" class="box white-board gap" draggable="true" id="${el.id}">

<div class="task-icon circle">
<img src="./completed.png" alt="" />
</div>
<ul class="">
  <li class="h3" >${el.title}</li>
  <li class="margin-16 ">${el.Description}</li>
  <li class="none ">${el.Status}</li>
  <li class="priority-box  center ">${el.Priority}</li>
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

  filteredStuck.forEach((el, i) => {
    stuckContainerElements += `<div ondragstart="drag(event)" class="box white-board gap" draggable="true" id="${el.id}">

<div class="task-icon circle">
<img src="./completed.png" alt="" />
</div>
<ul class="">
  <li class="h3" >${el.title}</li>
  <li class="margin-16 ">${el.Description}</li>
  <li class="none">${el.Status}</li>
  <li class="priority-box center ">${el.Priority}</li>
</ul>
<div class="action-buttons">
<div class="remove circle">
// <div class="done" onclick="remove('${el.id}')">
  <img src="./x.png" alt="" />
</div>
<div class="edit circle">
  <img src="./editicon.png" alt="" />
</div>
</div>

</div>
`;
  });


  document.getElementById("todo-whiteboard").innerHTML = todoContainerElements;
  // document.querySelector("todo-task-number").innerHTML =todo.length;
  // // let x = todoContainerElements.child.length;
  // // console.log(x);
  // let num = document.getElementById("todo-greybox").childElementCount - 1;
  // console.log(num);
  document.getElementById("done-whiteboard").innerHTML = doneContainerElements;
  document.getElementById("ip-whiteboard").innerHTML = ipContainerElements;
  document.getElementById("stuck-whiteboard").innerHTML =
    stuckContainerElements;
};
render();
// filter uusgeh

const emptyModal = ()=> {

  document.getElementById("title-input").value=""; 
  document.getElementById("description-input").value="";

};

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
  emptyModal();
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

// count status
// const counterStatus = (array) => {
//   let obj = {};
//   array.forEach((el) => {
//     if (obj[el.Status]) {
//       obj[el.Status]++;
//     } else {
//       obj[el.Status] = 1;
//     }
//   });
//   return obj;
// };
// console.log(counterStatus(boxArray));
// x-leh

// const removeX = () => {
//   document.getElementsByClassName("remove circle");
//   onclick;
// };

// let numb = document.getElementById("ip-greybox").childElementCount;

// console.log(numb - 1);

// const counterStatus = () => {
//   let counter = "";

//   array.forEach((el, i) => {});
// };
