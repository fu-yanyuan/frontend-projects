const colors = ["green", "rgba(255, 177, 27)", "rgba(100, 100, 100)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const nipponColors = {
    "NADESHIKO": "rgba(220, 159, 180)",
    "KOHBAI": "rgba(115, 107, 140)",
    "SUOH": "rgba(142, 53, 74)",
    "TAIKOH": "#f8c3cd"
}
const names = Object.keys(nipponColors)

// console.log(color)
// console.log(document.body)
// console.log(names)

const c_names = document.getElementsByTagName("a");
console.log(c_names)
console.log(c_names.length)
console.log(c_names[99].text)

const c_names_list = []
for (let i = 2; i < c_names.length; i++) {
    c_names_list[i-2] = c_names[i].text
}
console.log(c_names_list)

btn.addEventListener("click", function() {
    const randNum = Math.floor(Math.random() * colors.length);
    // console.log(randNum);
    if (color.textContent === names[randNum]) {
        color.textContent = names[randNum+1]
        document.body.style.backgroundColor = nipponColors[names[randNum+1]];
        return      
    }
    color.textContent = names[randNum]
    document.body.style.backgroundColor = nipponColors[names[randNum]];

})
// btn.addEventListener("click", function() {
//     const randNum = Math.floor(Math.random() * colors.length);
//     // console.log(randNum);
//     color.textContent = colors[randNum];
//     document.body.style.backgroundColor = colors[randNum];
// })