const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
let direction = null; //so we can track character with a variable 
let x = 100;
let y = 250;

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

character.style.left = x + 'px'//???
character.style.bottom = y + 'px'
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
})

document.addEventListener('keyup', function (e){    //greenie stops when key is lifted up
    direction = null
})

move(character).to(100, 250)


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)