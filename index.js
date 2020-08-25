function emailMe(){
    window.open('mailto:rbcatong@gmail.com');
}

function linkMe(){
    window.open("https://www.linkedin.com/in/rebecca-tong/");
}

function tweetMe(){
    window.open("https://twitter.com/rbcatong");
}


function openGit(){
    window.open("https://github.com/rbcatong")
}


function showProjects(){
    document.getElementById("projects").style.display = "block";
    //show projects hide everything else 
}

function showResume(){
    window.open("https://drive.google.com/file/d/1Q9A-NH4RAbueomny-T0rv_PYMZUaz2D6/view?usp=sharing")
}


let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});