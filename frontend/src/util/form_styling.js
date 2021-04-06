export const enableFormStyling = () => {
  document.getElementsByClassName("sidebar")[0].style.display = "none";
  document.getElementsByClassName("main")[0].style.width = "100%";
  document.getElementsByTagName("footer")[0].style.display = "none";

  formStylingCallback();
  window.addEventListener("resize", formStylingCallback);
}

const formStylingCallback = () => {
  if (window.innerWidth > 675) {
    document.getElementsByTagName("html")[0].style.height = "100%";
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.height = "100%";
    document.getElementsByClassName("top-main")[0].style.height = "100%";
    document.getElementById("root").style.height = "100%";
  } else {    
    document.getElementsByTagName("html")[0].style.height = "";
    document.getElementsByTagName("html")[0].style.overflowY = "";
    document.getElementsByTagName("body")[0].style.height = "";
    document.getElementsByClassName("top-main")[0].style.minHeight = "";
    document.getElementById("root").style.height = "";
  }
}

export const disableFormStyling = () => {
  window.removeEventListener("resize", formStylingCallback);

  document.getElementsByClassName("sidebar")[0].style.display = "";
  document.getElementsByClassName("main")[0].style.width = "";  
  document.getElementsByTagName("footer")[0].style.display = "";

  document.getElementsByTagName("html")[0].style.height = "";
  document.getElementsByTagName("html")[0].style.overflowY = "";
  document.getElementsByTagName("body")[0].style.height = "";
  document.getElementsByClassName("top-main")[0].style.minHeight = "";
  document.getElementById("root").style.height = "";
}