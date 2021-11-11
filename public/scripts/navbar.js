
// function for category----------------------------------****************--------------------
function addFunctionalityToNavbar() {

    let cat = document.getElementById("cat")
    var firstdiv = document.getElementById("firstdiv")
    var secdiv = document.getElementById("secdiv")
    var onetwo = document.getElementById("onetwo")
    var thirdiv = document.getElementById("thirdiv")
    cat.addEventListener('mouseover', () => {
        onetwo.setAttribute('class', 'flex ml-28')
    })
    cat.addEventListener('mouseout', () => {
        onetwo.setAttribute('class', 'hidden')
    })
    // after hover on category --* firstdiv *--
    onetwo.addEventListener('mouseover', () => {
        onetwo.setAttribute('class', 'flex ml-28')
    })
    onetwo.addEventListener('mouseout', () => {
        onetwo.setAttribute('class', 'hidden')
    })
    // after hover on category --* secdiv *--
    secdiv.addEventListener('mouseover', () => {
        thirdiv.setAttribute('class', 'block w-64 bg-white border  border-l-0')
    })
    secdiv.addEventListener('mouseout', () => {
        thirdiv.setAttribute('class', 'hidden')
    })
    // after hover on category --* thirddiv *--
    thirdiv.addEventListener('mouseover', () => {
        onetwo.setAttribute('class', 'flex ml-28')
        thirdiv.setAttribute('class', 'block w-64 bg-white border  border-l-0')
    })
    thirdiv.addEventListener('mouseout', () => {
        onetwo.setAttribute('class', 'hidden')
        thirdiv.setAttribute('class', 'hidden')
    })


    // after hover on ****   firstdiv > bussiness   **** 

    let bussi = document.getElementById("bussi")
    bussi.addEventListener('mouseover', () => {
        //secdiv.innerText = null





    })

    //  after hover on ****   Udemy Bussiness  ****  
    let ubussi = document.getElementById("ubussi")
    let bussiness = document.getElementById("bussiness")
    ubussi.addEventListener('mouseover', () => {
        bussiness.setAttribute('class', 'block w-72 break-words bg-white absolute')
    })

    ubussi.addEventListener('mouseout', () => {
        bussiness.setAttribute('class', 'hidden')
    })
    bussiness.addEventListener('mouseover', () => {
        bussiness.setAttribute('class', 'block w-72 break-words bg-white absolute')
    })
    bussiness.addEventListener('mouseout', () => {
        bussiness.setAttribute('class', 'hidden')
    })


    // after hover on ****   teach on udemy  ****  

    let teach = document.getElementById("teach")
    let hoveronteach = document.getElementById("hoveronteach")
    teach.addEventListener('mouseover', () => {
        hoveronteach.setAttribute('class', 'block w-72 break-words bg-white justify-center absolute')
    })

    teach.addEventListener('mouseout', () => {
        hoveronteach.setAttribute('class', 'hidden')
    })
    hoveronteach.addEventListener('mouseover', () => {
        hoveronteach.setAttribute('class', 'block w-72 break-words bg-white justify-center absolute')
    })
    hoveronteach.addEventListener('mouseout', () => {
        hoveronteach.setAttribute('class', 'hidden')
    })


    //  after hover on ****   cart  ****   

    let cart = document.getElementById("cart")
    let hovercart = document.getElementById("hovercart")
    cart.addEventListener('mouseover', () => {
        hovercart.setAttribute('class', 'hidden md:block w-72 break-words bg-white justify-center absolute ')
    })

    cart.addEventListener('mouseout', () => {
        hovercart.setAttribute('class', 'hidden')
    })
    hovercart.addEventListener('mouseover', () => {
        hovercart.setAttribute('class', ' hidden md:block w-72 break-words bg-white justify-center absolute')
    })
    hovercart.addEventListener('mouseout', () => {
        hovercart.setAttribute('class', 'hidden')
    })


    //  after hover on ****   teach on udemy  ****   


    let learning = document.getElementById("learning")
    let hoverlearning = document.getElementById("hoverlearning")
    learning.addEventListener('mouseover', () => {
        hoverlearning.setAttribute('class', 'block w-72 break-words bg-white justify-center absolute')
    })

    learning.addEventListener('mouseout', () => {
        hoverlearning.setAttribute('class', 'hidden')
    })
    hoverlearning.addEventListener('mouseover', () => {
        hoverlearning.setAttribute('class', 'block w-72 break-words bg-white justify-center absolute')
    })
    hoverlearning.addEventListener('mouseout', () => {
        hoverlearning.setAttribute('class', 'hidden')
    })


    //  after hover on ****   favourite  ****  


    let favorite = document.getElementById("favorite")
    let hoverfavorite = document.getElementById("hoverfavorite")

    favorite.addEventListener('mouseover', () => {
        hoverfavorite.setAttribute('class', 'block w-72 break-words bg-white absolute')
    })

    favorite.addEventListener('mouseout', () => {
        hoverfavorite.setAttribute('class', 'hidden')
    })
    hoverfavorite.addEventListener('mouseover', () => {
        hoverfavorite.setAttribute('class', 'block w-72 break-words bg-white absolute')
    })
    hoverfavorite.addEventListener('mouseout', () => {
        hoverfavorite.setAttribute('class', 'hidden')
    })

    //  after hover on ****   bell  ****  


    let bell = document.getElementById("bell")
    let hoverbell = document.getElementById("hoverbell")

    bell.addEventListener('mouseover', () => {
        hoverbell.setAttribute('class', 'block w-72 break-words bg-white absolute')
    })

    bell.addEventListener('mouseout', () => {
        hoverbell.setAttribute('class', 'hidden')
    })
    hoverbell.addEventListener('mouseover', () => {
        hoverbell.setAttribute('class', 'block w-72 break-words bg-white absolute')
    })
    hoverbell.addEventListener('mouseout', () => {
        hoverbell.setAttribute('class', 'hidden')
    })


    //  after hover on ****   user  ****  


    let user = document.getElementById("user")
    let hoveruser = document.getElementById("hoveruser")

    user.addEventListener('mouseover', () => {
        hoveruser.setAttribute('class', 'block w-64 break-words bg-white border absolute')
    })

    user.addEventListener('mouseout', () => {
        hoveruser.setAttribute('class', 'hidden')
    })
    hoveruser.addEventListener('mouseover', () => {
        hoveruser.setAttribute('class', 'block w-64 break-words bg-white border absolute')
    })
    hoveruser.addEventListener('mouseout', () => {
        hoveruser.setAttribute('class', 'hidden')
    })

    //      for  signin and sign up  ***** -------------


    let signin = document.getElementById("signin")
    let signup = document.getElementById("signup")
    let language = document.getElementById("language")
    let beforlogin = document.getElementById("beforlogin")
    let afterlogin = document.getElementById("afterlogin")
    function ok() {
        signin.setAttribute('class', 'hidden md:block mx-2 text-sm border border-black px-3 font-semibold py-2')
        signup.setAttribute('class', 'hidden md:block mx-2 text-sm border border-black bg-black text-white px-3 font-semibold py-2')
        language.setAttribute('class', 'hidden md:block mx-2 border border-black px-2 py-2 mr-4')
        user.setAttribute('class', 'hidden')
        learning.setAttribute('class', 'hidden')
        bell.setAttribute('class', 'hidden')
        favorite.setAttribute('class', 'hidden')
        beforlogin.setAttribute('class', 'block')
        afterlogin.setAttribute('class', 'hidden')
    }
    function done() {
        signin.setAttribute('class', 'hidden')
        signup.setAttribute('class', 'hidden')
        user.setAttribute('class', 'py-7 mr-4 hidden md:block')
        language.setAttribute('class', 'hidden')
        learning.setAttribute('class', 'mx-2 text-sm hidden md:block hover:text-blue-800 py-7')
        bell.setAttribute('class', 'mx-2 py-7 hidden md:block')
        favorite.setAttribute('class', 'mx-2 py-7 hidden md:block')
        beforlogin.setAttribute('class', 'hidden')
        afterlogin.setAttribute('class', 'flex gap-2 m-4')
    }


    // -----  function for toggle on mobilemenu --------
    let afterhovermenu = document.getElementById("afterhovermenu")
    let cross = document.getElementById("cross")
    cross.addEventListener('click', () => {
        afterhovermenu.setAttribute('class', 'hidden')
    })

    let menuIcon = document.getElementById('menu-icon');
    menuIcon.onclick = showmenu;

    function showmenu() {
        afterhovermenu.setAttribute('class', 'flex md:hidden fixed w-full')
    }
}
