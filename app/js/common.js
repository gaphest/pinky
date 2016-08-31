(function () {
    var triangles=document.querySelectorAll('.triangle');
    var mapTriangle=document.querySelector('.map__triangle');

    window.addEventListener('load', mytriangle);

    // МЕНЮ
    var menuIcon=document.querySelector(".header-menu__icon");
    var menuClose=document.querySelector(".header-menu__close");
    var menu=document.querySelector(".header-menu__list");
    var headerMenu=document.querySelector(".header-menu");
    var links=document.querySelectorAll(".header-menu__item a");

    function menuToggler(){
        menuIcon.classList.toggle("hidden");
        menuClose.classList.toggle("visible");
        menu.classList.toggle("header-menu__list--vertical");
        menu.classList.toggle("fromFade");
        headerMenu.classList.toggle('header-menu--expanded');
    }

    menuIcon.addEventListener('click', menuToggler);

    menuClose.addEventListener('click', menuToggler);

    for(var i=0; i<links.length; i++){
        links[i].addEventListener('click',function(){
            if(menu.classList.contains('header-menu__list--vertical'))
                menu.classList.remove('header-menu__list--vertical')
            if(headerMenu.classList.contains('header-menu--expanded'))
                headerMenu.classList.remove('header-menu--expanded');
            if(menuClose.classList.contains("visible")){
                menuClose.classList.remove("visible");
                menuIcon.classList.remove("hidden");
            }
        });
    }

// ==========================================
//     РАЗДЕЛИТЕЛИ между секциями
    
    window.addEventListener('resize',function(){
        mytriangle();
    },false);


    function mytriangle(){
        if(document.documentElement.clientWidth >310) {
            triangles[0].style.borderRightWidth = document.documentElement.clientWidth + "px";
            triangles[1].style.borderRightWidth = document.documentElement.clientWidth + "px";

            mapTriangle.style.borderRightWidth = document.documentElement.clientWidth/2 + "px";
            mapTriangle.style.borderLeftWidth = document.documentElement.clientWidth/2 + "px";
        }
    }
})();

//GOOGLE MAP
var myCenter=new google.maps.LatLng(59.936357, 30.321569);

function initialize()
{
    var mapProp = {
        center:myCenter,
        zoom:18,
        mapTypeId:google.maps.MapTypeId.ROADMAP,

        panControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        scrollwheel: false
    };

    var map=new google.maps.Map(document.querySelector(".map__itself"),mapProp);

    var marker=new google.maps.Marker({
        position:myCenter,
        icon:'img/pinkball.png'
    });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);