$("ready" , () => {
        setTimeout(() => {
            $("#loading").fadeOut(1000);
            $("main").fadeIn(1000);
        } , 6000);    
        $("main").toggleClass("d-none");



    
})