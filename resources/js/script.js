$(document).ready(
    function() {

        $('a').click(function(event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
            event.preventDefault();
        });

        $(".toggle-btn").click(function() {
            $(".side-menu").toggleClass("active");
            $('table').toggleClass("active");
            $('.toggle-btn').toggleClass('active');
            $('.toggle-btn').toggleClass("fa-chevron-right");
        });

        $('.toggle-btn-2').click(function() {
            $(".auto-audio").toggleClass("active-2");
            $('.toggle-btn-2').toggleClass('active-2');
        });

        $('.toggle-btn-3').click(function() {           
            $('.toggle-btn-3').toggleClass('active-3');   
            // $('.toggle-btn-3').toggleClass("fa-chevron-left");           
            $('.page-1-trang-chu').toggleClass('active-3');
            $('.page-2-trang-chu').toggleClass('active-3');     
                 
        });

        // $('.toggle-btn-4').click(function() {           
        //     $('.toggle-btn-4').toggleClass('active-4');            
        //     $('.page-1-trang-chu').toggleClass('active-4');
        //     $('.page-2-trang-chu').toggleClass('active-4');
        // });
    }
)