const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 3055;
canvas.height = 1415;

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i));
}

const boundaries = [];
const offset = {
  x: -135,
  y: -350
};



collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      );
    }
  });
});

const characters = [];

// Load images
const villagerImg = new Image();
villagerImg.src = './img/villager/Idle.png';

const image = new Image();
image.src = './img/Pellet Town.png';


const BoboImage = new Image();
BoboImage.src = './img/newqwen.png';

const DogeImage = new Image();
DogeImage .src = './img/perplexity.png';

const DukImage = new Image();
DukImage .src = './img/deepseek.png';
// Initialize players
const GoatseusImage = new Image();
GoatseusImage.src='./img/gemini.png'

const MoodengImage = new Image();
MoodengImage.src='./img/claudeai.png'

const MumuImage = new Image();
MumuImage.src='./img/grokai.png'

const PenguImage = new Image();
PenguImage.src='./img/chatgpt.png'

const PepeImage = new Image();
PepeImage.src='./img/YuanBao.png'

const PnutImage = new Image();
PnutImage.src='./img/KIMI.png'


// const PonkeImage = new Image();
// PonkeImage.src='./img/ponke.png'

// const PopcatImage = new Image();
// PopcatImage.src='./img/popcat.png'

// const TrumpImage = new Image();
// TrumpImage.src='./img/trump.png'

const Bobo = new Sprite({
  position: {
    x: canvas.width / 2 - 132 / 2 / 2,
    y: canvas.height / 2 - 68 / 2
  },
  image: BoboImage,
  frames: { max: 4, hold: 10 },
  sprites: {
    up: BoboImage,
    left:BoboImage,
    right: BoboImage,
    down:BoboImage
  }
});



const Doge = new Sprite({
  position: {
    x: canvas.width / 2 - 100 / 1 / 2,
    y: canvas.height / 2 - 1 / 1
  },
  image: DogeImage,
  frames: { max: 4, hold: 10 },
  sprites: {
    up: DogeImage,
    left:DogeImage,
    right: DogeImage,
    down:DogeImage
  }
});


const Duk = new Sprite({
  position: {
    x: canvas.width / 2 - 888 / 1 / 2,
    y: canvas.height / 2 - 28 / 1
  },
  image: DukImage,
  frames: { max: 4, hold: 10 },
  sprites: {
    up: DukImage,
    left:DukImage,
    right: DukImage,
    down:DukImage
  }
});


const Goatseus= new Sprite({
  position: {
    x: canvas.width / 2 - 122 ,
    y: canvas.height / 2 - 68 / 1
  },
  image: GoatseusImage,
  frames: { max: 4, hold: 10 },
  sprites: {
    up: GoatseusImage,
    left:GoatseusImage,
    right: GoatseusImage,
    down:GoatseusImage
  }
});



const Moodeng= new Sprite({
  position: {
    x: canvas.width / 2 - 999 / 1 / 2,
    y: canvas.height / 2 - 38 / 1
  },
  image: MoodengImage,
  frames: { max: 4, hold: 10 },
  sprites: {
    up: MoodengImage,
    left:MoodengImage,
    right: MoodengImage,
    down:MoodengImage
  }
})



const Mumu= new Sprite({
  position: {
    x: canvas.width / 2 - 1156 / 1 / 2,
    y: canvas.height / 2 - 68 / 1
  },
  image: MumuImage,
  frames: { max: 4, hold: 10 },
  sprites: {
    up:MumuImage,
    left:MumuImage,
    right: MumuImage,
    down:MumuImage
  }
})


const Pengu= new Sprite({
  position: {
    x: canvas.width / 2 - (-1499) / 1 / 2,
    y: canvas.height / 2 - 68 / 1
  },
  image: PenguImage,
  frames: { max: 4, hold: 10 },
  sprites: {
    up:PenguImage,
    left:PenguImage,
    right:PenguImage,
    down:PenguImage
  }
})



const Pepe= new Sprite({
  position: {
    x: canvas.width / 2 - (-1299) / 1 / 2,
    y: canvas.height / 2 - 8 / 1
  },
  image: PepeImage,
  frames: { max: 4, hold: 10 },
  sprites: {
    up:PepeImage,
    left:PepeImage,
    right:PepeImage,
    down:PepeImage
  }
})




const Pnut= new Sprite({
  position: {
    x: canvas.width / 2 - (-1199) / 1 / 2,
    y: canvas.height / 2 - 18 / 1
  },
  image: PnutImage,
  frames: { max: 4, hold: 10 },
  sprites: {
    up:PnutImage,
    left:PnutImage,
    right:PnutImage,
    down:PnutImage
  }
})



// const Popcat= new Sprite({
//   position: {
//     x: canvas.width / 2 - (-1099) / 1 / 2,
//     y: canvas.height / 2 - 28 / 1
//   },
//   image: PopcatImage,
//   frames: { max: 4, hold: 10 },
//   sprites: {
//     up:PopcatImage,
//     left:PopcatImage,
//     right:PopcatImage,
//     down:PopcatImage
//   }
// })




// const Ponke= new Sprite({
//   position: {
//     x: canvas.width / 2 - 42 / 1 / 2,
//     y: canvas.height / 2 - 68 / 1
//   },
//   image: PonkeImage,
//   frames: { max: 4, hold: 10 },
//   sprites: {
//     up:PonkeImage,
//     left:PonkeImage,
//     right:PonkeImage,
//     down:PonkeImage
//   }
// })


// const Trump= new Sprite({
//   position: {
//     x: canvas.width / 2 - (-1599) / 1 / 2,
//     y: canvas.height / 2 - 68 / 1
//   },
//   image: TrumpImage,
//   frames: { max: 4, hold: 10 },
//   sprites: {
//     up:TrumpImage,
//     left:TrumpImage,
//     right:TrumpImage,
//     down:TrumpImage
//   }
// })



const background = new Sprite({
  position: { x: offset.x, y: offset.y },
  image: image
});

// Settings for players
const players = [

  {
    name: 'Bobo',
    sprite:Bobo,
    moveDirection: 'down',
    moveSpeed: 0.5,
    lastDirectionChange: Date.now(),
    directionChangeInterval: 1500,
    isStuck: false,
    stuckTimeout: null,
    email: 'bobo@gmail.com',

  },
  {
    name: 'Doge',
    sprite:Doge,
    moveDirection: 'right',
    moveSpeed: 0.5,
    lastDirectionChange: Date.now(),
    directionChangeInterval: 1500,
    isStuck: false,
    stuckTimeout: null,
    email: 'doge@gmail.com',

  },

  { name: 'Duk',
    sprite:Duk,
    moveDirection: 'right',
    moveSpeed: 0.5,
    lastDirectionChange: Date.now(),
    directionChangeInterval: 1500,
    isStuck: false,
    stuckTimeout: null,
    email: 'duk@gmail.com',

  },

  { name: 'Goatseus',
    sprite:Goatseus,
    moveDirection: 'left',
    moveSpeed: 0.5,
    lastDirectionChange: Date.now(),
    directionChangeInterval: 1500,
    isStuck: false,
    stuckTimeout: null,
    email: 'goatseus@gmail.com',

  },

  { name: 'Moodeng',
    sprite:Moodeng,
    moveDirection: 'left',
    moveSpeed: 0.5,
    lastDirectionChange: Date.now(),
    directionChangeInterval: 1500,
    isStuck: false,
    stuckTimeout: null,
    email: 'moodeng@gmail.com',

  },

  { name: 'Mumu',
    sprite:Mumu,
    moveDirection: 'left',
    moveSpeed: 0.5,
    lastDirectionChange: Date.now(),
    directionChangeInterval: 1500,
    isStuck: false,
    stuckTimeout: null,
    email: 'mumu@gmail.com',

  },

  
  { name: 'Pengu',
    sprite:Pengu,
    moveDirection: 'left',
    moveSpeed: 0.5,
    lastDirectionChange: Date.now(),
    directionChangeInterval: 1500,
    isStuck: false,
    stuckTimeout: null,
    email: 'pengu@gmail.com',

  },

    
  { name: 'Pepe',
    sprite:Pepe,
    moveDirection: 'left',
    moveSpeed: 0.5,
    lastDirectionChange: Date.now(),
    directionChangeInterval: 1500,
    isStuck: false,
    stuckTimeout: null,
    email: 'pepe@gmail.com',

  },


      
  { name: 'Pnut',
    sprite:Pnut,
    moveDirection: 'left',
    moveSpeed: 0.5,
    lastDirectionChange: Date.now(),
    directionChangeInterval: 1500,
    isStuck: false,
    stuckTimeout: null,
    email: 'pnut@gmail.com',

  },


  // { name: 'Ponke',
  //   sprite:Ponke,
  //   moveDirection: 'left',
  //   moveSpeed: 0.5,
  //   lastDirectionChange: Date.now(),
  //   directionChangeInterval: 1500,
  //   isStuck: false,
  //   stuckTimeout: null,
  //   email: 'ponke@gmail.com',

  // },


  // { name: 'Popcat',
  //   sprite:Popcat,
  //   moveDirection: 'left',
  //   moveSpeed: 0.5,
  //   lastDirectionChange: Date.now(),
  //   directionChangeInterval: 1500,
  //   isStuck: false,
  //   stuckTimeout: null,
  //   email: 'popcat@gmail.com',

  // },


  // { name: 'Trump',
  //   sprite:Trump,
  //   moveDirection: 'left',
  //   moveSpeed: 0.5,
  //   lastDirectionChange: Date.now(),
  //   directionChangeInterval: 1500,
  //   isStuck: false,
  //   stuckTimeout: null,
  //   email: 'trump@gmail.com',
 
  // }






];

const directionVectors = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 }
};

// Check collision for a given position
function checkCollision(player, nextPosition) {
  const padding = 5;
  return boundaries.some(boundary =>
      rectangularCollision({
          rectangle1: {
              ...player,
              position: {
                  x: nextPosition.x,
                  y: nextPosition.y
              }
          },
          rectangle2: {
              ...boundary,
              position: {
                  x: boundary.position.x - padding,
                  y: boundary.position.y - padding
              },
              width: boundary.width + padding * 2,
              height: boundary.height + padding * 2
          }
      })
  );
}

// Get available directions for a player
function getAvailableDirections(player, moveSpeed) {
  return Object.entries(directionVectors)
      .filter(([direction, vector]) => {
          const nextPosition = {
              x: player.sprite.position.x + vector.x * moveSpeed,
              y: player.sprite.position.y + vector.y * moveSpeed
          };
          return !checkCollision(player.sprite, nextPosition);
      })
      .map(([direction]) => direction);
}

// Choose a new direction for a player
function chooseNewDirection(player, excludeCurrent = false) {
  const availableDirections = getAvailableDirections(player, player.moveSpeed).filter(
      direction => !excludeCurrent || direction !== player.moveDirection
  );

  if (availableDirections.length === 0) {
      return excludeCurrent ? player.moveDirection : 'up';
  }

  return availableDirections[Math.floor(Math.random() * availableDirections.length)];
}

// Move a player
function movePlayer(player) {
  const sprite = player.sprite;

  sprite.animate = true;
  sprite.image = sprite.sprites[player.moveDirection];

  const vector = directionVectors[player.moveDirection];
  const nextPosition = {
      x: sprite.position.x + vector.x * player.moveSpeed,
      y: sprite.position.y + vector.y * player.moveSpeed
  };

  if (checkCollision(sprite, nextPosition)) {
      if (!player.isStuck) {
          player.isStuck = true;
          player.moveDirection = chooseNewDirection(player, true);

          if (player.stuckTimeout) clearTimeout(player.stuckTimeout);
          player.stuckTimeout = setTimeout(() => {
              player.isStuck = false;
          }, 500);
      }
      return;
  }

  sprite.position.x = nextPosition.x;
  sprite.position.y = nextPosition.y;

  if (!player.isStuck && Date.now() - player.lastDirectionChange > player.directionChangeInterval) {
      if (Math.random() < 0.3) {
          player.moveDirection = chooseNewDirection(player);
          player.lastDirectionChange = Date.now();
      }
  }
}


// Animation loop
function animate() {
  window.requestAnimationFrame(animate);

  background.draw();
  boundaries.forEach(boundary => boundary.draw());
  characters.forEach(character => character.draw());

  players.forEach(player => {
      movePlayer(player);
      player.sprite.draw();
  });
}

animate();

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });

Promise.all([
  loadImage('./img/Pellet Town.png'),
  loadImage('./img/villager/Idle.png'),
  loadImage('./img/newqwen.png'),
  loadImage('./img/perplexity.png'),
  loadImage('./img/deepseek.png'),
  loadImage('./img/gemini.png'),
  loadImage('./img/claudeai.png'),
  loadImage('./img/grokai.png'),
  loadImage('./img/chatgpt.png'),
  loadImage('./img/YuanBao.png'),
  loadImage('./img/KIMI.png')
])
.then(([image, villagerImg, BoboImage, DogeImage, DukImage, GoatseusImage, MoodengImage, MumuImage, PenguImage, PepeImage, PnutImage]) => {
  // Now safely create Sprites and start the animation
  // (insert your code that uses these images here)
})
.catch(console.error);



canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect(); // Get the canvas's position
  const mouseX = event.clientX - rect.left; // Adjust mouse X coordinate
  const mouseY = event.clientY - rect.top;  // Adjust mouse Y coordinate

  players.forEach(player => {
    const sprite = player.sprite;

    // Check if the click is within the bounds of the player sprite
    if (
      mouseX >= sprite.position.x && 
      mouseX <= sprite.position.x + sprite.width &&
      mouseY >= sprite.position.y && 
      mouseY <= sprite.position.y + sprite.height
    ) {
      console.log(player.name, "hai");
      openModal(player.email);
    }
  });
});




async function openModal(email) {
  const modal = document.getElementById('agent-chat-modal');
  const iframe = document.querySelector('#agent-chat-modal iframe');
  const agentNameElement = modal.querySelector('h1');
  const agentBioElement = modal.querySelector('p');

  try {
      // Fetch agent data from the API
      const response = await fetch(`https://ai-saas-backend-seven.vercel.app/user/chat/profile?email=${email}`);
      if (!response.ok) {
          throw new Error('Failed to fetch agent data');
      }
      const agentData = await response.json();
      console.log(agentData)

      // Update modal content with agent data
      agentNameElement.textContent = agentData.data.name || 'Unknown Agent';
      agentBioElement.textContent = agentData.data.shortBio || 'No bio available';

      // Update the iframe's src with the email
      iframe.src = `https://ai-saas-frontend.vercel.app/viewownagent?email=${email}`;

      // Show the modal
      modal.style.display = 'block';
  } catch (error) {
      console.error('Error fetching agent data:', error);
      // Fallback: Show default content
      agentNameElement.textContent = 'Agent Name';
      agentBioElement.textContent = 'Agent Bio';
  }
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('agent-chat-modal');
  modal.style.display = 'none';
}

// Event listener for close button
document.getElementById('closeModalBtn2').addEventListener('click', closeModal);
