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

function topNav() {
    console.log('hi')
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }