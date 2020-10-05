// Hamberger menu
const navSearch =  document.querySelector('.nav-search');
const navLeft = document.querySelector('.nav-left');

document.querySelector('.toggle').addEventListener('click', () => {
  if(navSearch.style.display === "none") {
    navSearch.style.display = "inline-block";
    navLeft.style.display = "inline-block";
  } else {
    navSearch.style.display = "none";
    navLeft.style.display = "none";
  }
}); 