
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// CLOSE FORM WHEN CLICKING OUTSIDE
document.addEventListener("click", function(event){
    const clickedInsidePopup = event.target.closest(".form-popup");
    const clickedFloatingLabel = event.target.closest(".contact-floating-label");
    const clickedCancel = event.target.matches(".contact-cancel");
    const clickedNavbarContact = event.target.closest("nav ul li a");

    if (clickedNavbarContact) return;

    if (!clickedInsidePopup && !clickedFloatingLabel && !clickedCancel) {
        closeForm();
    }
});

// CONTACT FORM JS
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });


  //Click out of the hambuer menu to close it
document.addEventListener('click', (e) => {
  const nav = document.querySelector('nav ul');
  const burger = document.querySelector('.hamburger');

  // if click is outside both the menu AND the hamburger
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove('active');
  }
});
