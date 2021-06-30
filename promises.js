// Use the functions eatBreakfast, eatLunch, eatDinner, and eatDessert to eat your meals in the traditional order.
// Hint: Each function returns a promise

eatBreakfast().then(function(){
    return eatLunch()
  }).then(function(){
    return eatDinner()
  }).then(function(){
    return eatDessert()
  }).then(function(){
    console.log("all meals eaten")
  })
  
  // Do NOT modify below this line until instructed to do so.
  function eatBreakfast() {
    return new Promise(function(resolve, reject) {
      console.log("The eatBreakfast function started executing.")
      setTimeout(function() {
        addText("You just ate breakfast.")
        resolve()
      }, 800)
    })
  }
  
  function eatLunch() {
    return new Promise(function(resolve, reject) {
      console.log("The eatLunch function started executing.")
      setTimeout(function() {
        addText("You just ate lunch.")
        resolve()
      }, 300)
    })
  }
  
  function eatDinner() {
    return new Promise(function(resolve, reject) {
      console.log("The eatDinner function started executing.")
      setTimeout(function() {
        addText("You just ate dinner.")
        resolve()
      }, 600)
    })
  }
  
  function eatDessert() {
    return new Promise(function(resolve, reject) {
      console.log("The eatDessert function started executing.")
      setTimeout(function() {
        addText("You just ate dessert.")
        resolve()
      }, 40)
    })
  }
  
  const textDiv = document.getElementById("text")
  function addText(x) {
    textDiv.insertAdjacentHTML('beforeend', `<p>${x}</p>`)
  }