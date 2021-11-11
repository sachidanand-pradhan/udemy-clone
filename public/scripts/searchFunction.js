async function getData() {
    let res = await fetch(`http://localhost:5000/api/javascript`);
    let data = await res.json();
    console.log("data:------", data);
    // console.log("data:",data[0].include);
    add(data);

}
getData();

function add(data) {
    // d.innerText = null;
    let d = document.getElementById("data");
    d.innerHTML = null;
    data.forEach((el) => {
        // console.log(el);
        let div = document.createElement("div");
        div.setAttribute('class', 'flex mt-2 border')

        let left = document.createElement("div");
        let mid = document.createElement("div");
        let right = document.createElement("div");


        left.style.width = "30%";
        // left.style.border = "2px solid black";
        left.style.marginLeft = "5px";

        mid.style.width = "60%";
        mid.style.marginLeft = "5px";
        // mid.style.border = "2px solid black";


        right.style.width = "6%";
        right.style.margin = "5px";
        // right.style.border = "2px solid black";

        let img = document.createElement("img");
        img.src = el.image;
        left.append(img);
        img.style.width = "100%";

        let p = document.createElement("p");
        p.innerText = el.name;
        p.setAttribute('class', 'font-bold');

        let title = document.createElement("p");
        title.innerText = el.title;
        title.setAttribute('class', 'lg:flex hidden');

        let author = document.createElement("p");
        author.innerText = el.author;

        let rating = document.createElement("p");
        rating.innerText = el.rating + " ⭐⭐⭐⭐⭐";

        mid.append(p, title, author, rating);


        let price = document.createElement("p");
        price.innerText = "₹ " + el.price;
        price.setAttribute('class', 'font-bold');
        let oldprice = document.createElement("p");
        // text-decoration: line-through;
        oldprice.innerText = "₹ " + el.oldprice;
        oldprice.setAttribute('class', 'line-through');

        right.append(price, oldprice);

        div.append(left, mid, right);
        // div.style.marginTop ="10px";
        // console.log(el.learn);


        div.addEventListener('click', () => {
            dataStored(el);
        });

        // learn


        div.addEventListener('mouseover', () => {
            // toggleDiv.setAttribute('class', 'ml-28');
            // divShow(el.learn);

        })
        div.addEventListener('mouseout', () => {
            // toggleDiv.setAttribute('class', 'hidden');
        })

        d.append(div);
    })
}

// ⭐⭐⭐⭐⭐

var c = 0;

function showDiv() {
    let listOfCourses = document.getElementById("listOfCourses");
    if (c === 0) {
        listOfCourses.style.display = "block";
        c++;
    } else if (c === 1) {
        listOfCourses.style.display = "none";
        c--;
    }
}
var c = 0;

function showDiv() {
    let listOfCourses = document.getElementById("listOfCourses");
    if (c === 0) {
        listOfCourses.style.display = "block";
        c++;
    } else if (c === 1) {
        listOfCourses.style.display = "none";
        c--;
    }
}
var c1 = 0;

function showDiv1() {
    let listOfCourses1 = document.getElementById("listOfCourses1");
    if (c1 === 0) {
        listOfCourses1.style.display = "block";
        c1++;
    } else if (c1 === 1) {
        listOfCourses1.style.display = "none";
        c1--;
    }
}
var c2 = 0;

function showDiv2() {
    let listOfCourses2 = document.getElementById("listOfCourses2");
    if (c2 === 0) {
        listOfCourses2.style.display = "block";
        c2++;
    } else if (c2 === 1) {
        listOfCourses2.style.display = "none";
        c2--;
    }
}
var c3 = 0;

function showDiv3() {
    let listOfCourses3 = document.getElementById("listOfCourses3");
    if (c3 === 0) {
        listOfCourses3.style.display = "block";
        c3++;
    } else if (c3 === 1) {
        listOfCourses3.style.display = "none";
        c3--;
    }
}
var c4 = 0;

function showDiv4() {
    let listOfCourses4 = document.getElementById("listOfCourses4");
    if (c4 === 0) {
        listOfCourses4.style.display = "block";
        c4++;
    } else if (c4 === 1) {
        listOfCourses4.style.display = "none";
        c4--;
    }
}
var c5 = 0;

function showDiv5() {
    let listOfCourses5 = document.getElementById("listOfCourses5");
    if (c5 === 0) {
        listOfCourses5.style.display = "block";
        c5++;
    } else if (c5 === 1) {
        listOfCourses5.style.display = "none";
        c5--;
    }
}

var c6 = 0;

function showDiv6() {
    let listOfCourses6 = document.getElementById("listOfCourses6");
    if (c6 === 0) {
        listOfCourses6.style.display = "block";
        c6++;
    } else if (c6 === 1) {
        listOfCourses6.style.display = "none";
        c6--;
    }
}



function dataStored(data) {
    if (localStorage.getItem("decData") == null) {
        localStorage.setItem("decData", JSON.stringify([]));
    }
    let allData = JSON.parse(localStorage.getItem("decData"));
    allData.push(data);
    localStorage.setItem("decData", JSON.stringify(allData));
}

// function divShow(el) {
//     // console.log("show data", el);

//     let toggleDiv = document.createElement("div");
//     let h2 = document.createElement("h2");
//     h2.innerText = el[0].heading;

//     let p1 = document.createElement("p");
//     p1.innerText = el[0].l1;

//     let p2 = document.createElement("p");
//     p2.innerText = el[0].l2;

//     let p3 = document.createElement("p");
//     p3.innerText = el[0].l3;
//     console.log(h2, p1, p2, p3)

//     toggleDiv.append(h2, p1, p2, p3);

//     // toggleDiv.setAttribute('class', 'w-full ml-28 absolute z-40 bg-black');
// }
