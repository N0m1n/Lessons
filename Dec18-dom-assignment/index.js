// const div = document.getElementById("helloText");
// div.innerHTML = "<h1>bus<h1/>";

// const div = document.getElementsByClassName("dummy");

// div[0].innerHTML = "yummy";

// const div = document.getElementsByTagName("p");

// div[1].innerHTML = "pineCOOOne";

// const div = document.querySelectorAll(".p");

// console.log(div);

// const div = document.querySelector("div.ptag");
// console.log(div);

// document.querySelector("#demo").innerHTML = "<p>Pineapple</p>";

// const h1 = document.createElement("h1");
// h1.innerText = "My H1";

// document.getElementsByTagName("div")[0].appendChild(h1);

// const child = document.getElementsByTagName("p")[1];

// const parent = document.getElementsByTagName("div")[0];
// parent.removeChild(child);

// //div element songoj avah
// const myEl = document.getElementsByTagName("div")[0];
// //img element uusgeh
// const imgEl = document.createElement("img");
// //img elementing src attr-d utga uguh
// imgEl.src =
//   "https://resource.market.sodonsolution.org/olz/product/2019/11/28/xczdvr07hrmv3dxz/imageFile_m.jpg";
// //img elementee songoj avsan div elementin child bolgoj uguh
// myEl.appendChild(imgEl);
// //h1 element ustgah
// const headerEl = document.getElementsByTagName("h1")[0];
// //songoj avsan div elementes songoj header element ustgah
// myEl.removeChild(headerEl);

// DOM EVENT <div id="button">Pinecone</div>
// {
// //   /* <body>
// // <div id="button">Pinecone</div>
// // <script>
// // const myButton = document.getElementById("button");
// // const bgChanger = () => {
// // myButton.style.backgroundColor = "red";
// // };
// // myButton.addEventListener("click", bgChanger);
// // </script>
// // </body> */
// }

// const containerEl = document.getElementsByClassName("boxes")[0];

// const button = document.getElementsByTagName("button")[0];
// let num = 1;

// const addBox = () => {
//   const box = document.createElement("div");
//   box.innerText = num;

//   box.style =
//     "width:40px; height: 40px; background-color: yellow; border: 1px solid black";
//   box.classList.add("box");
//   containerEl.appendChild(box);
//   num++;
// };
// button.addEventListener("click", addBox);

// EX2

const containerEl = document.getElementsByClassName("box")[0];

const button = document.getElementsByTagName("button")[0];

const chnColor = () => {
  containerEl.style.backgroundColor = "purple";
};
button.addEventListener("click", chnColor);
