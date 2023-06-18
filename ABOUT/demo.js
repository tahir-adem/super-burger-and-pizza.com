var nav_icon_1=document.querySelector('.nav_icon .a'),nav_icon_2=document.querySelector('.nav_icon .b'),nav_icon_3=document.querySelector('.nav_icon .c'),nav_icon=document.querySelector('.nav_icon'),nav_box=document.querySelector('nav'),container=document.querySelector('.container')
function nav_open(){nav_icon.setAttribute('onclick','nav_close()')
nav_icon_1.classList.toggle('active')
nav_icon_3.classList.toggle('active')
nav_icon_2.classList.toggle('active')
nav_box.classList.add('nav_active')
container.classList.toggle('container_active')}
function nav_close(){nav_icon.setAttribute('onclick','nav_open()')
nav_icon_1.classList.remove('active')
nav_icon_3.classList.remove('active')
nav_icon_2.classList.remove('active')
nav_box.classList.remove('nav_active')
container.classList.remove('container_active')}