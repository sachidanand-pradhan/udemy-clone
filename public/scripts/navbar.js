
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

    // after hover on ****   firstdiv > development   **** 
    let development = document.getElementById("development")
    development.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')
        //  after hover, efect on ------ thirddiv----
        sdiv1.addEventListener('mouseover', () => {
            thirdiv.innerText = null
            let tdiv = document.createElement("div")
            let popular = document.createElement('div')
            popular.innerText = "Popular topics"
            popular.setAttribute('class', 'mx-4 my-4 text-sm font-semibold')

            //----------//

            // 1 item
            let h1 = document.createElement("h1")
            h1.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h1.innerText = "Javascript"

            let h2 = document.createElement("h1")
            h2.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h2.innerText = "React"

            let h3 = document.createElement("h1")
            h3.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h3.innerText = "CSS"

            let h4 = document.createElement("h1")
            h4.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h4.innerText = "Angular"

            let h5 = document.createElement("h1")
            h5.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h5.innerText = "Node.js"

            let h6 = document.createElement("h1")
            h6.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h6.innerText = "PHP"

            let h7 = document.createElement("h1")
            h7.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h7.innerText = "HTML5"

            let h8 = document.createElement("h1")
            h8.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h8.innerText = "Django"

            tdiv.append(popular, h1, h2, h3, h4, h5, h6, h7, h8)
            thirdiv.append(tdiv)
        })
        // --------------------------------------
        let h1 = document.createElement("h1")
        h1.innerText = "Web Development"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')
        //  after hover, efect on ------ thirddiv----
        sdiv2.addEventListener('mouseover', () => {
            thirdiv.innerText = null
            let tdiv = document.createElement("div")
            let popular = document.createElement('div')
            popular.innerText = "Popular topics"
            popular.setAttribute('class', 'mx-4 my-4 text-sm font-semibold')

            //----------//

            // 1 item
            let h1 = document.createElement("h1")
            h1.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h1.innerText = "Python"

            let h2 = document.createElement("h1")
            h2.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h2.innerText = "Machine Learning"

            let h3 = document.createElement("h1")
            h3.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h3.innerText = "Deep Learning"

            let h4 = document.createElement("h1")
            h4.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h4.innerText = "Data Analysis"

            let h5 = document.createElement("h1")
            h5.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h5.innerText = "Artificial Intelligence"

            let h6 = document.createElement("h1")
            h6.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h6.innerText = "R(Programming Language)"

            let h7 = document.createElement("h1")
            h7.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h7.innerText = "Statistics"

            let h8 = document.createElement("h1")
            h8.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h8.innerText = "Nuetral Newtorks"

            tdiv.append(popular, h1, h2, h3, h4, h5, h6, h7, h8)
            thirdiv.append(tdiv)
        })
        // --------------------------------------

        let h2 = document.createElement("h1")
        h2.innerText = "Data Science"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')
        //  after hover, efect on ------ thirddiv----
        sdiv3.addEventListener('mouseover', () => {
            thirdiv.innerText = null
            let tdiv = document.createElement("div")
            let popular = document.createElement('div')
            popular.innerText = "Popular topics"
            popular.setAttribute('class', 'mx-4 my-4 text-sm font-semibold')

            //----------//

            // 1 item
            let h1 = document.createElement("h1")
            h1.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h1.innerText = "Google Flutter"

            let h2 = document.createElement("h1")
            h2.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h2.innerText = "Android Development"

            let h3 = document.createElement("h1")
            h3.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h3.innerText = "iOS Development"

            let h4 = document.createElement("h1")
            h4.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h4.innerText = "React Native"

            let h5 = document.createElement("h1")
            h5.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h5.innerText = "Swift"

            let h6 = document.createElement("h1")
            h6.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h6.innerText = "Dart(Programming Language)"

            let h7 = document.createElement("h1")
            h7.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h7.innerText = "Kotlin"

            let h8 = document.createElement("h1")
            h8.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h8.innerText = "SwiftUI"

            tdiv.append(popular, h1, h2, h3, h4, h5, h6, h7, h8)
            thirdiv.append(tdiv)
        })
        // --------------------------------------

        let h3 = document.createElement("h1")
        h3.innerText = "Mobile Development"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')
        //  after hover, efect on ------ thirddiv----
        sdiv4.addEventListener('mouseover', () => {
            thirdiv.innerText = null
            let tdiv = document.createElement("div")
            let popular = document.createElement('div')
            popular.innerText = "Popular topics"
            popular.setAttribute('class', 'mx-4 my-4 text-sm font-semibold')

            //----------//

            // 1 item
            let h1 = document.createElement("h1")
            h1.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h1.innerText = "Python"

            let h2 = document.createElement("h1")
            h2.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h2.innerText = "Java"

            let h3 = document.createElement("h1")
            h3.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h3.innerText = "C#"

            let h4 = document.createElement("h1")
            h4.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h4.innerText = "React"

            let h5 = document.createElement("h1")
            h5.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h5.innerText = "C++"

            let h6 = document.createElement("h1")
            h6.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h6.innerText = "C(Programming Language)"

            let h7 = document.createElement("h1")
            h7.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h7.innerText = "Javascript"

            let h8 = document.createElement("h1")
            h8.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h8.innerText = "Spring Framework"

            let h9 = document.createElement("h1")
            h9.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h9.innerText = "Go(programming language)"

            tdiv.append(popular, h1, h2, h3, h4, h5, h6, h7, h8, h9)
            thirdiv.append(tdiv)
        })
        // --------------------------------------

        let h4 = document.createElement("h1")
        h4.innerText = "Programming Languages"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')
        //  after hover, efect on ------ thirddiv----
        sdiv5.addEventListener('mouseover', () => {
            thirdiv.innerText = null
            let tdiv = document.createElement("div")
            let popular = document.createElement('div')
            popular.innerText = "Popular topics"
            popular.setAttribute('class', 'mx-4 my-4 text-sm font-semibold')

            //----------//

            // 1 item
            let h1 = document.createElement("h1")
            h1.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h1.innerText = "Unity"

            let h2 = document.createElement("h1")
            h2.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h2.innerText = "Unreal Engine"

            let h3 = document.createElement("h1")
            h3.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h3.innerText = "Game Development Fundamental"

            let h4 = document.createElement("h1")
            h4.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h4.innerText = "C#"

            let h5 = document.createElement("h1")
            h5.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h5.innerText = "C++"

            let h6 = document.createElement("h1")
            h6.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h6.innerText = "3D Game Development"

            let h7 = document.createElement("h1")
            h7.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h7.innerText = "2D Game Development"

            let h8 = document.createElement("h1")
            h8.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h8.innerText = "Unreal Engine Blueprints"

            let h9 = document.createElement("h1")
            h9.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h9.innerText = "Mobile Game Development"

            tdiv.append(popular, h1, h2, h3, h4, h5, h6, h7, h8, h9)
            thirdiv.append(tdiv)
        })
        // --------------------------------------

        let h5 = document.createElement("h1")
        h5.innerText = "Game Development"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')
        //  after hover, efect on ------ thirddiv----
        sdiv6.addEventListener('mouseover', () => {
            thirdiv.innerText = null
            let tdiv = document.createElement("div")
            let popular = document.createElement('div')
            popular.innerText = "Popular topics"
            popular.setAttribute('class', 'mx-4 my-4 text-sm font-semibold')

            //----------//

            // 1 item
            let h1 = document.createElement("h1")
            h1.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h1.innerText = "SQL"

            let h2 = document.createElement("h1")
            h2.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h2.innerText = "MySQL"

            let h3 = document.createElement("h1")
            h3.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h3.innerText = "Oracle SQL"

            let h4 = document.createElement("h1")
            h4.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h4.innerText = "MongoDB"

            let h5 = document.createElement("h1")
            h5.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h5.innerText = "Apache Kafka"

            let h6 = document.createElement("h1")
            h6.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h6.innerText = "Database Programming"

            let h7 = document.createElement("h1")
            h7.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h7.innerText = "SQL Server"

            let h8 = document.createElement("h1")
            h8.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h8.innerText = "Oracle Certification"

            let h9 = document.createElement("h1")
            h9.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h9.innerText = "Database Management"

            tdiv.append(popular, h1, h2, h3, h4, h5, h6, h7, h8, h9)
            thirdiv.append(tdiv)
        })
        // --------------------------------------

        let h6 = document.createElement("h1")
        h6.innerText = "Database design"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

        // 7 item
        let sdiv7 = document.createElement("div")
        sdiv7.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')
        //  after hover, efect on ------ thirddiv----
        sdiv7.addEventListener('mouseover', () => {
            thirdiv.innerText = null
            let tdiv = document.createElement("div")
            let popular = document.createElement('div')
            popular.innerText = "Popular topics"
            popular.setAttribute('class', 'mx-4 my-4 text-sm font-semibold')

            //----------//

            // 1 item
            let h1 = document.createElement("h1")
            h1.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h1.innerText = "Selenium WebDriver"

            let h2 = document.createElement("h1")
            h2.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h2.innerText = "Java"

            let h3 = document.createElement("h1")
            h3.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h3.innerText = "Selenium Testing Framework"

            let h4 = document.createElement("h1")
            h4.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h4.innerText = "Automation Testing"

            let h5 = document.createElement("h1")
            h5.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h5.innerText = "API Testing"

            let h6 = document.createElement("h1")
            h6.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h6.innerText = "Postman"

            let h7 = document.createElement("h1")
            h7.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h7.innerText = "Cypress.io"

            let h8 = document.createElement("h1")
            h8.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h8.innerText = "REST Assured"

            tdiv.append(popular, h1, h2, h3, h4, h5, h6, h7, h8)
            thirdiv.append(tdiv)
        })
        // --------------------------------------

        let h7 = document.createElement("h1")
        h7.innerText = "Software Testing"

        let i7 = document.createElement("img")
        i7.setAttribute('class', 'w-2 h-2')
        i7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv7.append(h7, i7)
        secdiv.append(sdiv7)

        // 8 item
        let sdiv8 = document.createElement("div")
        sdiv8.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')
        //  after hover, efect on ------ thirddiv----
        sdiv8.addEventListener('mouseover', () => {
            thirdiv.innerText = null
            let tdiv = document.createElement("div")
            let popular = document.createElement('div')
            popular.innerText = "Popular topics"
            popular.setAttribute('class', 'mx-4 my-4 text-sm font-semibold')

            //----------//

            // 1 item
            let h1 = document.createElement("h1")
            h1.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h1.innerText = "Data Structures"

            let h2 = document.createElement("h1")
            h2.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h2.innerText = "Coding Interviews"

            let h3 = document.createElement("h1")
            h3.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h3.innerText = "Algorithims"

            let h4 = document.createElement("h1")
            h4.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h4.innerText = "Kubernetes"

            let h5 = document.createElement("h1")
            h5.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h5.innerText = "Microservices"

            let h6 = document.createElement("h1")
            h6.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h6.innerText = "Certified Kubernetes Application Developer (CKAD)"

            let h7 = document.createElement("h1")
            h7.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h7.innerText = "Python"

            let h8 = document.createElement("h1")
            h8.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h8.innerText = "Apache Airflow"

            let h9 = document.createElement("h1")
            h9.setAttribute('class', 'mx-4 my-4 text-sm hover:text-indigo-700 cursor-pointer')
            h9.innerText = "Spring Boot"

            tdiv.append(popular, h1, h2, h3, h4, h5, h6, h7, h8, h9)
            thirdiv.append(tdiv)
        })
        // --------------------------------------

        let h8 = document.createElement("h1")
        h8.innerText = "Software Engineering"

        let i8 = document.createElement("img")
        i8.setAttribute('class', 'w-2 h-2')
        i8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv8.append(h8, i8)
        secdiv.append(sdiv8)

        // 9 item
        let sdiv9 = document.createElement("div")
        sdiv9.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h9 = document.createElement("h1")
        h9.innerText = "Software Development Tools"

        let i9 = document.createElement("img")
        i9.setAttribute('class', 'w-2 h-2')
        i9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv9.append(h9, i9)
        secdiv.append(sdiv9)

        // 10 item
        let sdiv10 = document.createElement("div")
        sdiv10.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h10 = document.createElement("h1")
        h10.innerText = "No-Code Development"

        let i10 = document.createElement("img")
        i10.setAttribute('class', 'w-2 h-2')
        i10.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv10.append(h10, i10)
        secdiv.append(sdiv10)
    })


    // after hover on ****   firstdiv > bussiness   **** 

    let bussi = document.getElementById("bussi")
    bussi.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "Entrepreneurship"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "Communication"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Management"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "Sales"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Bussiness Strategy"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h6 = document.createElement("h1")
        h6.innerText = "Operations"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

        // 7 item
        let sdiv7 = document.createElement("div")
        sdiv7.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h7 = document.createElement("h1")
        h7.innerText = "Project Management"

        let i7 = document.createElement("img")
        i7.setAttribute('class', 'w-2 h-2')
        i7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv7.append(h7, i7)
        secdiv.append(sdiv7)

        // 8 item
        let sdiv8 = document.createElement("div")
        sdiv8.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h8 = document.createElement("h1")
        h8.innerText = "Bussiness Law"

        let i8 = document.createElement("img")
        i8.setAttribute('class', 'w-2 h-2')
        i8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv8.append(h8, i8)
        secdiv.append(sdiv8)

        // 9 item
        let sdiv9 = document.createElement("div")
        sdiv9.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h9 = document.createElement("h1")
        h9.innerText = "Bussiness Analytics & Intelligence"

        let i9 = document.createElement("img")
        i9.setAttribute('class', 'w-2 h-2')
        i9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv9.append(h9, i9)
        secdiv.append(sdiv9)

        // 10 item
        let sdiv10 = document.createElement("div")
        sdiv10.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h10 = document.createElement("h1")
        h10.innerText = "Human Resources"

        let i10 = document.createElement("img")
        i10.setAttribute('class', 'w-2 h-2')
        i10.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv10.append(h10, i10)
        secdiv.append(sdiv10)

        // 11 item
        let sdiv11 = document.createElement("div")
        sdiv11.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h11 = document.createElement("h1")
        h11.innerText = "Industry"

        let i11 = document.createElement("img")
        i11.setAttribute('class', 'w-2 h-2')
        i11.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv11.append(h11, i11)
        secdiv.append(sdiv11)

        // 12 item
        let sdiv12 = document.createElement("div")
        sdiv12.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h12 = document.createElement("h1")
        h12.innerText = "E-Commerce"

        let i12 = document.createElement("img")
        i12.setAttribute('class', 'w-2 h-2')
        i12.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv12.append(h12, i12)
        secdiv.append(sdiv12)

        // 13 item 
        let sdiv13 = document.createElement("div")
        sdiv13.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h13 = document.createElement("h1")
        h13.innerText = "Media"

        let i13 = document.createElement("img")
        i13.setAttribute('class', 'w-2 h-2')
        i13.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv13.append(h13, i13)
        secdiv.append(sdiv13)

        // 14 item
        let sdiv14 = document.createElement("div")
        sdiv14.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h14 = document.createElement("h1")
        h14.innerText = "Real State"

        let i14 = document.createElement("img")
        i14.setAttribute('class', 'w-2 h-2')
        i14.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv14.append(h14, i14)
        secdiv.append(sdiv14)

        // 15 item
        let sdiv15 = document.createElement("div")
        sdiv15.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h15 = document.createElement("h1")
        h15.innerText = "Other Bussiness"

        let i15 = document.createElement("img")
        i15.setAttribute('class', 'w-2 h-2')
        i15.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv15.append(h15, i15)
        secdiv.append(sdiv15)

    })

    // after hover on ****   firstdiv > Finanace & Accounting   **** 
    let fna = document.getElementById("fna")
    fna.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "Accountin & bookkepping"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "Compliance"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Cryptocurrency & Blockchain"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "Economics"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Finance"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h6 = document.createElement("h1")
        h6.innerText = "Finance Cert & Exap Prep"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

        // 7 item
        let sdiv7 = document.createElement("div")
        sdiv7.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h7 = document.createElement("h1")
        h7.innerText = "Financial Modeling & Analysis"

        let i7 = document.createElement("img")
        i7.setAttribute('class', 'w-2 h-2')
        i7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv7.append(h7, i7)
        secdiv.append(sdiv7)

        // 8 item
        let sdiv8 = document.createElement("div")
        sdiv8.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h8 = document.createElement("h1")
        h8.innerText = "Investing & Trading"

        let i8 = document.createElement("img")
        i8.setAttribute('class', 'w-2 h-2')
        i8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv8.append(h8, i8)
        secdiv.append(sdiv8)

        // 9 item
        let sdiv9 = document.createElement("div")
        sdiv9.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h9 = document.createElement("h1")
        h9.innerText = "Money Management Tools"

        let i9 = document.createElement("img")
        i9.setAttribute('class', 'w-2 h-2')
        i9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv9.append(h9, i9)
        secdiv.append(sdiv9)

        // 10 item
        let sdiv10 = document.createElement("div")
        sdiv10.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h10 = document.createElement("h1")
        h10.innerText = "Taxes"

        let i10 = document.createElement("img")
        i10.setAttribute('class', 'w-2 h-2')
        i10.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv10.append(h10, i10)
        secdiv.append(sdiv10)

        // 11 item
        let sdiv11 = document.createElement("div")
        sdiv11.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h11 = document.createElement("h1")
        h11.innerText = "Other Finance & Accounting"

        let i11 = document.createElement("img")
        i11.setAttribute('class', 'w-2 h-2')
        i11.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv11.append(h11, i11)
        secdiv.append(sdiv11)
    })

    // after hover on ****   firstdiv > It & Software  **** 
    let Itsoft = document.getElementById("Itsoft")
    Itsoft.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "IT Certifications"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "Network & Security"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Hardware"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "Operating System & Servers"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Other IT & Software"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

    });

    // after hover on ****   firstdiv > Personal Development   **** 

    let personaldev = document.getElementById("personaldev")
    personaldev.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "Personal Transformation"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "Personal Productivity"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Leadership"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "Career Development"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Parenting & Relationships"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h6 = document.createElement("h1")
        h6.innerText = "Happyness"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

        // 7 item
        let sdiv7 = document.createElement("div")
        sdiv7.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h7 = document.createElement("h1")
        h7.innerText = "Esoteric Practices"

        let i7 = document.createElement("img")
        i7.setAttribute('class', 'w-2 h-2')
        i7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv7.append(h7, i7)
        secdiv.append(sdiv7)

        // 8 item
        let sdiv8 = document.createElement("div")
        sdiv8.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h8 = document.createElement("h1")
        h8.innerText = "Religion & Sprituality"

        let i8 = document.createElement("img")
        i8.setAttribute('class', 'w-2 h-2')
        i8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv8.append(h8, i8)
        secdiv.append(sdiv8)

        // 9 item
        let sdiv9 = document.createElement("div")
        sdiv9.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h9 = document.createElement("h1")
        h9.innerText = "Personal Brand Building"

        let i9 = document.createElement("img")
        i9.setAttribute('class', 'w-2 h-2')
        i9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv9.append(h9, i9)
        secdiv.append(sdiv9)

        // 10 item
        let sdiv10 = document.createElement("div")
        sdiv10.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h10 = document.createElement("h1")
        h10.innerText = "Creativity"

        let i10 = document.createElement("img")
        i10.setAttribute('class', 'w-2 h-2')
        i10.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv10.append(h10, i10)
        secdiv.append(sdiv10)

        // 11 item
        let sdiv11 = document.createElement("div")
        sdiv11.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h11 = document.createElement("h1")
        h11.innerText = "Influence"

        let i11 = document.createElement("img")
        i11.setAttribute('class', 'w-2 h-2')
        i11.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv11.append(h11, i11)
        secdiv.append(sdiv11)

        // 12 item
        let sdiv12 = document.createElement("div")
        sdiv12.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h12 = document.createElement("h1")
        h12.innerText = "Self Steem & Confidence"

        let i12 = document.createElement("img")
        i12.setAttribute('class', 'w-2 h-2')
        i12.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv12.append(h12, i12)
        secdiv.append(sdiv12)

        // 13 item 
        let sdiv13 = document.createElement("div")
        sdiv13.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h13 = document.createElement("h1")
        h13.innerText = "Stress Management"

        let i13 = document.createElement("img")
        i13.setAttribute('class', 'w-2 h-2')
        i13.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv13.append(h13, i13)
        secdiv.append(sdiv13)

        // 14 item
        let sdiv14 = document.createElement("div")
        sdiv14.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h14 = document.createElement("h1")
        h14.innerText = "Memory & Study Skills"

        let i14 = document.createElement("img")
        i14.setAttribute('class', 'w-2 h-2')
        i14.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv14.append(h14, i14)
        secdiv.append(sdiv14)

        // 15 item
        let sdiv15 = document.createElement("div")
        sdiv15.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h15 = document.createElement("h1")
        h15.innerText = "Motivation"

        let i15 = document.createElement("img")
        i15.setAttribute('class', 'w-2 h-2')
        i15.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv15.append(h15, i15)
        secdiv.append(sdiv15)

    })

    // after hover on ****   firstdiv > design   **** 

    let design = document.getElementById("design")
    design.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "Web Design"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "Graphic Design & Illustration"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Design Tools"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "User Experience Design"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Game Design"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h6 = document.createElement("h1")
        h6.innerText = "3D & Animation"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

        // 7 item
        let sdiv7 = document.createElement("div")
        sdiv7.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h7 = document.createElement("h1")
        h7.innerText = "Fashion Design"

        let i7 = document.createElement("img")
        i7.setAttribute('class', 'w-2 h-2')
        i7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv7.append(h7, i7)
        secdiv.append(sdiv7)

        // 8 item
        let sdiv8 = document.createElement("div")
        sdiv8.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h8 = document.createElement("h1")
        h8.innerText = "Architectural Design"

        let i8 = document.createElement("img")
        i8.setAttribute('class', 'w-2 h-2')
        i8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv8.append(h8, i8)
        secdiv.append(sdiv8)

        // 9 item
        let sdiv9 = document.createElement("div")
        sdiv9.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h9 = document.createElement("h1")
        h9.innerText = "Interior Design"

        let i9 = document.createElement("img")
        i9.setAttribute('class', 'w-2 h-2')
        i9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv9.append(h9, i9)
        secdiv.append(sdiv9)

        // 10 item
        let sdiv10 = document.createElement("div")
        sdiv10.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h10 = document.createElement("h1")
        h10.innerText = "Other Design"

        let i10 = document.createElement("img")
        i10.setAttribute('class', 'w-2 h-2')
        i10.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv10.append(h10, i10)
        secdiv.append(sdiv10)

    });

    // after hover on ****   firstdiv > Marketing   **** 

    let marketing = document.getElementById("marketing")
    marketing.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "Digital Marketing"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "Search Engine Optimization"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Social Media Marketing"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "Branding"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Marketing Fundamendal"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h6 = document.createElement("h1")
        h6.innerText = "Marketing Analytics & Automation"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

        // 7 item
        let sdiv7 = document.createElement("div")
        sdiv7.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h7 = document.createElement("h1")
        h7.innerText = "Public Relation"

        let i7 = document.createElement("img")
        i7.setAttribute('class', 'w-2 h-2')
        i7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv7.append(h7, i7)
        secdiv.append(sdiv7)

        // 8 item
        let sdiv8 = document.createElement("div")
        sdiv8.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h8 = document.createElement("h1")
        h8.innerText = "Paid Advertising"

        let i8 = document.createElement("img")
        i8.setAttribute('class', 'w-2 h-2')
        i8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv8.append(h8, i8)
        secdiv.append(sdiv8)

        // 9 item
        let sdiv9 = document.createElement("div")
        sdiv9.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h9 = document.createElement("h1")
        h9.innerText = "Video & Mobile Marketing"

        let i9 = document.createElement("img")
        i9.setAttribute('class', 'w-2 h-2')
        i9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv9.append(h9, i9)
        secdiv.append(sdiv9)

        // 10 item
        let sdiv10 = document.createElement("div")
        sdiv10.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h10 = document.createElement("h1")
        h10.innerText = "Content Marketing"

        let i10 = document.createElement("img")
        i10.setAttribute('class', 'w-2 h-2')
        i10.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv10.append(h10, i10)
        secdiv.append(sdiv10)

        // 11 item
        let sdiv11 = document.createElement("div")
        sdiv11.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h11 = document.createElement("h1")
        h11.innerText = "Growth Hacking"

        let i11 = document.createElement("img")
        i11.setAttribute('class', 'w-2 h-2')
        i11.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv11.append(h11, i11)
        secdiv.append(sdiv11)

        // 12 item
        let sdiv12 = document.createElement("div")
        sdiv12.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h12 = document.createElement("h1")
        h12.innerText = "Affiliate Marketing"

        let i12 = document.createElement("img")
        i12.setAttribute('class', 'w-2 h-2')
        i12.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv12.append(h12, i12)
        secdiv.append(sdiv12)

        // 13 item 
        let sdiv13 = document.createElement("div")
        sdiv13.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h13 = document.createElement("h1")
        h13.innerText = "Product Marketing"

        let i13 = document.createElement("img")
        i13.setAttribute('class', 'w-2 h-2')
        i13.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv13.append(h13, i13)
        secdiv.append(sdiv13)

        // 14 item
        let sdiv14 = document.createElement("div")
        sdiv14.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h14 = document.createElement("h1")
        h14.innerText = "Other Marketing"

        let i14 = document.createElement("img")
        i14.setAttribute('class', 'w-2 h-2')
        i14.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv14.append(h14, i14)
        secdiv.append(sdiv14)
    })

    // after hover on ****   firstdiv > lifestyle   **** 

    let lifestyle = document.getElementById("lifestyle")
    lifestyle.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "Arts & Crafts"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "Beauty & Makeup"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Esoteric Practices"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "Food & Beverage"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Gaming"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h6 = document.createElement("h1")
        h6.innerText = "Home Improvement & Gardening"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

        // 7 item
        let sdiv7 = document.createElement("div")
        sdiv7.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h7 = document.createElement("h1")
        h7.innerText = "Pet Care & Training"

        let i7 = document.createElement("img")
        i7.setAttribute('class', 'w-2 h-2')
        i7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv7.append(h7, i7)
        secdiv.append(sdiv7)

        // 8 item
        let sdiv8 = document.createElement("div")
        sdiv8.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h8 = document.createElement("h1")
        h8.innerText = "Travel"

        let i8 = document.createElement("img")
        i8.setAttribute('class', 'w-2 h-2')
        i8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv8.append(h8, i8)
        secdiv.append(sdiv8)

        // 9 item
        let sdiv9 = document.createElement("div")
        sdiv9.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h9 = document.createElement("h1")
        h9.innerText = "Other Lifestyle"

        let i9 = document.createElement("img")
        i9.setAttribute('class', 'w-2 h-2')
        i9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv9.append(h9, i9)
        secdiv.append(sdiv9)

    });

    // after hover on ****   firstdiv > photography and video   **** 

    let photoandvideo = document.getElementById("photoandvideo")
    photoandvideo.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "Digital Videography"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "Photography"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Portait Photography"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "Photography tools"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Commercial Photography"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h6 = document.createElement("h1")
        h6.innerText = "Video Design"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

        // 7 item
        let sdiv7 = document.createElement("div")
        sdiv7.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h7 = document.createElement("h1")
        h7.innerText = "Other Photography & Video"

        let i7 = document.createElement("img")
        i7.setAttribute('class', 'w-2 h-2')
        i7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv7.append(h7, i7)
        secdiv.append(sdiv7)

    });

    // after hover on ****   firstdiv > Health & fitness   **** 

    let healthfitness = document.getElementById("healthfitness")
    healthfitness.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "Fitness"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "General Health"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Sports"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "Nurition & Diet"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Yoga"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h6 = document.createElement("h1")
        h6.innerText = "Mental Health"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

        // 7 item
        let sdiv7 = document.createElement("div")
        sdiv7.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h7 = document.createElement("h1")
        h7.innerText = "Martial Arts & Self Defence"

        let i7 = document.createElement("img")
        i7.setAttribute('class', 'w-2 h-2')
        i7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv7.append(h7, i7)
        secdiv.append(sdiv7)

        // 8 item
        let sdiv8 = document.createElement("div")
        sdiv8.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h8 = document.createElement("h1")
        h8.innerText = "Safety & First Aid"

        let i8 = document.createElement("img")
        i8.setAttribute('class', 'w-2 h-2')
        i8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv8.append(h8, i8)
        secdiv.append(sdiv8)

        // 9 item
        let sdiv9 = document.createElement("div")
        sdiv9.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h9 = document.createElement("h1")
        h9.innerText = "Dance"

        let i9 = document.createElement("img")
        i9.setAttribute('class', 'w-2 h-2')
        i9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv9.append(h9, i9)
        secdiv.append(sdiv9)

        // 10 item
        let sdiv10 = document.createElement("div")
        sdiv10.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h10 = document.createElement("h1")
        h10.innerText = "Meditation"

        let i10 = document.createElement("img")
        i10.setAttribute('class', 'w-2 h-2')
        i10.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv10.append(h10, i10)
        secdiv.append(sdiv10)

        // 11 item
        let sdiv11 = document.createElement("div")
        sdiv11.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h11 = document.createElement("h1")
        h11.innerText = "Other Health & Fitness"

        let i11 = document.createElement("img")
        i11.setAttribute('class', 'w-2 h-2')
        i11.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv11.append(h11, i11)
        secdiv.append(sdiv11)
    });

    // after hover on ****   firstdiv > Music   **** 

    let music = document.getElementById("music")
    music.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "Instruments"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "Music Production"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Music Fundamentals"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "Vocals"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Music Techniques"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h6 = document.createElement("h1")
        h6.innerText = "Music Softwere"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

        // 7 item
        let sdiv7 = document.createElement("div")
        sdiv7.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h7 = document.createElement("h1")
        h7.innerText = "Other Music"

        let i7 = document.createElement("img")
        i7.setAttribute('class', 'w-2 h-2')
        i7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv7.append(h7, i7)
        secdiv.append(sdiv7)
    });

    // after hover on ****   firstdiv > Teaching & Academics  **** 

    let teachingandacademics = document.getElementById("teachingandacademics")
    teachingandacademics.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "Engineering"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "Humanities"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Math"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "Science"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Online Education"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h6 = document.createElement("h1")
        h6.innerText = "Social Science"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

        // 7 item
        let sdiv7 = document.createElement("div")
        sdiv7.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h7 = document.createElement("h1")
        h7.innerText = "Language Learning"

        let i7 = document.createElement("img")
        i7.setAttribute('class', 'w-2 h-2')
        i7.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv7.append(h7, i7)
        secdiv.append(sdiv7)

        // 8 item
        let sdiv8 = document.createElement("div")
        sdiv8.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h8 = document.createElement("h1")
        h8.innerText = "Teacher Training"

        let i8 = document.createElement("img")
        i8.setAttribute('class', 'w-2 h-2')
        i8.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv8.append(h8, i8)
        secdiv.append(sdiv8)

        // 9 item
        let sdiv9 = document.createElement("div")
        sdiv9.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h9 = document.createElement("h1")
        h9.innerText = "Test Prep"

        let i9 = document.createElement("img")
        i9.setAttribute('class', 'w-2 h-2')
        i9.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv9.append(h9, i9)
        secdiv.append(sdiv9)

        // 10 item
        let sdiv10 = document.createElement("div")
        sdiv10.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h10 = document.createElement("h1")
        h10.innerText = "Other Teachings & Academics"

        let i10 = document.createElement("img")
        i10.setAttribute('class', 'w-2 h-2')
        i10.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv10.append(h10, i10)
        secdiv.append(sdiv10)

    });

    // // after hover on ****   firstdiv > Office productivity  **** 

    let officeproductivity = document.getElementById("officeproductivity")
    officeproductivity.addEventListener('mouseover', () => {
        secdiv.innerText = null
        // 1 item
        let sdiv1 = document.createElement("div")
        sdiv1.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h1 = document.createElement("h1")
        h1.innerText = "Microsoft"

        let i1 = document.createElement("img")
        i1.setAttribute('class', 'w-2 h-2')
        i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv1.append(h1, i1)
        secdiv.append(sdiv1)

        // 2 item
        let sdiv2 = document.createElement("div")
        sdiv2.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h2 = document.createElement("h1")
        h2.innerText = "Apple"

        let i2nd = document.createElement("img")
        i2nd.setAttribute('class', 'w-2 h-2')
        i2nd.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv2.append(h2, i2nd)
        secdiv.append(sdiv2)

        //3 item
        let sdiv3 = document.createElement("div")
        sdiv3.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h3 = document.createElement("h1")
        h3.innerText = "Google"

        let i3 = document.createElement("img")
        i3.setAttribute('class', 'w-2 h-2')
        i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv3.append(h3, i3)
        secdiv.append(sdiv3)

        // 4 item
        let sdiv4 = document.createElement("div")
        sdiv4.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h4 = document.createElement("h1")
        h4.innerText = "SAP"

        let i4 = document.createElement("img")
        i4.setAttribute('class', 'w-2 h-2')
        i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv4.append(h4, i4)
        secdiv.append(sdiv4)

        // 5 item
        let sdiv5 = document.createElement("div")
        sdiv5.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h5 = document.createElement("h1")
        h5.innerText = "Oracle"

        let i5 = document.createElement("img")
        i5.setAttribute('class', 'w-2 h-2')
        i5.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv5.append(h5, i5)
        secdiv.append(sdiv5)

        // 6 item
        let sdiv6 = document.createElement("div")
        sdiv6.setAttribute('class', 'flex justify-between items-center mx-2 my-4 text-sm hover:text-indigo-700 cursor-pointer')

        let h6 = document.createElement("h1")
        h6.innerText = "Other Office Productivity"

        let i6 = document.createElement("img")
        i6.setAttribute('class', 'w-2 h-2')
        i6.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Psy7Qfe0vInE8c2tai5SPQnyQa66USsJYj67ltC-nl03-SUvuyipAlzkS0f2KOVUsxI&usqp=CAU"

        sdiv6.append(h6, i6)
        secdiv.append(sdiv6)

    });


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
    let username = document.getElementById("username")
    let userkanaam = document.getElementById("userkanaam")
    let useremail = document.getElementById("useremail")
    let mobusername = document.getElementById("mobusername")
    let mobuserkanaam = document.getElementById("mobuserkanaam")
    let mobuseremail = document.getElementById("mobuseremail")
    let pahlaleter = document.getElementById("pahlaleter")
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
    let dt = JSON.parse(localStorage.getItem("check"));
    if(dt[1] === 'logedin'){
        done()
        change()
    }
     console.log(dt);
    function change(){
        let u = JSON.parse(localStorage.getItem("udemyUsers"))
        u.forEach((e) => {
            if(e.email === dt[0]){
                let A = e.name[0].toUpperCase()
                pahlaleter.innerText=A
                username.innerText=A
                useremail.innerText=e.email
                userkanaam.innerText=e.name
                mobusername.innerText=A
                mobuserkanaam.innerText=e.name
                mobuseremail.innerText=e.email
            }
        });
    }

    // delete function 

    function itemdelete(){
        localStorage.removeItem("check")
    }

    // ----  for log out -----

    let logout = document.getElementById("logout")
    logout.addEventListener('click',()=>{
        ok()
        itemdelete()
    })

    // links for sign in and sign up 

    signin.addEventListener('click',()=>{
        window.location.href="login.html"
    })
    // ------- //
    signup.addEventListener('click',()=>{
        window.location.href="signup.html"
    })

    //    --------------------------------------------------- //


    // -----  function for toggle on mobilemenu --------
    // let afterhovermenu = document.getElementById("afterhovermenu")
    // let cross = document.getElementById("cross")
    // cross.addEventListener('click', () => {
    //     afterhovermenu.setAttribute('class', 'hidden')
    // })

    // let menuIcon = document.getElementById('menu-icon');
    // menuIcon.onclick = showmenu;

    // function showmenu() {
    //     afterhovermenu.setAttribute('class', 'flex md:hidden fixed w-full')
    // }

        let afterhovermenu = document.getElementById("afterhovermenu");
    let cross = document.getElementById("cross")
    cross.addEventListener('click', () => {
        afterhovermenu.setAttribute('class', 'hidden')
    })

    let menuBtn = document.getElementById('menu-icon');
    menuBtn.onclick = showmenu;

    function showmenu() {
        afterhovermenu.setAttribute('class', 'flex md:hidden fixed w-full');
    }
}


// search functon start
var timerId;

async function searchMovies(course_name) {
    try {

        let res = await fetch(`http://localhost:5000/api/${course_name}`);

        let data = await res.json();
        console.log("Data:--", data);
        return data;


    }
    catch (e) {
        console.log(e)
    }

}

function appendMovies(course) {
    // console.log("-------",course[0].name);
    let ShowCoursesName = document.getElementById("ShowCoursesName");
    ShowCoursesName.style.display = "block";
    if (course === undefined) {
        ShowCoursesName.innerHTML = null;
        p = document.createElement("p");
        p.innerText = "course not available!";
        return false;
    }else{
        p = document.createElement("p");
        p.innerText ="✔ "+ course[0].name;
        console.log(course[0].name,"name---");
        p.setAttribute('class','ml-4 mt-2');
        ShowCoursesName.append(p);
        p.addEventListener('click', () => {
            dataStored(course);
        });
    }
    // ShowCoursesName.innerHTML = null;
    // console.log("datafetch", course);
    // course.forEach(function (el) {
    //     // movies_div.style.display = "block";
    //     p = document.createElement("p");
    //     p.innerText = el[0].name;
    //     console.log(el[0].name,"name---");
    //     ShowCoursesName.append(p);
    // });

}

async function main() {
    let name = document.getElementById("courseData").value;
    // console.log("coursename", name);


    if (name.length < 3) {
        return false;
    }

    let res = await searchMovies(name.toLowerCase());

    let course_data = res;

    if(course_data.length === undefined){
        alert("courses not available!")
    }
    // console.log("datas--:::::", course_data);

    appendMovies(course_data);

    // console.log(res)
}

function debounce(func, delay) {
    if (timerId) {
        clearTimeout(timerId)
    }

    timerId = setTimeout(function () {
        func();
    }, delay);
}



function dataStored(course){
    console.log("00000",course);
    if (localStorage.getItem("searchData") == null) {
        localStorage.setItem("searchData", JSON.stringify([]));
    }
    let allData = JSON.parse(localStorage.getItem("searchData"));
    allData.push(course);
    localStorage.setItem("searchData", JSON.stringify(allData));
    let ShowCoursesName = document.getElementById("ShowCoursesName");
    ShowCoursesName.style.display = "none";
    window.location.href = "afterSearchShowCoursePage.html";
}


function cartPage(){
    window.location.href = "cartPage.html";
}