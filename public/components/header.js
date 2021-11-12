function navbar() {

    return `<!-- click on mobilemenu -->
    <div id="afterhovermenu" class="hidden">
        <div id="hovermenudiv" class="w-72 bg-white overflow-y-scroll" style="height: 630px;">
            <!-- sign in and sign up -->
            <div id="beforlogin" class="block">
                <a href="#" class="block m-4 text-indigo-700">log in</a>
                <a href="#" class="block m-4 text-indigo-700">Sign up</a>
            </div>
            <div id="afterlogin" class="hidden">
                <div class="bg-black rounded-full font-bold text-2xl text-white py-4 px-6">A</div>
                <div class="my-auto">
                    <a href="#" class="font-medium hover:text-blue-700">Avdhesh</a>
                    <a href="#" class="text-sm text-gray-500">stpaul886@gmail.com</a>
                </div>
            </div>
            <hr>
            <!-- others -->
            <div class="text-sm font-bold text-gray-600 ml-2 my-2">Most popular</div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow ml-2">Web Development</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow ml-2">Mobile Development</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow ml-2">Game Development</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow break-words ml-2">Enterpreneurship</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center hover:text-blue-800 my-4 cursor-pointer">
                <h1 class="flex-grow break-words ml-2">Bussiness Analytics & <br> Intelligence</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow break-words ml-2">Digital Marketing</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow break-words ml-2">Graphic Design & <br> Illustration</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow break-words ml-2">IT Certifications</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow break-words ml-2">Personal Transformation</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow break-words ml-2">All categories</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <hr>
            <div class="text-sm font-bold text-gray-600 ml-2 my-4">More from Udemy</div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow break-words ml-2">Udemy Bussiness</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow break-words ml-2">Get the app</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow break-words ml-2">Invite friends</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full break-all items-center my-4 cursor-pointer">
                <h1 class="flex-grow break-words ml-2">Help</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="h-10 ml-4 inline-flex items-center border border-black mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div class="mr-12 ml-2">English</div>
            </div>
            <!-- **** -->
        </div>
        <!-- ------------------------ -->
        <div id="cross" class="flex-grow  backdrop-filter backdrop-brightness-50 cursor-pointer">
            <div class="m-4 w-14  justify-items-center rounded-full  bg-white hover:bg-gray-200">
                <img src="https://www.shareicon.net/data/256x256/2015/12/02/681180_button_512x512.png" alt="">
            </div>
        </div>
    </div>
    <!--------------------------------------------- navbar ------------------------------------------------->
    <div class="flex justify-between items-center h-20 bg-white">
        <!-- mobilemenu -->
        <button id='menu-icon' class="mx-4 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <!-- logo -->
        <a href="home.html" class="ml-4 mx-2 min-w-max">
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="" width="91" height="34">
        </a>
        <!-- category -->
        <button id="cat" class="hidden md:block mx-2 py-8 text-sm hover:text-blue-800">
            <span class="">Categories</span>
        </button>
        <!-- input -->
        <div
            class="hidden md:flex flex-grow mx-2 border border-black bg-gray-50  rounded-full h-12 items-center min-w-max">
            <button class="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <input oninput="debounce(main,1500)" type="text" placeholder="Search for something" class="h-10 outline-none mx-4 w-full bg-transparent" id="courseData">
        </div>
        <!-- bussiness -->
        <button id="ubussi" class="mx-2 text-sm hidden xl:block hover:text-blue-800 py-7">
            <span>Udemy Bussiness</span>
        </button>
        <!-- teach -->
        <button id="teach" class="mx-2 text-sm hidden lg:block hover:text-blue-800 py-7">
            <span>Teach on Udemy</span>
        </button>
        <!-- my learning -->
        <button id="learning" class="hidden">
            <span>My Learning</span>
        </button>
        <!-- favoraite -->
        <button id="favorite" class="hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </button>
        <!-- cart -->
        <div>
            <!-- search botton on small screen -->
            <button class="mx-2 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <!-- cart button  -->
            <button id="cart" class="mx-2 py-7">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </button>
        </div>
        <!-- sign in -->
        <button id="signin" class="hidden md:block mx-2 text-sm border border-black px-3 font-semibold py-2 hover:bg-gray-100">Log
            in</button>
        <!-- bell -->
        <button id="bell" class="hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        </button>
        <!-- sign up -->
        <button id="signup"
            class="hidden md:block mx-2 text-sm border border-black bg-black text-white px-3 font-semibold py-2">Sign
            up</button>
        <!-- user -->
        <button id="user" class="hidden">
            <div class="bg-black rounded-full font-bold text-sm text-white py-1.5 px-3">A</div>
        </button>
        <!-- language -->
        <button id="language" class="hidden md:block mx-2 border border-black px-2 py-2 mr-4 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        </button>
    </div>
    <!------------------------------------------------------   after navbar  **** ----------------------------------->
    <div class="flex absolute z-40">
        <div id="onetwo" class="hidden z-40">
            <!-----------------------after hover on category --------------------->
            <div id="firstdiv" class="w-64 bg-white  border ">
                <!-- under the ****  first div  **** -->
                <!-- 1 item -->
                <div id="development" class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Development</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 2 item -->
                <div id="bussi" class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1  class="flex-grow">Bussiness</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 3 item -->
                <div id="fna" class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Finance & Accounting</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 4 item -->
                <div id="Itsoft" class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">IT & Softwere</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 5 item -->
                <div id="officeproductivity" class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Office Productivity</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 6 item -->
                <div id="personaldev" class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Personal Development</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 7 item -->
                <div id="design" class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Design</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 8 item -->
                <div id='marketing' class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Marketing</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 9 item -->
                <div id='lifestyle' class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Lifestyle</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 10 item -->
                <div id='photoandvideo' class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Photography & Video</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 11 item -->
                <div id='healthfitness' class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Health & fitness</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 12 item -->
                <div id='music' class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Music</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 13 item -->
                <div id='teachingandacademics' class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4 mb-12">
                    <h1 class="flex-grow">Teaching & Academics</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div id="secdiv" class="w-64 bg-white border  border-l-0">
                <!-- under the *****   second div  ******   -->
                <!-- 1 item -->
                <div class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Web Development</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 2 item -->
                <div class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Data Science</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 3 item -->
                <div id="mdev" class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Mobile Development</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 4 item -->
                <div class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Programming Launguages</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 5 item -->
                <div class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Game Development</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 6 item -->
                <div class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Database design</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 7 item -->
                <div class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Softwere Testing</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 8 item -->
                <div class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Softwere Engineering</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 9 item -->
                <div class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">Softwere Development Tools</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- 10 item -->
                <div class="flex text-sm items-center hover:text-blue-800 ml-2 mt-4">
                    <h1 class="flex-grow">No-Code Development</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <div id="thirdiv" class="w-64 bg-white hidden">
            <!-- under the third div -->
            <div class="mt-4 ml-2 text-sm font-semibold">Papular topics</div>
        </div>
    </div>
    <!-- search result -->
    <div class="w-2/4 h-3/5 max-h-80 overflow-hidden bg-white border absolute z-40 hidden" style="margin-left:15%;" id="ShowCoursesName"></div>
    <!-- ----------   after hover on bussiness   --------- -->
    <div id="bussiness" class="hidden" style="margin-left: 49%;">
        <h1 class="text-center m-3 font-bold text-xl leading-5">Get your team access to over 6,000 top Udemy courses,
            anytime, anywhere.</h1>
        <a href="#">
            <div class="text-center font-bold text-white bg-black m-4 py-3"> Try Udemy Bussiness</div>
        </a>
    </div>

    <!-- ----------   after hover on Teach on Udemy   --------- -->
    <div id="hoveronteach" class="hidden" style="margin-left: 57%;">
        <h1 class="text-center m-3 font-bold text-xl leading-5">Turn what you know into an opportunity and reach
            millions around the world.</h1>
        <a href="#">
            <div class="text-center font-bold text-white bg-black m-4 py-3"> Learn more</div>
        </a>
    </div>
    <!-- ----------   after hover on cart   --------- -->
    <div id="hovercart" class="hidden" style="margin-left: 72%;">
        <h1 class="text-center m-3 font-normal text-gray-400">Your cart is empty.</h1>
        <a href="#">
            <div class="text-center font-medium text-blue-700 m-4"> Keep shopping</div>
        </a>
    </div>
    <!-- ----------   after hover on my learning   --------- -->
    <div id="hoverlearning" class="hidden" style="margin-left: 64%;">
        <h1 class="text-center m-3 font-bold text-xl leading-5">Start learning from over 183,000 courses today.</h1>
        <a href="#">
            <div class="text-center font-bold border border-black bg-transparent m-4 py-3">Browse now</div>
        </a>
    </div>
    <!-- ----------   after hover on favorite   --------- -->
    <div id="hoverfavorite" class="hidden" style="margin-left: 70%;">
        <h1 class="text-center m-3 font-normal text-gray-400">Your wishlist is empty.</h1>
        <a href="#">
            <div class="text-center font-medium text-blue-700 m-4"> Explore courses</div>
        </a>
    </div>
    <!-- ----------   after hover on bell   --------- -->
    <div id="hoverbell" class="hidden" style="margin-left: 75%;">
        <div class="flex items-center justify-between">
            <h1 class="text-center m-3 font-bold text-xl leading-5">Notifications</h1>
            <a href="#">
                <div class="text-center font-medium text-blue-700 m-4">Settings</div>
            </a>
        </div>
        <h1 class="text-center m-3 font-normal text-gray-400">No notifications.</h1>
    </div>



    <!-- ----------   after hover on user   --------- -->
    <div id="hoveruser" class="hidden" style="margin-left: 80%;">
        <!-- user info -->
        <div class="flex gap-2 m-4">
            <div class="bg-black rounded-full font-bold text-2xl text-white py-4 px-6">A</div>
            <div class="my-auto">
                <a href="#" class="font-medium hover:text-blue-700">Avdhesh</a>
                <a href="#" class="text-sm text-gray-500">stpaul886@gmail.com</a>
            </div>
        </div>
        <hr>
        <!-- others -->
        <div class="m-4 text-gray-600 text-sm hover:text-blue-700"><a href="#">My Learning</a></div>
        <!-- cart -->
        <div class="flex justify-between m-4 text-gray-600">
            <a href="#" class="hover:text-blue-700 text-sm">My cart</a>
            <div class="px-2 py-0 rounded-full bg-purple-800 text-white">3</div>
        </div>
        <!--  -->
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Wishlist</a></div>
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Teach on Udemy</a></div>
        <hr>
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Notifications</a></div>
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Messages</a></div>
        <hr>
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Account Settings</a></div>
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Payment methods</a></div>
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Udemy credits</a></div>
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Purchase history</a></div>
        <hr>
        <!-- language -->
        <div class="flex justify-between m-4 text-gray-600">
            <a href="#" class="hover:text-blue-700 text-sm">Language</a>
            <div class="flex items-center">
                <a href="#" class="mx-1.5 hover:text-blue-700 text-sm">English</a>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            </div>
        </div>
        <hr>
        <!--  -->
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Public profile</a></div>
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Edit profile</a></div>
        <hr>
        <!--  -->
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Help</a></div>
        <div class="m-4 text-sm text-gray-600 hover:text-blue-700"><a href="#">Log out</a></div>

    </div>`
}


export default navbar;