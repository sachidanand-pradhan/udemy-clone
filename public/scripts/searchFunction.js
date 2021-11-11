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
        console.log(el);
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let p = document.createElement("p");
        p.innerText = el.name;
        div.append(img, p);
        d.append(div);
    })
}

// ⭐⭐⭐⭐⭐

var c = 0;

 function showDiv(){
    let listOfCourses = document.getElementById("listOfCourses");
     if(c === 0){
        listOfCourses.style.display = "block";
        c++;
     }else if(c === 1){
        listOfCourses.style.display = "none";
        c--;
     }
}
 var c1 = 0;

 function showDiv1(){
    let listOfCourses1 = document.getElementById("listOfCourses1");
     if(c1 === 0){
        listOfCourses1.style.display = "block";
        c1++;
     }else if(c1 === 1){
        listOfCourses1.style.display = "none";
        c1--;
     }
}

var c2 = 0;
function showDiv2(){
    let listOfCourses2 = document.getElementById("listOfCourses2");
     if(c2 === 0){
        listOfCourses2.style.display = "block";
        c2++;
     }else if(c2 === 1){
        listOfCourses2.style.display = "none";
        c2--;
     }
}
 
var c3 = 0;
function showDiv3(){
    let listOfCourses3 = document.getElementById("listOfCourses3");
     if(c3 === 0){
        listOfCourses3.style.display = "block";
        c3++;
     }else if(c3 === 1){
        listOfCourses3.style.display = "none";
        c3--;
     }
}
var c4 = 0;
function showDiv4(){
    let listOfCourses4 = document.getElementById("listOfCourses4");
     if(c4 === 0){
        listOfCourses4.style.display = "block";
        c4++;
     }else if(c4 === 1){
        listOfCourses4.style.display = "none";
        c4--;
     }
}
 var c5 = 0;
function showDiv5(){
    let listOfCourses5 = document.getElementById("listOfCourses5");
     if(c5 === 0){
        listOfCourses5.style.display = "block";
        c5++;
     }else if(c5 === 1){
        listOfCourses5.style.display = "none";
        c5--;
     }
}
 var c6 = 0;
function showDiv6(){
    let listOfCourses6 = document.getElementById("listOfCourses6");
     if(c6 === 0){
        listOfCourses6.style.display = "block";
        c6++;
     }else if(c6 === 1){
        listOfCourses6.style.display = "none";
        c6--;
     }
 }