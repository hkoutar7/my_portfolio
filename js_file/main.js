let myMenu = document.querySelector("nav > ul");
let li = document.querySelectorAll("nav>ul>li");

function openMenu() {
  myMenu.style.cssText = "width : 50%";
  li.forEach(function (el) {
    el.style.display = "block ";
  });
}

function closeMenu() {
  myMenu.style.cssText = "width : 0%";

  li.forEach(function (el) {
    el.style.display = "none ";
  });
}

// Nav function skills - Exeperience - education -

let divNav = Array.from(document.getElementsByClassName("art"));
let TabLinks = Array.from(document.querySelectorAll(".myNav ul li"));

console.log(TabLinks);

function openNav(choice) {
  switch (choice) {
    case "1": {
      divNav.forEach(function (e) {
        if (e.classList.contains("active")) e.classList.remove("active");
      });
      TabLinks.forEach(function (e) {
        if (e.classList.contains("active")) e.classList.remove("active");
      });

      divNav[0].classList.add("active");
      TabLinks[0].classList.add("active");

      break;
    }
    case "2": {
      divNav.forEach(function (e) {
        if (e.classList.contains("active")) e.classList.remove("active");
      });
      TabLinks.forEach(function (e) {
        if (e.classList.contains("active")) e.classList.remove("active");
      });

      divNav[1].classList.add("active");
      TabLinks[1].classList.add("active");

      break;
    }
    case "3": {
      divNav.forEach(function (e) {
        if (e.classList.contains("active")) e.classList.remove("active");
      });
      TabLinks.forEach(function (e) {
        if (e.classList.contains("active")) e.classList.remove("active");
      });

      divNav[2].classList.add("active");
      TabLinks[2].classList.add("active");
      break;
    }
  }
}

// Card Events :
let myContCards = Array.from(document.querySelectorAll("#myWork div picture"));
let myArticles = Array.from(document.querySelectorAll(".article-con article"));

function removeActive(myArr) {
  myArr.forEach(function (e) {
    if (e.classList.contains("active")) e.classList.remove("active");
  });
}

myContCards.forEach(function (card) {
  card.addEventListener("click", function (e) {
    removeActive(myArticles);

    if (e.target.classList.contains("p1")) {
      let article1 = document.querySelector(
        ".article-con > article:first-of-type"
      );
      if (article1) {
        article1.classList.add("active");
      }
    }
    if (e.target.classList.contains("p2")) {
      let article2 = document.querySelector(
        ".article-con > article:nth-of-type(2)"
      );
      if (article2) {
        article2.classList.add("active");
      }
    }
    if (e.target.classList.contains("p3")) {
      let article3 = document.querySelector(
        ".article-con > article:nth-of-type(3)"
      );
      if (article3) {
        article3.classList.add("active");
      }
    }
  });
});
