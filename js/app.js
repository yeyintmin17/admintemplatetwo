$(document).ready(function(){
    // Start Left Side Bar
    $(".sidebarlinks").click(function(){
        $(".sidebarlinks").removeClass("currents");
        $(this).addClass("currents");
    });
    // End Left Side Bar
});

// Start JS Area

// Start Top Sidebar

// start notify & user logout

// start dropdown

function dropbtn(e){
    // console.log(e.target.parentElement);
    e.currentTarget.nextElementSibling.classList.toggle("show");
}

// end dropdown

// end notify & user logout

// End Top Sidebar

// End JS Area