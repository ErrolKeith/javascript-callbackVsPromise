
//using callbacks
eatBreakfast(function(){
    eatLunch(function(){
        eatDinner(function(){
            eatDessert()
        })
    })
})
  
//functions with timeouts set to prevent function completion in the sequential order they are called.
function eatBreakfast(callback) {
console.log("The eatBreakfast function started executing.")
setTimeout(function() {
    console.log("You just ate breakfast.")
    if (callback) callback()
}, 800)
}

function eatLunch(callback) {
console.log("The eatLunch function started executing.")
setTimeout(function() {
    console.log("You just ate lunch.")
    if (callback) callback()
}, 300)
}

function eatDinner(callback) {
console.log("The eatDinner function started executing.")
setTimeout(function() {
    console.log("You just ate dinner.")
    if (callback) callback()
}, 600)
}

function eatDessert(callback) {
console.log("The eatDessert function started executing.")
setTimeout(function() {
    console.log("You just ate dessert.")
    if (callback) callback()
}, 40)
}
