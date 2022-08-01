
let li = document.querySelectorAll(".loop");
let arr = ["Facebook", "Instagram", "Youtube", "Twitter", "Pinterest", "LinkedIn"]
let count = 0;
for (let l of li) {
    l.innerText = arr[count];
    count++;
}