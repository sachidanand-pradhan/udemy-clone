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
        right.style.margin= "5px";
        // right.style.border = "2px solid black";

        let img = document.createElement("img");
        img.src = el.image;
        left.append(img);
        img.style.width = "100%";

        let p = document.createElement("p");
        p.innerText = el.name;
        p.setAttribute('class','font-bold');

        let title = document.createElement("p");
        title.innerText = el.title;
        title.setAttribute('class','lg:flex hidden');

        let author = document.createElement("p");
        author.innerText = el.CreatedBy;

        let rating = document.createElement("p");
        rating.innerText = el.rating +" ⭐⭐⭐⭐⭐";

        mid.append(p,title,author,rating);


        let price = document.createElement("p");
        price.innerText ="₹ "+ el.price;
        price.setAttribute('class','font-bold');
        let oldprice = document.createElement("p");
        // text-decoration: line-through;
        oldprice.innerText="₹ "+el.oldprice;
        oldprice.setAttribute('class','line-through');

        right.append(price,oldprice);
        
        div.append(left,mid,right);
        // div.style.marginTop ="10px";


        div.addEventListener('click', () => {
            dataStored(el);
        })

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

 function dataStored(data){
    if(localStorage.getItem("decData") == null){
        localStorage.setItem("decData",JSON.stringify([]));
    }
    let allData = JSON.parse(localStorage.getItem("decData"));
    allData.push(data);
    localStorage.setItem("decData",JSON.stringify(allData));
 }