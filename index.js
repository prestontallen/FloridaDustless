window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100)
})

document.getElementsByTagName('a')[0].addEventListener("click", function() {
    timeout = window.setTimeout(navClick(), 1000)
})

const navClick = function () {
    console.log(window.location.hash)
    var nav = document.getElementById('top-bar'),
        anchor = nav.getElementsByTagName('li'),
        current = window.location.hash
        for (var i = 0; i < anchor.length; i++) {
            if(anchor[i].a.href.split('/')[3] == current) {
                anchor[i].className = "active"
            }
        }
}

console.log("Loaded")
