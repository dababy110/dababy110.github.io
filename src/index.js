/* Pointer effect 

const containerBox = document.querySelector('.container');
const pointerBox = document.querySelector('.pointer-box');
const pointerSize = 100
pointerBox.style.width =  pointerSize + 'px';
pointerBox.style.height =  pointerSize + 'px';

containerBox.addEventListener('mousemove', (event) => {
    pointerBox.style.top = (event.pageY - (pointerSize / 2)) + 'px';
    pointerBox.style.left = (event.pageX - (pointerSize / 2))  + 'px';
})

*/

/* Scrolling */

$(document).ready(function () {
    screenCheck();

    $(".scroll-control .one").click(function () {
        $.scrollify.move("#s-one");
    });
    $(".scroll-control .two").click(function () {
        $.scrollify.move("#s-two");
    });
    $(".scroll-control .three").click(function () {
        $.scrollify.move("#s-three");
    });
    $(".scroll-control .four").click(function () {
        $.scrollify.move("#s-four");
    });
});

$(window).on("resize", function () {
    screenCheck();
});

function applyScroll() {
    $.scrollify({
        section: ".scroll",
        sectionName: "section-name",
        easing: "easeOutExpo",
        scrollSpeed: 450,
        offset: 0,
        scrollbars: true,
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll: true,
    });
}

function screenCheck() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);

    if (agentID || $(window).width() <= 1024) {
        // delete class for mobile
        $.scrollify.destroy();
        $("section").removeClass("scroll").removeAttr("style");
        $.scrollify.disable();
    } else {
        // add class for desktop
        $("section").addClass("scroll");
        applyScroll();
        $.scrollify.enable();
    }
}


/* Filter */

const filterObjects = (value) => {
    var cardElement = document.getElementsByClassName("card");
    cardElement = document.getElementsByClassName("card");
    if (value == "all") value = "";
    for (i = 0; i < cardElement.length; i++) {
        removeClass(cardElement[i], "show");
        if (cardElement[i].className.indexOf(value) > -1) addClass(cardElement[i], "show")
    }
}

const addClass = (element, name) => {
    var i, array1, array2;
    var array1 = element.className.split(" ");
    array2 = name.split(" ");
    for (i = 0; i < array2.length; i++) {
        if (array1.indexOf(array2[i]) == -1) {
            element.className += " " + array2[i];
        }
    }
}

const removeClass = (element, name) => {
    var i, array1, array2;
    array1 = element.className.split(" ");
    array2 = name.split(" ");
    for (i = 0; i < array2.length; i++) {
        while (array1.indexOf(array2[i]) > -1) {
            array1.splice(array1.indexOf(array2[i]), 1);
        }
    }
    element.className = array1.join(" ");
}

filterObjects('all');

/* Resposive desing */

const button = document.getElementById('icon-menu');
const links = document.querySelector('.menu__nav');
const social = document.querySelector('.menu__social');

const barsClose = document.querySelector('#bars-close');
const barsOpen = document.querySelector('#bars-open');


button.addEventListener('click', () => {
    links.classList.toggle('on');
    social.classList.toggle('on');

    barsClose.classList.toggle('on');
    barsOpen.classList.toggle('off');
});