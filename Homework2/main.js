let arr = [
  {
    id: 1,
    img: "Камень.jpg",
  },
  {
    id: 2,
    img: "Бумага.jpg",
  },
  ,
  {
    id: 3,
    img: "Ножницы.jpg",
  },
];
let user = document.querySelector(".user");
let comp = document.querySelector(".comp");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let play = document.querySelector(".play");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

function computer() {
  const random = Math.floor(Math.round() * arr.length);
  return arr[random];
}

btn1.onclick = () => {
  img1.src = "Бумага.jpg";
};
btn2.onclick = () => {
  img1.src = "Ножницы.jpg";
};
btn3.onclick = () => {
  img1.src = "Камень.jpg";
  comp.innerHTML++;
};

play.onclick = function () {
  comp.innerHTML++;
  // img2.src = computer().img;
  console.log(computer());
  console.log("me", img1.src);
};
