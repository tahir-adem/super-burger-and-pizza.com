
var nav_icon_1 = document.querySelector('.nav_icon .a')
, nav_icon_2 = document.querySelector('.nav_icon .b')
, nav_icon_3 = document.querySelector('.nav_icon .c')
, nav_icon = document.querySelector('.nav_icon')
, nav_box = document.querySelector('nav')
, container = document.querySelector('.container')
, sub_menu_box_1 = document.querySelector('section .sub_menu div:nth-child(1)')
, sub_menu_box_2 = document.querySelector('section .sub_menu div:nth-child(3)')
, sub_menu_box_3 = document.querySelector('section .sub_menu div:nth-child(5)')
////////////////////////////////////////////////////////////////////////////////
, sub_menu_img_1 = document.querySelector('.sub_menu div:nth-child(1) img')
, sub_menu_txt_a_1 = document.querySelector('.sub_menu div:nth-child(1) .txt_1')
, sub_menu_txt_b_1 = document.querySelector('.sub_menu div:nth-child(1) .txt_2')
, sub_menu_txt_c_1 = document.querySelector('.sub_menu div:nth-child(1) .txt_3')
, sub_menu_link_1 = document.querySelector('section .box:nth-child(1) a')
///////////////////////////////////////////////////////////////////////////////////
, sub_menu_img_2 = document.querySelector('.sub_menu div:nth-child(2) img')
, sub_menu_txt_a_2 = document.querySelector('.sub_menu div:nth-child(2) .txt_1')
, sub_menu_txt_b_2 = document.querySelector('.sub_menu div:nth-child(2) .txt_2')
, sub_menu_txt_c_2 = document.querySelector('.sub_menu div:nth-child(2) .txt_3')
, sub_menu_link_2 = document.querySelector('section div:nth-child(2) a')
///////////////////////////////////////////////////////////////////////////////////
, sub_menu_img_3 = document.querySelector('.sub_menu div:nth-child(3) img')
, sub_menu_txt_a_3 = document.querySelector('.sub_menu div:nth-child(3) .txt_1')
, sub_menu_txt_b_3 = document.querySelector('.sub_menu div:nth-child(3) .txt_2')
, sub_menu_txt_c_3 = document.querySelector('.sub_menu div:nth-child(3) .txt_3')
, sub_menu_link_3 = document.querySelector('section .box:nth-child(3) a')
///////////////////////////////////////////////////////////////////////////////////
, sub_menu_img_4 = document.querySelector('.sub_menu div:nth-child(4) img')
, sub_menu_txt_a_4 = document.querySelector('.sub_menu div:nth-child(4) .txt_1')
, sub_menu_txt_b_4 = document.querySelector('.sub_menu div:nth-child(4) .txt_2')
, sub_menu_txt_c_4 = document.querySelector('.sub_menu div:nth-child(4) .txt_3')
, sub_menu_link_4 = document.querySelector('section div:nth-child(4) a')
///////////////////////////////////////////////////////////////////////////////////
, sub_menu_img_5 = document.querySelector('.sub_menu div:nth-child(5) img')
, sub_menu_txt_a_5 = document.querySelector('.sub_menu div:nth-child(5) .txt_1')
, sub_menu_txt_b_5 = document.querySelector('.sub_menu div:nth-child(5) .txt_2')
, sub_menu_txt_c_5 = document.querySelector('.sub_menu div:nth-child(5) .txt_3')
, sub_menu_link_5 = document.querySelector('section div:nth-child(5) a')
///////////////////////////////////////////////////////////////////////////////////
, sub_menu_img_6 = document.querySelector('.sub_menu div:nth-child(6) img')
, sub_menu_txt_a_6 = document.querySelector('.sub_menu div:nth-child(6) .txt_1')
, sub_menu_txt_b_6 = document.querySelector('.sub_menu div:nth-child(6) .txt_2')
, sub_menu_txt_c_6 = document.querySelector('.sub_menu div:nth-child(6) .txt_3')
, sub_menu_link_6 = document.querySelector('section div:nth-child(6) a')
///////////////////////////////////////////////////////////////////////////////////////
var login = document.querySelector('.login')
function login(){
    login.style.scale = '1'
}
function nav_open(){
    nav_icon.setAttribute('onclick' , 'nav_close()')
    nav_icon_1.classList.toggle('active')
    nav_icon_3.classList.toggle('active')
    nav_icon_2.classList.toggle('active')
    nav_box.classList.add('nav_active')
    container.classList.toggle('container_active')
}
function nav_close(){
    nav_icon.setAttribute('onclick' , 'nav_open()')
    nav_icon_1.classList.remove('active')
    nav_icon_3.classList.remove('active')
    nav_icon_2.classList.remove('active')
    nav_box.classList.remove('nav_active')
    container.classList.remove('container_active')
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const fun_1 = () =>{
    sub_menu_box_1.style.background = 'linear-gradient(45deg,#f78e2c,#f7b06d)'
    sub_menu_box_1.style.boxShadow = '1px 10px 13px 0 rgba(247, 142, 44,0.6)'
    sub_menu_box_2.style.background = 'linear-gradient(45deg,#f78e2c,#f7b06d)'
    sub_menu_box_2.style.boxShadow = '1px 10px 13px 0 rgba(247, 142, 44,0.6)'
    sub_menu_box_3.style.background = 'linear-gradient(45deg,#f78e2c,#f7b06d)'
    sub_menu_box_3.style.boxShadow = '1px 10px 13px 0 rgba(247, 142, 44,0.6)'
    /////////////////////////////////////////////////////////////////////////////
    sub_menu_img_1.setAttribute('src','../file/burger_1.png')
    sub_menu_link_1.setAttribute('a',"../SUB-MENU/sub_menu_1/index.html")
    sub_menu_img_1.style.top = "-50px"
    sub_menu_img_1.style.left = "7px"
    sub_menu_img_1.style.width = "140px"
    sub_menu_img_1.style.height = "130px"
    sub_menu_txt_a_1.innerHTML = '#B01 CODE'
    sub_menu_txt_b_1.innerHTML = 'Cheese Burger'
    sub_menu_txt_c_1.innerHTML = '$300'
    //////////////////////////////////////////////////////////////////////
    sub_menu_img_2.setAttribute('src','../file/burger_2.png')
    sub_menu_link_2.href = "../SUB-MENU/sub_menu_2/index.html"
    sub_menu_img_2.style.top = "-50px"
    sub_menu_img_2.style.left = "-5px"
    sub_menu_img_2.style.width = "145px"
    sub_menu_img_2.style.height = "135px"
    sub_menu_txt_a_2.innerHTML = '#B02 CODE'
    sub_menu_txt_b_2.innerHTML = 'Bean Burger'
    sub_menu_txt_c_2.innerHTML = '$330'
    /////////////////////////////////////////////////
    sub_menu_img_3.setAttribute('src','../file/burger_3.png')
    sub_menu_link_3.href = "../SUB-MENU/sub_menu_3/index.html"
    sub_menu_img_3.style.top = "-70px"
    sub_menu_img_3.style.left = "7px"
    sub_menu_img_3.style.width = "140px"
    sub_menu_img_3.style.height = "160px"
    sub_menu_txt_a_3.innerHTML = '#B03 CODE'
    sub_menu_txt_b_3.innerHTML = 'Mushroom Burger'
    sub_menu_txt_c_3.innerHTML = '$350'
    /////////////////////////////////////////////////
    sub_menu_img_4.setAttribute('src','../file/burger_4.png')
    sub_menu_link_4.href = "../SUB-MENU/sub_menu_4/index.html"
    sub_menu_img_4.style.top = "-25px"
    sub_menu_img_4.style.left = "-5px"
    sub_menu_img_4.style.width = "165px"
    sub_menu_img_4.style.height = "100px"
    sub_menu_txt_a_4.innerHTML = '#B04 CODE'
    sub_menu_txt_b_4.innerHTML = 'Beef Burger'
    sub_menu_txt_c_4.innerHTML = '$350'
    ////////////////////////////////////////////////
    sub_menu_img_5.setAttribute('src','../file/burger_5.png')
    sub_menu_link_5.href = "../SUB-MENU/sub_menu_5/index.html"
    sub_menu_img_5.style.top = "-40px"
    sub_menu_img_5.style.left = "-5px"
    sub_menu_img_5.style.width = "190px"
    sub_menu_img_5.style.height = "110px"
    sub_menu_txt_a_5.innerHTML = '#B05 CODE'
    sub_menu_txt_b_5.innerHTML = 'Salmon Burger'
    sub_menu_txt_c_5.innerHTML = '$350'
    //////////////////////////////////////////////
    sub_menu_img_6.setAttribute('src','../file/burger_6.png')
    sub_menu_link_6.href = "../SUB-MENU/sub_menu_6/index.html"
    sub_menu_img_6.style.top = "-50px"
    sub_menu_img_6.style.left = "-20px"
    sub_menu_img_6.style.width = "200px"
    sub_menu_img_6.style.height = "130px"
    sub_menu_txt_a_6.innerHTML = '#B06 CODE'
    sub_menu_txt_b_6.innerHTML = 'Veggie Burger'
    sub_menu_txt_c_6.innerHTML = '$300'
}
const fun_2 = () =>{
    sub_menu_box_1.style.background = 'linear-gradient(45deg,#fd2424,#f79560)'
    sub_menu_box_1.style.boxShadow = '1px 10px 13px 0 rgba(253, 36, 36,0.6);'
    sub_menu_box_2.style.background = 'linear-gradient(45deg,#fd2424,#f79560)'
    sub_menu_box_2.style.boxShadow = '1px 10px 13px 0 rgba(253, 36, 36,0.6);'
    sub_menu_box_3.style.background = 'linear-gradient(45deg,#fd2424,#f79560)'
    sub_menu_box_3.style.boxShadow = '1px 10px 13px 0 rgba(253, 36, 36,0.6);'
    /////////////////////////////////////////////////////////////////////////////
    sub_menu_img_1.setAttribute('src','../file/pizza_1.png')
    sub_menu_link_1.href = "../SUB-MENU/sub_menu_7/index.html"
    sub_menu_img_1.style.top = "-50px"
    sub_menu_img_1.style.left = "7px"
    sub_menu_img_1.style.width = "140px"
    sub_menu_img_1.style.height = "130px"
    sub_menu_txt_a_1.innerHTML = '#P07 CODE'
    sub_menu_txt_b_1.innerHTML = 'Cheese Pizza'
    sub_menu_txt_c_1.innerHTML = '$250'
    // ///////////////////////////////////////////////////////////////////////////////
    sub_menu_img_2.setAttribute('src','../file/pizza_2.png')
    sub_menu_link_2.href = "../SUB-MENU/sub_menu_8/index.html"
    sub_menu_img_2.style.top = "-40px"
    sub_menu_img_2.style.left = "10px"
    sub_menu_img_2.style.width = "135px"
    sub_menu_img_2.style.height = "120px"
    sub_menu_txt_a_2.innerHTML = '#P08 CODE'
    sub_menu_txt_b_2.innerHTML = 'Pepperoni Pizza'
    sub_menu_txt_c_2.innerHTML = '$250'
    // /////////////////////////////////////////////////
    sub_menu_img_3.setAttribute('src','../file/pizza_3.png')
    sub_menu_link_3.href = "../SUB-MENU/sub_menu_25/index.html"
    sub_menu_img_3.style.top = "-50px"
    sub_menu_img_3.style.left = "7px"
    sub_menu_img_3.style.width = "140px"
    sub_menu_img_3.style.height = "140px"
    sub_menu_txt_a_3.innerHTML = '#P09 CODE'
    sub_menu_txt_b_3.innerHTML = 'Margharita Pizza'
    sub_menu_txt_c_3.innerHTML = '$350'
    // /////////////////////////////////////////////////
    sub_menu_img_4.setAttribute('src','../file/pizza_4.png')
    sub_menu_link_4.href = "../SUB-MENU/sub_menu_10/index.html"
    sub_menu_img_4.style.top = "-80px"
    sub_menu_img_4.style.left = "15px"
    sub_menu_img_4.style.width = "150px"
    sub_menu_img_4.style.height = "215px"
    sub_menu_txt_a_4.innerHTML = '#P10 CODE'
    sub_menu_txt_b_4.innerHTML = 'Buffalo Pizza'
    sub_menu_txt_c_4.innerHTML = '$300'
    // ////////////////////////////////////////////////
    sub_menu_img_5.setAttribute('src','../file/pizza_5.png')
    sub_menu_link_5.href = "../SUB-MENU/sub_menu_11/index.html"
    sub_menu_img_5.style.top = "-50px"
    sub_menu_img_5.style.left = "10px"
    sub_menu_img_5.style.width = "145px"
    sub_menu_img_5.style.height = "140px"
    sub_menu_txt_a_5.innerHTML = '#P11 CODE'
    sub_menu_txt_b_5.innerHTML = 'Chicken Pizza'
    sub_menu_txt_c_5.innerHTML = '$300'
    // //////////////////////////////////////////////
    sub_menu_img_6.setAttribute('src','../file/pizza_6.png')
    sub_menu_link_6.href = "../SUB-MENU/sub_menu_12/index.html"
    sub_menu_img_6.style.top = "-50px"
    sub_menu_img_6.style.left = "-5px"
    sub_menu_img_6.style.width = "170px"
    sub_menu_img_6.style.height = "170px"
    sub_menu_txt_a_6.innerHTML = '#P12 CODE'
    sub_menu_txt_b_6.innerHTML = 'Salmon Pizza'
    sub_menu_txt_c_6.innerHTML = '$300'
}
const fun_3 = () =>{
    sub_menu_box_1.style.background = 'linear-gradient(45deg,#f78e2c,#f7b06d)'
    sub_menu_box_1.style.boxShadow = '1px 10px 13px 0 rgba(247, 142, 44,0.6)'
    sub_menu_box_2.style.background = 'linear-gradient(45deg,#f78e2c,#f7b06d)'
    sub_menu_box_2.style.boxShadow = '1px 10px 13px 0 rgba(247, 142, 44,0.6)'
    sub_menu_box_3.style.background = 'linear-gradient(45deg,#f78e2c,#f7b06d)'
    sub_menu_box_3.style.boxShadow = '1px 10px 13px 0 rgba(247, 142, 44,0.6)'
    // /////////////////////////////////////////////////////////////////////////////
    sub_menu_img_1.setAttribute('src','../file/fast_food_1.png')
    sub_menu_link_1.href = "../SUB-MENU/sub_menu_13/index.html"
    sub_menu_img_1.style.top = "-50px"
    sub_menu_img_1.style.left = "15px"
    sub_menu_img_1.style.width = "120px"
    sub_menu_img_1.style.height = "130px"
    sub_menu_txt_a_1.innerHTML = '#F13 CODE'
    sub_menu_txt_b_1.innerHTML = 'Hot Dog'
    sub_menu_txt_c_1.innerHTML = '$300'
    // ////////////////////////////////////////////////////////////////////////////
    sub_menu_img_2.setAttribute('src','../file/fast_food_2.png')
    sub_menu_link_2.href = "../SUB-MENU/sub_menu_14/index.html"
    sub_menu_img_2.style.top = "-40px"
    sub_menu_img_2.style.left = "-40px"
    sub_menu_img_2.style.width = "240px"
    sub_menu_img_2.style.height = "150px"
    sub_menu_txt_a_2.innerHTML = '#F14 CODE'
    sub_menu_txt_b_2.innerHTML = 'Chips'
    sub_menu_txt_c_2.innerHTML = '$330'
    // /////////////////////////////////////////////////
    sub_menu_img_3.setAttribute('src','../file/fast_food_3.png')
    sub_menu_link_3.href = "../SUB-MENU/sub_menu_15/index.html"
    sub_menu_img_3.style.top = "-60px"
    sub_menu_img_3.style.left = "-25px"
    sub_menu_img_3.style.width = "210px"
    sub_menu_img_3.style.height = "170px"
    sub_menu_txt_a_3.innerHTML = '#F15 CODE'
    sub_menu_txt_b_3.innerHTML = 'Spaghetti'
    sub_menu_txt_c_3.innerHTML = '$350'
    // /////////////////////////////////////////////////
    sub_menu_img_4.setAttribute('src','../file/fast_food_4.png')
    sub_menu_link_4.href = "../SUB-MENU/sub_menu_16/index.html"
    sub_menu_img_4.style.top = "-40px"
    sub_menu_img_4.style.left = "5px"
    sub_menu_img_4.style.width = "140px"
    sub_menu_img_4.style.height = "125px"
    sub_menu_txt_a_4.innerHTML = '#F16 CODE'
    sub_menu_txt_b_4.innerHTML = 'Salad'
    sub_menu_txt_c_4.innerHTML = '$350'
    // ////////////////////////////////////////////////
    sub_menu_img_5.setAttribute('src','../file/fast_food_5.png')
    sub_menu_link_5.href = "../SUB-MENU/sub_menu_17/index.html"
    sub_menu_img_5.style.top = "-40px"
    sub_menu_img_5.style.left = "10px"
    sub_menu_img_5.style.width = "135px"
    sub_menu_img_5.style.height = "130px"
    sub_menu_txt_a_5.innerHTML = '#F17 CODE'
    sub_menu_txt_b_5.innerHTML = 'SandWitch'
    sub_menu_txt_c_5.innerHTML = '$350'
    // //////////////////////////////////////////////
    sub_menu_img_6.setAttribute('src','../file/fast_food_6.png')
    sub_menu_img_6.style.top = "-80px"
    sub_menu_img_6.style.left = "0px"
    sub_menu_img_6.style.width = "170px"
    sub_menu_img_6.style.height = "150px"
    sub_menu_txt_a_6.innerHTML = '#F18 CODE'
    sub_menu_txt_b_6.innerHTML = 'Soft Cake'
    sub_menu_txt_c_6.innerHTML = '$300'
}
const fun_4 = () =>{
    sub_menu_box_1.style.background = 'linear-gradient(45deg,#fd2424,#f79560)'
    sub_menu_box_1.style.boxShadow = '1px 10px 13px 0 rgba(253, 36, 36,0.6);'
    sub_menu_box_2.style.background = 'linear-gradient(45deg,#fd2424,#f79560)'
    sub_menu_box_2.style.boxShadow = '1px 10px 13px 0 rgba(253, 36, 36,0.6);'
    sub_menu_box_3.style.background = 'linear-gradient(45deg,#fd2424,#f79560)'
    sub_menu_box_3.style.boxShadow = '1px 10px 13px 0 rgba(253, 36, 36,0.6);'
    /////////////////////////////////////////////////////////////////////////////
    sub_menu_img_1.setAttribute('src','../file/juice_1.png')
    sub_menu_link_1.href = "../SUB-MENU/sub_menu_19/index.html"
    sub_menu_img_1.style.top = "-60px"
    sub_menu_img_1.style.left = "15px"
    sub_menu_img_1.style.width = "130px"
    sub_menu_img_1.style.height = "160px"
    sub_menu_txt_a_1.innerHTML = '#J19 CODE'
    sub_menu_txt_b_1.innerHTML = 'Avocado Juice'
    sub_menu_txt_c_1.innerHTML = '$25'
    //////////////////////////////////////////////////////////////////////
    sub_menu_img_2.setAttribute('src','../file/juice_2.png')
    sub_menu_link_2.href = "../SUB-MENU/sub_menu_20/index.html"
    sub_menu_img_2.style.top = "-60px"
    sub_menu_img_2.style.left = "0px"
    sub_menu_img_2.style.width = "130px"
    sub_menu_img_2.style.height = "190px"
    sub_menu_txt_a_2.innerHTML = '#J20 CODE'
    sub_menu_txt_b_2.innerHTML = 'Banana Jusice'
    sub_menu_txt_c_2.innerHTML = '$25'
    /////////////////////////////////////////////////
    sub_menu_img_3.setAttribute('src','../file/juice_3.png')
    sub_menu_link_3.href = "../SUB-MENU/sub_menu_21/index.html"
    sub_menu_img_3.style.top = "-70px"
    sub_menu_img_3.style.left = "0px"
    sub_menu_img_3.style.width = "140px"
    sub_menu_img_3.style.height = "160px"
    sub_menu_txt_a_3.innerHTML = '#J21 CODE'
    sub_menu_txt_b_3.innerHTML = 'Orange Juice'
    sub_menu_txt_c_3.innerHTML = '$35'
    /////////////////////////////////////////////////
    sub_menu_img_4.setAttribute('src','../file/juice_4.png')
    sub_menu_link_4.href = "../SUB-MENU/sub_menu_22/index.html"
    sub_menu_img_4.style.top = "-70px"
    sub_menu_img_4.style.left = "5px"
    sub_menu_img_4.style.width = "160px"
    sub_menu_img_4.style.height = "190px"
    sub_menu_txt_a_4.innerHTML = '#J22 CODE'
    sub_menu_txt_b_4.innerHTML = 'Papaya Juice'
    sub_menu_txt_c_4.innerHTML = '$35'
    ////////////////////////////////////////////////
    sub_menu_img_5.setAttribute('src','../file/juice_5.png')
    sub_menu_link_5.href = "../SUB-MENU/sub_menu_23/index.html"
    sub_menu_img_5.style.top = "-60px"
    sub_menu_img_5.style.left = "-20px"
    sub_menu_img_5.style.width = "135px"
    sub_menu_img_5.style.height = "160px"
    sub_menu_txt_a_5.innerHTML = '#J23 CODE'
    sub_menu_txt_b_5.innerHTML = 'Chocolate Shacke'
    sub_menu_txt_c_5.innerHTML = '$30'
    //////////////////////////////////////////////
    sub_menu_img_6.setAttribute('src','../file/juice_6.png')
    sub_menu_link_6.href = "../SUB-MENU/sub_menu_24/index.html"
    sub_menu_img_6.style.top = "-70px"
    sub_menu_img_6.style.left = "0px"
    sub_menu_img_6.style.width = "150px"
    sub_menu_img_6.style.height = "160px"
    sub_menu_txt_a_6.innerHTML = '#J24 CODE'
    sub_menu_txt_b_6.innerHTML = 'Strow Berry Juice'
    sub_menu_txt_c_6.innerHTML = '$30'
}
const search_list = [
    "cheese burger","bean burger","mushroom burger","beef burger","salmon burger","veggie burger","cheese pizza","pepperoni pizza","margarita pizza","buffalo pizza","chicken pizza","special pizza",'hot deg','chips','spaghetti','salad','cake','sandwitch','avocado juice','banana juice','orange juice','papaya juice','chocolate shake','strow berry juice',
]
const links = [
    "../SUB-MENU/sub_menu_1/index.html",
    "../SUB-MENU/sub_menu_2/index.html",
    "../SUB-MENU/sub_menu_3/index.html",
    "../SUB-MENU/sub_menu_4/index.html",
    "../SUB-MENU/sub_menu_5/index.html",
    "../SUB-MENU/sub_menu_6/index.html",
    "../SUB-MENU/sub_menu_7/index.html",
    "../SUB-MENU/sub_menu_8/index.html",
    "../SUB-MENU/sub_menu_9/index.html",
    "../SUB-MENU/sub_menu_10/index.html",
    "../SUB-MENU/sub_menu_11/index.html",
    "../SUB-MENU/sub_menu_12/index.html",
    "../SUB-MENU/sub_menu_13/index.html",
    '../SUB-MENU/sub_menu_14/index.html',
    '../SUB-MENU/sub_menu_15/index.html',
    '../SUB-MENU/sub_menu_16/index.html',
    '../SUB-MENU/sub_menu_17/index.html',
    '../SUB-MENU/sub_menu_18/index.html',
    '../SUB-MENU/sub_menu_19/index.html',
    '../SUB-MENU/sub_menu_20/index.html',
    '../SUB-MENU/sub_menu_21/index.html',
    '../SUB-MENU/sub_menu_22/index.html',
    '../SUB-MENU/sub_menu_23/index.html',
    '../SUB-MENU/sub_menu_24/index.html',
]
const link_changed = document.querySelector('#result li a')
const autocomplete = document.querySelector('#autocomplete')
const resultHTML = document.querySelector('#result')
autocomplete.oninput = function () {
    let results = [] 
    const userInput = this.value.toLowerCase()
    resultHTML.innerHTML = ""
    if (userInput.length > 0){
        search_list.forEach ( (curData) => {
            if(userInput === curData.slice(0, userInput.length)){
                indexer = search_list.indexOf(curData)
                const maper = links[indexer]
                resultHTML.innerHTML += "<li><a href='" + maper + "'>" + curData + "</a></li>"
            }
        } )
    }
}