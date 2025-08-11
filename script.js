let ism = prompt("Ismingiz nima?");
    let familiya = prompt("Familiyangiz nima?");
    let yosh = prompt("Yoshingiz nechida?");


    let box = document.createElement("div");


    box.innerHTML = `
        1. Ism: ${ism} <br>
        2. Familiya: ${familiya} <br>
        3. Yosh: ${yosh}
    `;

    box.style.backgroundColor = "blue";
    box.style.color = "white";
    box.style.fontSize = "20px";
    box.style.padding = "20px";
    box.style.width = "300px";
    box.style.borderRadius = "20px";
    box.style.margin = "20px";
    box.style.fontWeight = "bold";


    document.body.appendChild(box);