
//collapsible section with button//

let coll = document.getElementsByClassName("collapsible");

coll[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.innerHTML = "More Information";
    } else {
      content.style.display = "block";
      this.innerHTML = "Less Information";
    }
});

