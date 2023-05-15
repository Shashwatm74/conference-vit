////to show the active menu in the sidebar 
//this file is not being used now due to some error 
// temporarily fixed the function by comparing the pathname 

if (typeof window === 'object') {
    // Get the container element
    var btnContainer = document.getElementById("sidebar");
    var btns = document.getElementsByClassName("link");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            // var active = btn[i].getAttribute("isActive");

            this.setAttribute("isActive", "true");
        });
    }
}