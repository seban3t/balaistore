function myFunction(x) {
	var ul = document.getElementById('sidenav');
	x.classList.toggle("change");
	ul.classList.toggle("sidenav");
}

$('.scrolled').click(function() {
$('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top-90
}, 750);
 return false;
});

function onElementFocused(e)
{
    if (e && e.target)
        document.activeElement = e.target == document ? null : e.target;
} 

if (document.addEventListener) 
    document.addEventListener("focus", onElementFocused, true);

document.getElementById("year").innerHTML = new Date().getFullYear();
