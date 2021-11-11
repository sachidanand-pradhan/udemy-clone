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