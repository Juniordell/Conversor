var express = require(express)
var app = express()



function resulton() {

    var to = document.getElementById('to').value
    var input = document.getElementById('input').value
    var from = document.getElementById('from').value
    var result = document.getElementById('result')

    if (from == 'km'){
        switch (to) {
            case ('miles'):
                result.innerHTML = "Result: " + (input * 0.62137) + " mi"
                break
            case ('meters'):
                result.innerHTML = "Result: " + (input * 1000) + " m"
                break
            case ('cm'):
                result.innerHTML = "Result: " + (input * 100000) + " cm"
                break
            case ('dm'):
                result.innerHTML = "Result: " + (input * 10000) + " dm"
                break
            case ('km'):
                result.innerHTML = "Result: " + input + " km"
                break
            case ('ft'):
                result.innerHTML = "Result: " + (input * 3280.8) + " ft" 
                break
            case ('yd'):
                result.innerHTML = "Result: " + (input * 1093.6) + " yd"
                break
        }
    }
    if (from == 'miles'){
        switch (to) {
            case ('miles'):
                result.innerHTML = "Result: " + input + " mi"
                break
            case ('meters'):
                result.innerHTML = "Result: " + (input / 0.00062137) + " m"
                break
            case ('cm'):
                result.innerHTML = "Result: " + (input / 0.0000062137) + " cm"
                break
            case ('dm'):
                result.innerHTML = "Result: " + (input / 0.000062137) + " dm"
                break
            case ('km'):
                result.innerHTML = "Result: " + (input / 0.62137) + " km"
                break
            case ('ft'):
                result.innerHTML = "Result: " + (input * 5280) + " ft"
                break
            case ('yd'):
                result.innerHTML = "Result: " + (input * 1760) + " yd"
                break
        }
    }
    if (from == 'meters'){
        switch (to) {
            case ('miles'):
                result.innerHTML = "Result: " + (input * 0.00062137) + " mi"
                break
            case ('meters'):
                result.innerHTML = "Result: " + input + " m"
                break
            case ('cm'):
                result.innerHTML = "Result: " + (input * 100) + " cm"
                break
            case ('dm'):
                result.innerHTML = "Result: " + (input * 10) + " dm"
                break
            case ('km'):
                result.innerHTML = "Result: " + (input / 1000) + " km"
                break
            case ('ft'):
                result.innerHTML = "Result: " + (input * 3.2808) + " ft"
                break
            case ('yd'):
                result.innerHTML = "Result: " + (input * 1.0936) + " yd"
                break
        }
    }
    if (from == 'cm'){
        switch (to) {
            case ('miles'):
                result.innerHTML = "Result: " + (input / 0.0000062137) + " mi"
                break
            case ('meters'):
                result.innerHTML = "Result: " + (input / 100) + " m"
                break
            case ('cm'):
                result.innerHTML = "Result: " + input + " cm"
                break
            case ('dm'):
                result.innerHTML = "Result: " + (input / 10) + " dm"
                break
            case ('km'):
                result.innerHTML = "Result: " + (input /100000) + " km"
                break
            case ('ft'):
                result.innerHTML = "Result: " + (input * 0.032808) + " ft"
                break
            case ('yd'):
                result.innerHTML = "Result: " + (input * 0.010936) + " yd"
                break
        }
    }
    if (from == 'dm'){
        switch (to) {
            case ('miles'):
                result.innerHTML = "Result: " + (input * 0.000062137) + " mi"
                break
            case ('meters'):
                result.innerHTML = "Result: " + (input * 1000) + " m"
                break
            case ('cm'):
                result.innerHTML = "Result: " + (input * 100000) + " cm"
                break
            case ('dm'):
                result.innerHTML = "Result: " + (input * 10000) + " dm"
                break
            case ('km'):
                result.innerHTML = "Result: " + input + " km"
                break
            case ('ft'):
                result.innerHTML = "Result: " + (input * 0.32808) + " ft"
                break
            case ('yd'):
                result.innerHTML = "Result: " + (input * 0.10936) + " yd"
                break
        }
    }
    if (from == 'ft'){
        switch (to) {
            case ('miles'):
                result.innerHTML = "Result: " + (input * 0.00018939) + " mi"
                break
            case ('meters'):
                result.innerHTML = "Result: " + (input / 3.2808) + " m"
                break
            case ('cm'):
                result.innerHTML = "Result: " + (input / 0.032808) + " cm"
                break
            case ('dm'):
                result.innerHTML = "Result: " + (input / 0.32808) + " dm"
                break
            case ('km'):
                result.innerHTML = "Result: " + (input / 3280.8) + " km"
                break
            case ('ft'):
                result.innerHTML = "Result: " + input + " ft"
                break
            case ('yd'):
                result.innerHTML = "Result: " + (input * 0.33333) + " yd"
                break
        }
    }
    if (from == 'yd'){
        switch (to) {
            case ('miles'):
                result.innerHTML = "Result: " + (input * 0.00056818) + " mi"
                break
            case ('meters'):
                result.innerHTML = "Result: " + (input / 1.0936) + " m"
                break
            case ('cm'):
                result.innerHTML = "Result: " + (input / 0.010936) + " cm"
                break
            case ('dm'):
                result.innerHTML = "Result: " + (input / 0.10936) + " dm"
                break
            case ('km'):
                result.innerHTML = "Result: " + (input / 1093.6) + " km"
                break
            case ('ft'):
                result.innerHTML = "Result: " + (input * 3) + " ft"
                break
            case ('yd'):
                result.innerHTML = "Result: " + input + " yd"
                break
        }
    }
    if (from == 'km'){
        switch (to) {
            case ('miles'):
                result.innerHTML = "Result: " + (input * 0.62137) + " mi"
                break
            case ('meters'):
                result.innerHTML = "Result: " + (input * 1000) + " m"
                break
            case ('cm'):
                result.innerHTML = "Result: " + (input * 100000) + " cm"
                break
            case ('dm'):
                result.innerHTML = "Result: " + (input * 10000) + " dm"
                break
            case ('km'):
                result.innerHTML = "Result: " + input + " km"
                break
        }
    }
    if (from == 'km'){
        switch (to) {
            case ('miles'):
                result.innerHTML = "Result: " + (input * 0.62137) + " mi"
                break
            case ('meters'):
                result.innerHTML = "Result: " + (input * 1000) + " m"
                break
            case ('cm'):
                result.innerHTML = "Result: " + (input * 100000) + " cm"
                break
            case ('dm'):
                result.innerHTML = "Result: " + (input * 10000) + " dm"
                break
            case ('km'):
                result.innerHTML = "Result: " + input + " km"
                break
        }
    }
    if (from == 'km'){
        switch (to) {
            case ('miles'):
                result.innerHTML = "Result: " + (input * 0.62137) + " mi"
                break
            case ('meters'):
                result.innerHTML = "Result: " + (input * 1000) + " m"
                break
            case ('cm'):
                result.innerHTML = "Result: " + (input * 100000) + " cm"
                break
            case ('dm'):
                result.innerHTML = "Result: " + (input * 10000) + " dm"
                break
            case ('km'):
                result.innerHTML = "Result: " + input + " km"
                break
        }
    }
}

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umber listening on port %s', port)
})