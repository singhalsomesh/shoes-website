let wrapper = document.querySelector(".sliderWrapper");
let menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let choosenProduct = products[0];  

let currentProductImage = document.querySelector(".productImg");
let currentProductTitle = document.querySelector(".productTitle");
let currentProductPrice = document.querySelector(".productPrice");
let currentProductDesc = document.querySelector(".productDesc");
let currentColor = document.querySelectorAll(".color");
let currentSize = document.querySelectorAll(".size");

menuItems.forEach((item,index) => {
    item.addEventListener("click" , () => {
        wrapper.style.transform = `translateX(${(-100 * index)}vw)`;
        choosenProduct = products[index];
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$"+choosenProduct.price;
        currentProductImage.src = choosenProduct.colors[0].img;
        currentColor.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    })
})

currentColor.forEach((color , index) => {
    color.addEventListener("click",() => {
        currentProductImage.src = choosenProduct.colors[index].img;
    })
})

currentSize.forEach((size,index) => {
    size.addEventListener("click",() => {
        currentSize.forEach((sz,idx) => {
            sz.style.backgroundColor="white";
            sz.style.color="black";
        })
        size.style.backgroundColor="black";
        size.style.color="white"; 
    })
})

let buyBtn = document.querySelector(".productButton");
let payment = document.querySelector(".payment");
let closeModal = document.querySelector(".close");

buyBtn.addEventListener("click",() => {
  payment.style.display="flex";
})

closeModal.addEventListener("click",() => {
  payment.style.display="none";
})