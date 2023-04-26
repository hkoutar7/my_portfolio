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
