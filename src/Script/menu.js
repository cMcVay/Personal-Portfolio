function showProjects() {
    var about = document.getElementById("About");
    var project = document.getElementById("Projects");
    if (about.style.display === "flex") {
      about.style.display = "none";
      project.style.display = "flex";
    }
}

const mediaQuery = window.matchMedia('(min-width: 1220px)')
function handleScreenChange(e) {
    var about = document.getElementById("About");
    var project = document.getElementById("Projects");
    if (e.matches) {
        project.style.display = "flex";
        about.style.display = "flex";
        console.log('wider');
    } else {
        console.log('shorter');
        project.style.display = "none";
    }
}
mediaQuery.addListener(handleScreenChange);
handleScreenChange(mediaQuery);