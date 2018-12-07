function clickonbg(){
    document.getElementById("poster").style.visibility = "hidden";
    start();
}
////

function start(){
const canvas = document.getElementById("final111");
canvas.width = 1270;
canvas.height = 710;
const context = canvas.getContext("2d");
const backImg = new Image();
backImg.src = "https://png.pngtree.com/thumb_back/fh260/back_pic/05/12/49/325998f0b44dbb2.jpg";
const waiterImg = new Image();
waiterImg.src = "http://exchangedownloads.smarttech.com/public/content/85/85854eb2-5b52-4ab0-8e08-8de790b4a242/previews/medium/0001.png";
const barImg = new Image();
barImg.src = "https://hanslodge.com/data_images/362779.gif";
const pers1 = new Image();
pers1.src = "https://images.vexels.com/media/users/3/127303/isolated/preview/d2d88005bdd8195bb5930634e712c8de-businessman-profession-cartoon-by-vexels.png";
const pers2 = new Image();
pers2.src = "https://images.vexels.com/media/users/3/145744/isolated/preview/23266213696f77c4e3f1e5b6a7d7f12e-man-hands-in-pockets-illustration-by-vexels.png";
const pers3 = new Image();
pers3.src = "https://i.graphicmama.com/uploads/2016/2/Jenna-Elegance-56cc5f77c8445.png";
const pers4 = new Image();
pers4.src = "https://image.samsung.com/cn/smartphones/galaxy-s9/ar/images/galaxy-s9_ar_my_emoji_002.png";
const pers5 = new Image();
pers5.src = "https://upload.wikimedia.org/wikipedia/hy/1/10/Daria_Morgendorffer.png";
const pers6 = new Image();
pers6.src = "https://i.pinimg.com/originals/bd/6f/f6/bd6ff618848e43b2b79eed0b77acc4bb.png";
const pers7 = new Image();
pers7.src = "https://images.vexels.com/media/users/3/130955/isolated/preview/08c00870e43aa206e86e5f3b3495e902-hipster-girl-cartoon-character-by-vexels.png";
const pers8 = new Image();
pers8.src = "https://i.pinimg.com/originals/d6/70/2b/d6702b0615669b7e6845af41d67d6ae8.png";
const menuImg = new Image();
menuImg.src = "http://ichininana.com.au/wp-content/uploads/2015/10/menu_heading.png";
const wishSky = new Image();
wishSky.src = "http://www.pngall.com/wp-content/uploads/2016/09/Thought-Bubble-Transparent.png";
/////
const menu = {
    pizzaImg:{ img:new Image(),
            data:{}},
    shawarmaImg:{ img:new Image(),
            data:{}},
    burgerImg:{ img:new Image(),
            data:{}},
    hotdogImg:{ img:new Image(),
            data:{}},
    spaghettiImg:{ img:new Image(),
            data:{}},
    sushiImg:{ img:new Image(),
            data:{}},
    nachosImg:{ img:new Image(),
            data:{}},
    tacosImg:{ img:new Image(),
            data:{}},
    friesImg:{ img:new Image(),
            data:{}},
    nuggetsImg:{ img:new Image(),
            data:{}},
    juiceOrangeImg:{ img:new Image(),
            data:{}},
    cocaImg:{ img:new Image(),
            data:{}},
    coffeeImg:{ img:new Image(),
            data:{}},
    coffeeHotImg:{ img:new Image(),
            data:{}},
    cheesecakeImg:{ img:new Image(),
            data:{}},
    cakeImg:{ img:new Image(),
            data:{}},
    iceCreamImg:{ img:new Image(),
            data:{}},
    redBullImg:{ img:new Image(),
            data:{}},
    beerImg:{ img:new Image(),
            data:{}},
    darkbeerImg:{ img:new Image(),
            data:{}}
}
const menuLength = Object.keys(menu).length;

   


menu.burgerImg.img.src = "http://www.baby-flash.com/wordpress/wp-content/uploads/2016/03/panino1.jpg";

menu.pizzaImg.img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSkI8LQkMig4uVm6YZAAw8x2WPaOMrRmm3slFibp6ZNqHTGZlN";

menu.spaghettiImg.img.src = "https://png.pngtree.com/element_origin_min_pic/16/10/31/e4bfa19e205800f02f7dc87997c456d9.jpg";

menu.sushiImg.img.src = "https://image.freepik.com/vetores-gratis/colecao-de-icones-de-sushi_1096-294.jpg";

menu.friesImg.img.src = "https://png.pngtree.com/element_origin_min_pic/17/09/20/6892958dfc77f9a5d19ffd55ef59a731.jpg";

menu.hotdogImg.img.src = "data:image/jpeg;base64,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";

menu.shawarmaImg.img.src = "https://library.kissclipart.com/20180919/hzw/kissclipart-shawarma-vector-png-clipart-shawarma-kebab-clip-ar-7626a76d2d8c3f10.jpg";

menu.nuggetsImg.img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcb2z0YsmIxWwgD_Rkq4YfjNpHgSLk43buJjA0DMEbeuWovia7Q";

menu.nachosImg.img.src = "http://images.clipartpanda.com/appetizer-clipart-7367036-nachos-tortilla-chips.jpg";

menu.tacosImg.img.src = "data:image/jpeg;base64,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";

menu.beerImg.img.src = "https://png.pngtree.com/element_origin_min_pic/17/07/24/90e13792a0bce593d454055fbd28e37a.jpg";

menu.juiceOrangeImg.img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JSO1VqKS7W2xs8anhr7yXpVUvJCzBeWzboZXo3So7DXHvIv_";

menu.cocaImg.img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt9kANGcDj0va3VYpJg242YSPC5eW34wa0-88BWeh984D5WOYF";

menu.redBullImg.img.src = "https://image.redbull.com/rbx00264/0100/0/406/ingredients/caffeine/global/FMR-RedBull_Icon_Cola-min.jpg";

menu.coffeeImg.img.src = "https://101clipart.com/wp-content/uploads/07/Iced%20Coffee%20Clipart%2004.jpg";

menu.coffeeHotImg.img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDIgD_WlwlzNZkzamLyL3hMS19Qh9doO26R0RjOVkdaphWp46";

menu.iceCreamImg.img.src = "data:image/png;base64,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";

menu.cheesecakeImg.img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mXoAhUSwTgOdUpcsbtaZMWjN_HRbAHoZW0Wcynlrt80Mt9lF";

menu.cakeImg.img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOw4Qb6peTG7z-u5-Z1bB0HxLgUmBv3hTefhT3u2gxQx8Wkrl";

menu.darkbeerImg.img.src = "https://image.freepik.com/vector-gratis/cerveza-raiz-flotante_17-526194149.jpg";

let userPoint = 0;
let gameStart = true;
let bool = false;
let arrayPicture = [];
let inBarPeopleIndex = 0;
let selectedProduct = {};
let index;
let val = false;
let stopCord;

const leftPosition = 310;
let topPosition = 75;
let countLeft = 0;
let countTop = 0;
for (let key in menu) {
    
    if (countLeft < 11 && countTop < 1) {
        menu[key].data={}
        menu[key].data.left = leftPosition + (countLeft * 73)
        menu[key].data.top = topPosition
            ++countLeft
        if (countLeft === 10) {
            countTop = 1
            topPosition = 150
            countLeft = 0
        }
    } else {
        menu[key].data.left = leftPosition + (countLeft * 73)
        menu[key].data.top = topPosition
            ++countLeft
    }

}

///////
const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
};

const waiter = {
    x: 150,
    y: 350,
    width: 200,
    height: 300,
    img: waiterImg,
    draw: function() {
        context.drawImage(this.img, this.x, this.y, this.width, this.height);


    }

}
const getPeoplePicturesIndexes = function(val) {
    if (!val) {
        let peopleCount = peoPle.length;
        let pictureCount = menuLength -1;
        for (let i = 0; i < peopleCount; i++) {
            let arr = [];
            let peoupeWishdishCount = 3;
            while(peoupeWishdishCount){
                let k = Math.round(Math.random() * pictureCount);
                if(arr.indexOf(k) == '-1'){
                    arr.push(k);
                    peoupeWishdishCount--;
                }
            }
            arrayPicture.push(arr)
        }
        bool = !bool
    }
}
////////////////////////////////////////////////////////////////////////
const people = function(count) {
    const base = [];
    let pers = [pers1, pers2, pers3, pers4, pers5, pers6, pers7, pers8];
    for (let i = 0; i < count; i++) {
        let img = pers[rand(pers.length) - 1]
        pers = pers.filter(per => per.src !== img.src);
        base[base.length] = {
            x: canvas.width + i * 2 * rand(canvas.width),
            y: 350,
            xDir: -1,
            yDir: 1,
            delta: 6,
            width: 200,
            height: 300,
            img: img,
            wishDish: [],
            wishFood: function(indexCoord) {
                for (let n = 0; n < arrayPicture[indexCoord].length; n++) {
                    let k = arrayPicture[indexCoord][n];
                    wishdishFunction(peoPle[indexCoord].x + 100 + (n * 35), k)
                }
                this.wishDish = arrayPicture[indexCoord];
            },
            wish: function(indexCoord) {
                sky.x = peoPle[indexCoord].x + 70;
                sky.draw();
                this.wishFood(indexCoord)
            },
            draw: function() {
                context.drawImage(this.img, this.x, this.y, this.width, this.height);
            },
            update: function(stopCord ,indexCoord) {
                this.x += this.xDir * this.delta;
                if (this.x <= stopCord) {
                    this.delta = 0;
                    this.wish(indexCoord);
                }
            },
            goHome: function(){
                this.delta = 3;
                this.x += this.xDir * this.delta;
            
            },
        }
    }
    gameStart = false;
    return base;
}

const wishdishFunction = function(x, menuIndex) {
        let tmpMenuKey =  Object.keys(menu)[menuIndex];
        let drowWishdish = {
            x: x,
            y: 260,
            width: 30,
            height: 30,
            img: menu[tmpMenuKey].img,
            draw: function() {
                context.drawImage(this.img, this.x, this.y, this.width, this.height);
            },
        }
        drowWishdish.draw();
}


const sky = {
    x: 350,
    y: 230,
    width: 150,
    height: 130,
    img: wishSky,
    draw: function() {
        context.drawImage(this.img, this.x, this.y, this.width, this.height);
    },

}






const peoPle = people(8).sort(function(a, b) {
    return a.x > b.x ? 1 : a.x < b.x ? -1 : 0;
});


const draw = function() {
    for (let i = 0; i < peoPle.length; i++) {
        setTimeout(peoPle[i].draw(), i * 1000);
    }

};


const update = function() {
    
    for (let i = 0; i < peoPle.length; i++) {
        stopCord = 350;
        if(i > 0){
            if(peoPle[i - 1].x > 0){
                stopCord = peoPle[i - 1].x + 200
            }
        }
        peoPle[i].update(stopCord, i);
       
    }
}
//////////////////
const addMenu = function(){
    for (var key in menu) {
        context.drawImage(menu[key].img, menu[key].data.left, menu[key].data.top, 65, 65);
    }
}


const feed = function() {
    context.drawImage(backImg, 0, 0, canvas.width, canvas.height);
    waiter.draw();
    context.drawImage(barImg, 150, 470, 250, 230);
}



const drawFood = function(bool){
    let i = 0
    for (var key in selectedProduct){
       let left = 300 + ( i * 40)
        context.drawImage(selectedProduct[key].img,left,460,30,30);
        i++
    }


    if(bool){
        if(peoPle[inBarPeopleIndex].x <= 300 + Object.keys(selectedProduct).length * 30 ){
            let tmpSelectedProductKey =  Object.keys(selectedProduct)[Object.keys(selectedProduct).length - 1];
            delete selectedProduct[tmpSelectedProductKey]
        }
        peoPle[inBarPeopleIndex].delta=5; 
        if(peoPle[inBarPeopleIndex].x + peoPle[inBarPeopleIndex].width+50 <= 0){
            inBarPeopleIndex++  
            peoPle[inBarPeopleIndex].delta = 3;
            val =false
        } 
    }
}



const checkPoint = function(){
    
    let tmpPeople = peoPle[inBarPeopleIndex]
    for(let z=0; z <= tmpPeople.wishDish.length; z++){
        for(let key in selectedProduct){
            console.log('userPoint',userPoint)     
            let tmpMenutKey =  Object.keys(menu)[tmpPeople.wishDish[z]];
            console.log('userPoint',userPoint)     
            if(menu[tmpMenutKey] === selectedProduct[key]){
                userPoint++;
            }
           
           
        }
    }
    console.log('userPoint',userPoint)  

      if(userPoint > 10){
        // alert('YOUR POINT IS :'+ userPoint);
        let modal = document.getElementById("simpleModal");
        function openModal(){
        modal.style.display= "block"; //this
        }
        openModal();
        inBarPeopleIndex = 0;
        gameStart = true;
    }  
    if(userPoint < -50){
        // alert('YOUR POINT IS :'+ userPoint);

        document.getElementById("p1").innerHTML = "try again!";
        let modal1 = document.getElementById("simpleModal");
        function openModal(){
        modal1.style.display= "block"; //this
        }
        openModal();
        inBarPeopleIndex = 0;
        gameStart = true;
    }  
  
}

const loop = function() {
    getPeoplePicturesIndexes(bool)

    feed();

    context.drawImage(menuImg, 610, 0, 160, 50);
    addMenu();
    
   
    drawFood (val);
    draw();
    update();
    requestAnimationFrame(loop);
    
}

canvas.addEventListener('click', function(event) {
    var x = event.pageX,
        y = event.pageY;
    for (var key in menu) {
        if (y > menu[key].data.top && y < menu[key].data.top + 70&&
            x > menu[key].data.left && x < menu[key].data.left + 70 && peoPle[inBarPeopleIndex].delta === 0) {
            selectedProduct[key] = menu[key];
            if( Object.keys(selectedProduct).length > 2){
                val = true;
                checkPoint();
            }
        }
    }
  }, false);
 


loop();}