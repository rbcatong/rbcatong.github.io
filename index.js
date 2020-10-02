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
    window.open("https://drive.google.com/file/d/1Yc4BxLysNalIfuwz6tP3i8WIeVD0E7Ww/view?usp=sharing")
}


function clickContact(){
    // i want to show the icons and hide eeverything else on the page. 
        document.getElementById("first_section").style.display = "none";
        document.getElementsByClassName("icons").style.display = "block"
        document.getElementById("about-me").style.display = "none"
    }

function showBlog(){
    window.open("https://rbcatong.wordpress.com")
}

function openGitForMakeupReviews(){
    window.open("https://github.com/rbcatong/Makeup-Reviews")
}

function openDemoForMakeupReviews(){
    window.open("https://www.youtube.com/watch?v=EWYfRn6jn5w&feature=youtu.be")
}