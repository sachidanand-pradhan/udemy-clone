let d = document.getElementById("d");
async function getData() {
    let res = await fetch(`http://localhost:5000/api/javascript`);
    let data = await res.json();
    console.log("data:------", data);
    // console.log("data:",data[0].include);
    // add(data);

}
getData();

// function add(data) {
//     d.innerText = null;
//     data.forEach((el) => {
//         let div = document.createElement("div");
//         let img = document.createElement("img");
//         img.src = el.image;
//         let p = document.createElement("p");
//         p.innerText = el.name;
//         div.append(img, p);
//         d.append(div);
//     })
// }