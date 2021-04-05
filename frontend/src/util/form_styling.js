export const enableFormStyling = () => {
  document.getElementsByClassName("sidebar")[0].style.display = "none";
  document.getElementsByClassName("main")[0].style.width = "100%"; 

  document.getElementsByTagName("html")[0].style.height = "100%";
  document.getElementsByTagName("html")[0].style.paddingBottom = "0";
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
  document.getElementsByTagName("body")[0].style.height = "100%";
  document.getElementsByClassName("top-main")[0].style.height = "100%";
  document.getElementById("root").style.height = "100%";
}

export const disableFormStyling = () => {
  document.getElementsByClassName("sidebar")[0].style.display = "flex";
  document.getElementsByClassName("main")[0].style.width = "1250px";
  
  document.getElementsByTagName("html")[0].style.height = "";
  document.getElementsByTagName("html")[0].style.paddingBottom = "20px";
  document.getElementsByTagName("html")[0].style.overflowY = "scroll";
  document.getElementsByTagName("body")[0].style.height = "";
  document.getElementsByClassName("top-main")[0].style.height = "";
  document.getElementById("root").style.height = "";
}