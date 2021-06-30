
//using promises
eatBreakfast().then(()=>{return eatLunch()}).then(()=>{return eatDinner()}).then(()=>{return eatDessert()}).then(()=>{console.log("all meals eaten")})
  
  //functions with timeouts set to prevent function completion in the sequential order they are called.
  function eatBreakfast() {
    return new Promise(function(resolve, reject) {
      console.log("The eatBreakfast function started executing.")
      setTimeout(function() {
        console.log("You just ate breakfast.")
        resolve()
      }, 800)
    })
  }
  
  function eatLunch() {
    return new Promise(function(resolve, reject) {
      console.log("The eatLunch function started executing.")
      setTimeout(function() {
        console.log("You just ate lunch.")
        resolve()
      }, 300)
    })
  }
  
  function eatDinner() {
    return new Promise(function(resolve, reject) {
      console.log("The eatDinner function started executing.")
      setTimeout(function() {
        console.log("You just ate dinner.")
        resolve()
      }, 600)
    })
  }
  
  function eatDessert() {
    return new Promise(function(resolve, reject) {
      console.log("The eatDessert function started executing.")
      setTimeout(function() {
        console.log("You just ate dessert.")
        resolve()
      }, 40)
    })
  }