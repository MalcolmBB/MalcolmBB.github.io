document.addEventListener("DOMContentLoaded", function(){
    setTimeout(() => {
            document.querySelector("#page").classList.add("pageShown");
            setTimeout(() => {
                document.querySelector("#page").style.display = "block";
                document.querySelector("#loadingMain").style.display = "none";
            }, 500)
    }, 6000)
});
