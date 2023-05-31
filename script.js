let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
$(tabcontents).hide();
$(tabcontents[0]).show();

function openTab(tabname) {
    $(tabcontents).hide();
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    let content = document.getElementById(`${tabname}`);
    $(content).show();
    event.currentTarget.classList.add("active-link");
}

function pfilter(filters) {
    let filtered_name = document.getElementsByClassName(filters);
    let filter_name = document.getElementsByClassName("filter-name");
    for (let i = 0; i < 3; i++) {
        filter_name[i].classList.remove("active")
    }
    let work = document.getElementsByClassName('work');
    for (let i = 0; i < work.length; i++) {
        $(work[i]).hide()
    }

    event.currentTarget.classList.add("active");
    for (let i = 0; i < filtered_name.length; i++) {
        $(filtered_name[i]).show("fast")
    }
}
let work = document.getElementsByClassName('work');
for (let i = 0; i < work.length; i++) {
    $(work[i]).hide()
}
let seeMoreToken = 0;
let seeBtn = document.getElementById('seeBtn')
function seeMore() {
    if (seeMoreToken < 12) {
        seeMoreToken = seeMoreToken + 4;
        for (let i = 0; i < seeMoreToken; i++) {
            $(work[i]).show("fast");
        }
        if (seeMoreToken >= 12) {
            seeBtn.innerHTML = 'See Less'
        }
    } else if (seeMoreToken >= work.length && seeMoreToken > 0) {
        seeMoreToken = 12;
        for (let i = 0; i < work.length; i++) {
            $(work[i]).hide();
        }
        seeMoreToken = seeMoreToken - 8;
        for (let i = 0; i < seeMoreToken; i++) {
            $(work[i]).show();
        }
        seeBtn.innerHTML = 'See More'
    }
}
seeMore();
let sideMenu = document.getElementById("sideMenu");
function Menu(token) {
    if (token == 1) {
        sideMenu.style.right = "0";
    }
    else if (token == 0) {
        sideMenu.style.right = "-200px";
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyr4j7OqZYuh7jMkCR6rDZ7DRP5IbWNBU8cTvmMlWYuJHuqKscswTZrHay2UosRln8t/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully.";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 3000)
            form.reset();
        })
        .catch(error => {
            msg.innerHTML = "Failed to send a message.";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 3000)
            form.reset();
        })
})

var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Graphic Designer", "Website Developer", "App Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

