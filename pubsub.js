var I = (function(){
    var events = {}
  
    function subscribe(event, fn) {
      if (events.hasOwnProperty(event)) {
        events[event].push(fn)
      } else {
        events[event] = [fn]
      }
    }
  
    function publish(event, data = {}) {
      if (events.hasOwnProperty(event)) {
        events[event].forEach(fn => fn(data))
      }
    }
  
    return {
      subscribe: subscribe,
      publish: publish
    }
  }())









//   var Game = (function(){
//     var lives = 8
//     var wrongGuess = []
//     var livesdisplay = document.querySelector('#lives')
//     livesdisplay.innerHTML = lives
//     var wrongDisplay = document.querySelector('#wrongguess')
    


//     var guessable = commonWords.filter(function(w){
//         if (w.length >= 3) {
//             return w
//         }})
    
//     var word = guessable[Math.floor(Math.random() * guessable.length)]
//     var wordarr = word.split('')
//     var display = wordarr.map(function(){
//         return '_'
//     })
//     console.log(wordarr)
//     var showWords = document.querySelector('#word')
//     showWords.innerHTML = display.join(' ')
    
//     $('#button').on('click', function(e){
//       e.preventDefault()
//       var input = document.getElementById('input').value
     
//       function guess(letter){
//             if (word.indexOf(letter) !== -1){
//                 for (i = 0; i < word.length; i++){
//                     if (word.charAt(i) === letter)
//                     display[i] = letter
                  
//                 }
//             } else {
//                 wrongGuess.push(letter)
//                 lives = lives - 1
//             }
//         }
//         guess(input)
//         document.getElementById('input').value = ''
//         showWords.innerHTML = display.join(' ')
//         livesdisplay.innerHTML = lives
//         wrongDisplay.innerHTML = wrongGuess.join(' ')
//         if (lives === 0) {
//           alert('LOSER!!!!')
//             window.location.reload(true)}
//         if (display.indexOf('_') === -1) {
//             alert('WE HAVE A WIIENERRRR')
//               window.location.reload(true)}    
//     })
    
   
// }())

