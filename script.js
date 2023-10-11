var options = document.querySelectorAll(".option");

options.forEach(function(option) {
  option.addEventListener("click", function() {
    options.forEach(function(opt) {
      opt.classList.remove("active");
    });
    
    this.classList.add("active");
  });
});