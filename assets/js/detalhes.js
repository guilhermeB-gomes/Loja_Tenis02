//Getting all elements from the DOM
const imgContainer = document.querySelector(".showcase > div");
const img = document.querySelector(".showcase img ");
const shadow = document.querySelector(".shadow");

const thumb = document.querySelectorAll(".thumbs img");
const titleOverlay = document.querySelector(".titleOverlay");
const title = document.querySelector(".titleText");
const desc = document.querySelector(".description");

const sizes = document.querySelectorAll(".sizes > li");
const stars = document.querySelectorAll(".stars span");
const price = document.querySelector(".price");
const colorBtn = document.querySelectorAll(".color");

const pag = document.querySelectorAll(".pag");
const prev = document.querySelector(".arr-left");
const next = document.querySelector(".arr-right");
const shoeNum = document.querySelector(".shoe-num");
const shoeTotal = document.querySelector(".shoe-total");

const totalShoes = 3;

//Id Variantes
let id = 1;
let colortype = 1;
let shoe = 1;

//shoe details / data
const colors = [
    ["ae001b", "#111111"],
    ["linear-gradient(0deg, orange, red)", "#bda08e"],
    ["linear-gradient(0deg, #00b8ea 0%, #e6882d 50%, #e56da6 100%)", "linear-gradient(0deg, #dae766, #b2afaa)"],
];

const prices = ["150", "250", "175"]; // Preços

const names = [
    ["Red Nike Jordan Max Aura 3", "Black Nike Jordan Max Aura 3"],
    ["Black/Orange Nike Air Max 95", "Beige/Gray Nike Air Max 95"],
    ["Colorful NIKE Jordan Delta 2 SP", "Gray NIKE Jordan Delta 2 SP"],
];

const description = [
    ["Bring a piece of history to the city's urban streets as you walk intro Nike Jordan Max aura # men's sneakers. Inspired by the rich jordannian heritage, this model has the energy of basketball shoes and a look that changes the perception of the classic style."],
    ["Nike Air Max 95 men's sneakers move you with the strength and fluidity inspired by the anatomy of the human body.The central sole forms the basis of these sneakers, while the structured side panels give a solid and stable construction.Flexible incisions in the sole allow your feet to move naturally."],
    ["Jordan Delta 2 SP men's basketball shoes offer a fresh and fearless approach to the characteristics you want: durability, comfort and the attitude of the Jordan brand. The first model of Delta 2 sneakers, with the same idea, received redesigned lines and modified components."],
];

const ratings = [4, 5, 3];

/*=== Functions ===*/
/*=================*/
//Retriving image from folder path 
function getImage(imgType, shoe, colorType, id, extension) {
    return "img/" + imgType + "/shoe" + shoe + "-" + colorType + "/img" + id + "." + extension;
}

//Reset Active state to buttons 
function resetActive(element, elementClass, index) {
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove(elementClass + "-active");
    }
    element[index].classList.add(elementClass + "-active");
}

//Fire Animations 
function animate(element, time, anim) {
    element.style.animation = anim;

    setTimeout(() => {
        element.style.animation = "none";
    }, time);
}

//Assign colors to color buttons 
function assignColors(i, shoe) {
    colorBtn[i].style.background = colors[shoe - 1][i];
}

//Set rating by filling out stars 
function resetStars(shoe) {
    for (let i = 0; i < stars.length; i++) {
        stars[i].innerText = "star_outline";
    }

    //Adding the ratings
    for (let i = 0; i < ratings[shoe]; i++) {
        stars[i].innerText = "star";
    }
}
/* ============== */

// Changing Shoe Size 
for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click", (e) => {
        resetActive(sizes, "size", i);
    });
}

/*Setting up all of the initial data for the first shoe that loads */
shoeTotal.innerText = "0" + totalShoes; /* Atualize para o número total de tênis *//*1 */
shoeNum.innerText = "0" + shoe; /*2 */
price.innerText = "$" + prices[0]; /*3 */
resetStars(shoe - 1); /*4 */
title.innerText = names[0][0]; /*5 */
desc.innerText = description[0]; /*6 */

/* changing images */
for (let i = 0; i < thumb.length; i++) {
    thumb[i].addEventListener("click", (e) => {
        /* JS arrays start with 0,
        so we set the id to i + 1 */
        id = i + 1;

        /** Setting the main image to clicked thumbnail image */
        img.src = getImage("showcase", shoe, colortype, id, "png");

        //adding the active class to the clicked thumbnail
        resetActive(thumb, "thumb", i);

        //adding the fade in animation on the shoe
        animate(imgContainer, 550, "fade 500ms ease-in-out");
    });
}

for (let i = 0; i < colorBtn.length; i++) {
    //Setting up colors to the color btn
    assignColors(i, shoe);

    //changing colors
    colorBtn[i].addEventListener("click", () => {
        //Change color type of the shoe 
        colortype = i + 1;

        //Change Showcase image 
        setTimeout(() => {
            img.src = getImage("showcase", shoe, colortype, id, "png");
        }, 450);

        //Change Thumbnails
        for (let i = 0; i < thumb.length; i++) {
            thumb[i].src = getImage("thumbs", shoe, colortype, i + 1, "jpg");
        }

        //Set active class to clicked button 
        resetActive(colorBtn, "color", i);

        //change the shoe title 
        title.innerText = names[shoe - 1][i];

        //adding all of the animations 
        animate(img, 550, "jump 500ms ease-in-out");
        animate(shadow, 550, "shadow 500ms ease-in-out");
        animate(titleOverlay, 850, "title 800ms ease");
    });
}

/** ==== Slider ===== */
function slider(shoe) {
    //change Showcase Image
    setTimeout(() => {
        img.src = getImage("showcase", shoe, colortype, id, "png");
    }, 600);

    //change Thumbnails
    for (let i = 0; i < thumb.length; i++) {
        thumb[i].src = getImage("thumbs", shoe, colortype, i + 1, "jpg");
    }

    //changing the colors on the color buttons 
    for (let i = 0; i < colorBtn.length; i++) {
        assignColors(i, shoe);
    }

    //set active class to clicked pagination
    resetActive(pag, "pag", shoe - 1);

    //Reassign all of the shoe data
    desc.innerText = description[shoe - 1];
    title.innerText = names[shoe - 1][colortype - 1];
    price.innerText = "$" + prices[shoe - 1];
    resetStars(shoe - 1);
    shoeNum.innerText = "0" + shoe;

    //Adding all of the animations 
    animate(img, 1550, "replace 1.5s ease-in");
    animate(shadow, 1550, "shadow2 1.5s ease-in");
    animate(titleOverlay, 850, "title 800ms ease");
}

//Previous shoe
prev.addEventListener("click", () => {
    //Decrement shoe id
    shoe--;
    /** Check if slide goes below the first, 
     and reset it to the last slide */
    if (shoe < 1) {
        shoe = pag.length;
    }
    //Run the slider function
    slider(shoe);
});

//Next Shoe
next.addEventListener("click", () => {
    //Increment shoe id 
    shoe++;

    /** Check if slider goes above the slides length,
     * and reset it to the first */
    if (shoe > pag.length) {
        shoe = 1;
    }
    //Run the slider function
    slider(shoe);
});

// Pagination
for (let i = 0; i < totalShoes; i++) { // A quantidade de páginas será igual ao número de tênis
    pag[i].addEventListener("click", () => {
        // Chama a função slider() passando o número do tênis baseado na página clicada
        slider(i + 1);
        // Define o número do tênis baseado no botão de paginação clicado
        shoe = i + 1;
    });
}
// Pega o id do produto da URL
const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get('id');

// Busca o produto no array de produtos
const produtoDetalhes = produtos.find(produto => produto.id === parseInt(produtoId));

// Exibe os detalhes do produto
if (produtoDetalhes) {
    document.getElementById("produto-nome").innerText = produtoDetalhes.nome;
    document.getElementById("produto-imagem").src = produtoDetalhes.imagem;
    document.getElementById("produto-preco").innerText = `R$ ${produtoDetalhes.preco.toFixed(2)}`;
    document.getElementById("produto-descricao").innerText = `Marca: ${produtoDetalhes.marca}, Cor: ${produtoDetalhes.cor}, Tipo: ${produtoDetalhes.tipo}, Gênero: ${produtoDetalhes.genero}`;
} else {
    document.getElementById("produto-detalhes").innerText = "Produto não encontrado.";
}
