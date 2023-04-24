function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    function moveWithArrowKeys(left, bottom, handleDirectionChange){  //define function inside of move and attach it to the object we return
            let direction = null;
            let x = left;
            let y = bottom;

            element.style.left = x + 'px'
            element.style.bottom = y + 'px'

            function moveCharacter(){ //wrap directions in function
                if(direction === 'west') {    //defined what "direction" and name of direction would document
                    x = x - 1
                }
                if(direction === 'east') {
                    x = x + 1
                }
                if(direction === 'south') {
                    y = y - 1
                }
                if(direction === 'north') {
                    y = y + 1
                }
            
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            }
            
            setInterval(moveCharacter, 1)                  //passes the funtion to setInterval and moves greenie every 1 millisecond
            
            document.addEventListener('keydown', function (e){   //change greenie's direction with arrow keys
            
                if(e.repeat) return;                  //Where do "e.repeat, e.key,"come from? Not defined in program
            
                if(e.key === "ArrowLeft"){
                    direction ='west'
                }
                if(e.key === 'ArrowUp'){
                    direction = 'north'
                }
                if (e.key === "ArrowRight"){
                    direction = 'east'
                }
                if (e.key === 'ArrowDown'){
                    direction = 'south'
                }
                handleDirectionChange(direction)   //callback where we change the direction variable When we add "direction to callback we are putting callback into scope"
            })                          //Getting error message about using "callback" should I name this something else? What is the name of the function here?
            
            document.addEventListener('keyup', function (e){    //greenie stops when key is lifted up
                direction = null
                handleDirectionChange(direction)     //callback where we change the direction variable putting callback into scope. Getting error messages about using "Callback"
            })                          //console.log'd direction, and it came back as not defined.
    }

    return{
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

  