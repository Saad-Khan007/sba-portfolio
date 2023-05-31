// --------------- Declaration ---------------

$('.container_2').hide();
let box = document.querySelectorAll(".box");
let container = document.getElementsByClassName("container_1")[0];
let container2 = document.getElementsByClassName("container_2")[0];
let currentDiv = { img: "", name: "" };

// --------------- Show/Hide container1,container2 ---------------

box.forEach(boxes => {
  boxes.addEventListener('click', () => {
    $('.container_1').hide("slow");
    $('.container_2').show("slow");
    let currentTar = event.currentTarget;
    currentDiv.img = currentTar.querySelector('img').src;
    currentDiv.name = currentTar.querySelector('p').innerHTML;
    chngSrcName(currentDiv.name, currentDiv.img)
    matchP(currentDiv.name);
  });
});

// --------------- Matching Names Funtion ---------------

function matchP(name) {
  let box_1 = document.querySelectorAll(".box1")[0];
  let box_2 = document.querySelectorAll(".box1")[1];
  let p1 = box_1.querySelectorAll('p');
  let p2 = box_2.querySelectorAll('p');
  p1.forEach((e) => {
    if (e.innerHTML === name) {
      e.closest(".box_1").className += " active";
    }
  })
  p2.forEach((e) => {
    if (e.innerHTML === name) {
      e.closest(".box_1").className += " active";
    }
  })

}

// --------------- Change of box2 img_src and name Funtion ---------------

function chngSrcName(name, src) {
  let img_src = document.getElementById("img");
  let img_name = document.getElementById("name");
  img_name.innerHTML = name;
  img_src.src = src;
}

// --------------- Add active class on active box_1 ---------------

var btns = container2.getElementsByClassName("box_1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
