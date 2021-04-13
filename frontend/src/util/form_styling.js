export const enableFormStyling = () => {
  document.getElementsByClassName("sidebar")[0].style.display = "none";
  document.getElementsByClassName("main")[0].style.width = "100%";
  document.getElementsByTagName("footer")[0].style.display = "none";

  formStylingCallback();
  window.addEventListener("resize", formStylingCallback);
}

const formStylingCallback = () => {
  if (window.innerWidth > 675) {
    document.getElementsByClassName("page-content")[0].style.overflow = "hidden";
    document.getElementsByClassName("page-content")[0].style.height = "100%";
    document.getElementsByClassName("main")[0].style.height = "100%";
    document.getElementsByClassName("main")[0].style.padding = "0";
  } else {    
    document.getElementsByClassName("page-content")[0].style.overflowY = "";
    document.getElementsByClassName("page-content")[0].style.height = "";
    document.getElementsByClassName("main")[0].style.height = "";
    document.getElementsByClassName("main")[0].style.padding = "";
  }
}

export const disableFormStyling = () => {
  window.removeEventListener("resize", formStylingCallback);

  document.getElementsByClassName("sidebar")[0].style.display = "";
  document.getElementsByClassName("main")[0].style.width = "";  
  document.getElementsByTagName("footer")[0].style.display = "";

  document.getElementsByClassName("page-content")[0].style.overflowY = "";
  document.getElementsByClassName("page-content")[0].style.height = "";
  document.getElementsByClassName("main")[0].style.height = "";
  document.getElementsByClassName("main")[0].style.padding = "";
}