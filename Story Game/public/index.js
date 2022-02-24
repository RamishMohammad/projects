console.log("Text Adventure Game")

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('options')

function startGame() {
  showTextNode(1)
}

function showTextNode(textNodeIndex) {

  
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    
    var button = document.createElement('id')
 
    button.setAttribute("id", "choice")
      button.innerText = option.text
      button.classList.add('choice-box')
      button.setAttribute("id", "choice")
      button.addEventListener('mouseover', function() { 
        button.style.cursor = "pointer";
        button.style.color = '#594F46';
        button.style.backgroundColor = '#E0B285';
      })
      button.addEventListener('mouseout', function() { 
        button.style.cursor = "none";
        button.style.color = '#E0B285';
        button.style.backgroundColor = '#594F46';
      })
      button.addEventListener('click', () => selectOption(option))
      
      
      optionButtonsElement.appendChild(button)
    
  })
}

function changeImage(a){
  document.getElementById('img').src = a
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  if (nextTextNodeId == 3){
    changeImage("imgs/brothel2.png")
  }
  else if (nextTextNodeId == 1){ 
    changeImage("imgs/street.png")
  }
  else if (nextTextNodeId == 3.21){ 
    changeImage("imgs/street.png")
  }
  else if (nextTextNodeId == 2){ 
    changeImage("imgs/salon.png")
  }
  
  else if (nextTextNodeId == 5.112){ 
    changeImage("imgs/merked.png")
  }
  else if(nextTextNodeId == 5.1112){
    changeImage("imgs/treasure.png")
  }
  
  else if (nextTextNodeId == 3.1){ 
    changeImage("imgs/stagecoach1.png")
  }

  else if (nextTextNodeId == 3.11){ 
    changeImage("imgs/stagecoach-loud.png")
  }

  else if (nextTextNodeId == 3.12){ 
    changeImage("imgs/ambush-night.png")
  }

  else if (nextTextNodeId == 3.111){ 
    changeImage("imgs/jail.png")
  }

  else if (nextTextNodeId == 3.112){ 
    changeImage("imgs/stagecoach-win.png")
  }

  else if (nextTextNodeId == 3.121){ 
    changeImage("imgs/dave-rob.png")
  }
  
  else if (nextTextNodeId == 3.122){ 
    changeImage("imgs/ambush-win.png")
  }

  else if (nextTextNodeId == 3.222){ 
    changeImage("imgs/arrested.png")
  }

  else if (nextTextNodeId == 4.1111){
    changeImage("imgs/merked.png")
  }

  else if (nextTextNodeId == 4){ 
    changeImage("imgs/talk-to-guy.png")
  }

  else if (nextTextNodeId == 2.1){ 
    changeImage("imgs/saloon-fight.png")
  }

  else if (nextTextNodeId == 2.2){ 
    changeImage("imgs/mysterious-figure.png")
  }

  else if (nextTextNodeId == 4.1){ 
    changeImage("imgs/doll-talk.png")
  }

  else if (nextTextNodeId == 4.11){ 
    changeImage("imgs/behind-you.png")
  }

  else if (nextTextNodeId == 4.111){ 
    changeImage("imgs/alley.png")
  }

  else if (nextTextNodeId == 4.122){ 
    changeImage("imgs/merked.png")
  }
   
  else if (nextTextNodeId == 3.2){ 
    changeImage("imgs/woman.png")
  }

  else if (nextTextNodeId == 3.211){ 
    changeImage("imgs/arrested.png")
  }

  else if (nextTextNodeId == 3.212){ 
    changeImage("imgs/outlaw.png")
  }

  else if (nextTextNodeId == 5.2){ 
    changeImage("imgs/horse.png")
  }

  else if (nextTextNodeId == 5.1111){ 
    changeImage("imgs/bonked.png")
  }

  else if (nextTextNodeId == 5.1){ 
    changeImage("imgs/key-shelf.png")
  }

  else if (nextTextNodeId == 5.11){ 
    changeImage("imgs/shopkeeper.png")
  }

  else if (nextTextNodeId == 5.111){ 
    changeImage("imgs/stickup.png")
  }

  else if (nextTextNodeId == 4.2){ 
    changeImage("imgs/note.png")
  }

  else if (nextTextNodeId == 3.2211){ 
    changeImage("imgs/dave-shot.png")
  }

  else if (nextTextNodeId == 5){ 
    changeImage("imgs/shop.png")
  }

  else if (nextTextNodeId == 4.122){ 
    changeImage("imgs/inn.png")
  }
  
  else if (nextTextNodeId == 4.22){ 
    changeImage("imgs/inn.png")
  }

  else if (nextTextNodeId == 4.112){ 
    changeImage("imgs/merked.png")
  }

  else if (nextTextNodeId == 4.21){ 
    changeImage("imgs/grave.png")
  }

  else if (nextTextNodeId == 3.2121){ 
    changeImage("imgs/friends.png")
  }

  else if (nextTextNodeId == 3.22){ 
    changeImage("imgs/money.png")
  }

  else if (nextTextNodeId == 3.221){ 
    changeImage("imgs/train.png")
  }

  else if (nextTextNodeId == 5.12){ 
    changeImage("imgs/merked.png")
  }

  else if (nextTextNodeId == 3.2122){ 
    changeImage("imgs/merked.png")
  }

  else if (nextTextNodeId == 4.12){ 
    changeImage("imgs/note.png")
  }

  else if (nextTextNodeId == 4.121){ 
    changeImage("imgs/grave.png")
  }

  else if (nextTextNodeId == 4.1112){ 
    changeImage("imgs/bank-or-herbs.png")
  }

  else if (nextTextNodeId == 4.11121){ 
    changeImage("imgs/merked.png")
  }

  else if (nextTextNodeId == 4.11122){ 
    changeImage("imgs/merked.png")
  }

  else if (nextTextNodeId == 3.2212){ 
    changeImage("imgs/bear.png")
  }

  else if (nextTextNodeId == 3.22121){ 
    changeImage("imgs/bear-kill.png")
  }

  else if (nextTextNodeId == 3.22122){ 
    changeImage("imgs/play-dead.png")
  }

  showTextNode(nextTextNodeId)
}

const textNodes = [{
        id: 1,
        text: 'You happen upon a new town. You find yourself wandering, do you go into...',
        options: [{
                text: 'The Saloon..',
               
                nextText: 2
            },
            {
                text: 'The Brothel..',
                nextText: 3
            }
        ]
    },

    {
        id: 2,
        text: 'You Enter the Saloon and some guy by the name of Burly Bob tries to start a fight with you. Do you fight him or retreat?',
        options: [{
                text: 'You fight him.',
                
                nextText: 2.1
            },
            {
                text: 'You leave the saloon.',
                
                nextText: 2.2
            }
        ]
    },

    {
        id: 2.1,
        text: 'Turns out Burly Bob was stronger than expected. He picks up and nearby chair, hits you in the head, and you die.',
        options: [{
                text: 'Restart',
                
                nextText: 1
            },
        ]
    },

    {
        id: 2.2,
        text: 'You decided Burly Bob was bad news and on your way out of the saloon you see a mysterious figure in the distance. Do you approach or do you keep your distance and go elsewhere?',
        options: [{
                text: 'You approach the guy',
                
                nextText: 4
            },
            {
                text: 'You go elsewhere',
                
                nextText: 5
            }
        ]
    },

    {
        id: 3,       
        text: 'You enter the Brothel. Drunkard Dave approaches and informs you of a stagecoach that is approaching town that he wants to rob. Do you take the score or ignore him?',
        options: [{
                text: 'Take the score..',
                
                nextText: 3.1
            },
            {
                text: 'Ignore him..',
                
                nextText: 3.2
            }
        ]
    },

    { 
      id: 3.1, 
      text: 'You take the score and follow Dave to the where the stagecoach is supposed to be. He gives you 2 options: go in loud, or stay quiet and take them by surprise.',
      options: [{
              text: 'Go in loud..',

              nextText: 3.11
          }, 
          { 
              text: 'Go in quiet..',

              nextText: 3.12
          }
      ]
    },

    {
      id: 3.11,       
      text: 'You and Dave go in guns blazing and stop the stagecoach in its tracks. You take off with everything you can carry, but since you went in loud, the local lawmen are on your trail. Do you start a gunfight with them, or try to outrun them?',
      options: [{
              text: 'Start a gunfight..',
                
              nextText: 3.111
          },
          {
              text: 'Try to outrun them..',
                
              nextText: 3.112
          }
      ]
    },

    { 
      id: 3.111,
      text: 'You start shooting at the lawmen, but since you aren’t a great shot and Dave is drunk, neither of you are able to fight off the lawmen. You are both arrested and thrown in jail.', 
      options: [{
              text: 'Restart',

              nextText: 1
          },
      ]
    },

    { 
      id: 3.112,
      text: 'You both take off and try to outrun the lawmen. They nearly catch you, but as the sun sets the darkness makes it difficult for them to see you, and you escape.',
      options: [{
              text: 'Restart', 

              nextText: 1
          },
      ]
    },

    { 
      id: 3.12, 
      text: 'You both follow the stagecoach until it’s dark and ambush it quietly. The heist is successful, and while you are sneaking away Dave pulls a gun on you and commands you to give him your share. Do you give it to him, or pull your gun?',
      options: [{
              text: 'Give it to him..', 

              nextText: 3.121
          },
          {
              text: 'Pull your gun..', 

              nextText: 3.122
          }
      ]
    },

    { 
      id: 3.121, 
      text: 'You decide not to fight back and give up your share of the loot. Dave takes it and rides away, leaving you alone in the wilderness with nothing. ', 
      options: [{
              text: 'Restart', 

              nextText: 1
          },
      ]
    },

    {
      id: 3.122,  
      text: 'You pull your gun and shoot Dave before he is able to react. You make off with all the loot and ride off over the horizon.', 
      options: [{
              text: 'Restart', 

              nextText: 1
          },
        ]
      },

       { 
        text: 'You pull your gun and shoot, but you miss and Dave shoots back. He hits you in the chest and you fall. Drunkard Dave takes all the loot and leaves you for dead.', 
        options: [{
                text: 'Restart', 

                nextText: 1
            },
        ]
      },
    

    {
      id: 3.2,
      text:'You are not going to believe a drunkard’s nonsense and go have some fun. When you woke up the next morning, you found a body lying beside you, the vert same woman you spent the night with.',
      options:[
        {
          text: 'Ran away',
          nextText: 3.21
        },
        {
          text:'Tell the madam what happened',
          nextText: 3.22
        }
      ]
    },
   
    {
      id: 3.21,
      text:'You\'ve just arrived in this town and no one knows you. So you decide to run away. Where do want to go?',
      options:[
        {
          text: 'Hanging out the town',
          nextText: 3.211
        },
        {
          text:'Leave town',
          nextText: 3.212
        }
      ]
    },

    {
      id:3.211,
      text:'When you\'re wandering around town trying to have some fun, a lawman stops you. The brothel madam accuses an outlander of killing one of her women, and you are the only new person to the town.The lawman has caught you and a hanging awaits you.',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:3.212,
      text:'You head south and come across an outlaw gang robbing a farm. They notice you and you understand that it\'s time to make your attitude known. ',
      options:[
        {
          text:'Join them',
          nextText: 3.2121
        },
        {
          text:'Fight them',
          nextText: 3.2122
        }
      ]
    },

    {
      id:3.2121,
      text:'“I\'m here to join you,. you shout to them, “I just arrived here with nothing and want to find a job to make a living. I can fight and shoot.” They accept you. ',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:3.2122,
      text:'There is no way you can beat a half dozen people with guns and horses…  ',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id: 3.22,
      text:'You tell the madam what happened, and she puts all the blame on you and thinks you are solely responsible. But as long as you pay enough, she can also pretend that this did not happen.',
      options:[
        {
          text: 'Pay the money',
          nextText: 3.221
        },
        {
          text:'Call a lawman to investigate',
          nextText: 3.222
        }
      ]
    },

    {
      id: 3.221,
      text:' You are poor to the bone and need to earn some money to fill your stomach. You hear that a stage station is recruiting people to help unload the goods.',
      options:[
        {
          text: 'Work in stage station',
          nextText: 3.2211
        },
        {
          text:'Find another job',
          nextText: 3.2212
        }
      ]
    },

    {
      id:3.2211,
      text:'It\'s getting dark, and while you\'re busy moving goods, you suddenly hear a gunshot.Then you are in so much pain that you can\'t breathe and fall to the ground. Before you lose consciousness, you see a familiar-looking person walking towards you, it\'s Drunkard Dave… ',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:3.2212,
      text:'This city is more exclusive of outlanders than you think. No one wants to hire you. You are tired and hungry, and finally you have to leave the town. You plan to hunt for food and unfortunately, there is a bear who thinks the same as you.',
      options:[
        {
          text:'Fight',
          nextText: 3.22121
        },
        {
          text:'Play dead',
          nextText: 3.22122
        }
      ]
    },

    {
      id:3.22121,
      text:'You don\'t have enough strength to hold the gun steady after not eating all day. Two shots are fired and you miss, but The bear has pounced on you... ',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:3.22122,
      text:'The bear sniffs you and steps on you. The bear is gone but you feel your insides are crushed by the bear. You kept coughing up blood and finally lost consciousness and collapsed in the woods… ',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },  
    
    {
      id: 3.222,
      text:' The lawman comes to check the body. He convinces that you killed her and you are responsible for it. You are arrested and thrown in jail.',
      options:[
        {
          text: 'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:4,
      text:'As you approach the guy, he turns slowly asking you if you know how’s Anabelle? Do you respond back or Do you leave?',
      options:[
        {
          text:'You Respond',
          nextText: 4.1
        },
        {
          text:'You Leave',
          nextText: 4.2
        }
      ]
    },

    {
      id:4.1,
      text:'You felt shivers down your spine and you shouted back “HOW DO YOU KNOW ABOUT HER?”. The man in black responds “My mother gave me her when I was 7, ever since then I have been trying to find it. Do you know where it is?” Do you respond back with the coordinates of the doll or you refuse not to?',
      options:[
        {
          text:'Do you give him the co-ordinates',
          nextText: 4.11
        },
        {
          text:'You refuse to',
          nextText: 4.12
        }
      ]
    },

    {
      id:4.11,
      text:'In order to protect yourself you give him the coordinates. You get relieved as you didnt want anything to do with that damn doll anyways. You suddenly hear someone walk up behind you. Do you look back or do you ignore it?',
      options:[
        {
          text:'Do you look behind',
          nextText: 4.111
        },
        {
          text:'You ignore it',
          nextText: 4.112
        }
      ]
    },

    {
      id:4.111,
      text:'As soon as you look back you jump out of the way and hide behind the dumpster. The person who was pointing the gun at you kept coming closer to you. You took out your gun and you pointed it at the mysterious guy. Do you shoot the mysterious guy or do you blind fire the alley guy?',
      options:[
        {
          text:'Do you shoot the mysterious guy',
          nextText: 4.1111
        },
        {
          text:'You blind fire the alley guy',
          nextText: 4.1112
        }
      ]
    },

    {
      id:4.1111,
      text:'The alley guy comes in closer and closer slowly and starts shooting as soon as he sees you. You were shot 4 times and you died on spot',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:4.1112,
      text:'As you blind fire the alley guy the mysterious guy tells his man to stop and moves in closer to you and says if you want to live you’ll go rob the bank or you can go and steal some herbs from the sorcerer. Do you rob the bank or steal the herbs? ',
      options:[
        {
          text:'You go to rob a bnak',
          nextText: 4.11121
        },
        {
          text:'You go to steal the herbs',
          nextText: 4.11122
        }
      ]
    },

    {
      id:4.11121,
      text:'As you try robbing the bank alone the peronel all well trained smoked you and this is where your journey ends here.',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:4.11122,
      text:'As you try to steal the herbs from a gang a guy sees you creeping up behind him and starts shooting you. At this point you already knew you were dead so you shoot yourself and end your misery.',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:4.112,
      text:'You do not look behind and you suddenly hear the revolver load and you get shot in the back. This is where your journey ends.',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:4.12,
      text:'As you leave in a haste and are walking down the street you feel as if someone has their eyes on you. When you could not take it anymore you go inside a pub and try to wait it out. The waiter passing by leaves you a drink with a note saying “Meet me outside the graveyard at exactly 23:00”. Do you go to meet or do you go to the inn?',
      options:[
        {
          text:'You leave for the graveyard',
          nextText: 4.121
        },
        {
          text:'You go to rest at the INN',
          nextText: 4.122
        }
      ]
    },

    {
      id:4.121,
      text:'As soon as you arrive you hear someone circling you.. As you try to take out your weapon someone grabs you from the back and throws you in a grave already dugs and buries you alive…',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:4.122,
      text:'When you decided not to show up they got hasty and broke into your INN to kill you...',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:4.2,
      text:'As you leave in a haste and are walking down the street you feel as if someone has their eyes on you. When you could not take it anymore you go inside a pub and try to wait it out. The waiter passing by leaves you a drink with a note saying “Meet me outside the graveyard at exactly 23:00”. Do you go to meet or do you go to the inn?',
      options:[
        {
          text:'You leave for the grave yard',
          nextText: 4.21
        },
        {
          text:'You go to the INN to rest',
          nextText: 4.22
        }
      ]
    },

    {
      id:4.21,
      text:'As soon as you arrive you hear someone circling you.. As you try to take out your weapon someone grabs you from the back and throws you in a grave already dugs and buries you alive… ',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
      id:4.22,
      text:'When you decided not to show up they got hasty and broke into your INN to kill you. ',
      options:[
        {
          text:'Restart',
          nextText: 1
        },
      ]
    },

    {
        id: 5,
        text: "You decided to leave the mysterious figure alone and explore more of the town. You notice a small shop by the name of Tristan's Trinkets. Do you enter or continue searching the town?",
        options: [{
                text: 'You enter the shop.',
                
                nextText: 5.1
            },
            {
              text: 'You continue searching the town.',
              
              nextText: 5.2
            }
        ]
    },

    {
        id: 5.1,
        text: "You enter Tristan's Trinkets and see a bunch of miscellaneous items that have no particular value. Then, something catches your eye behind the counter, it's a large key. Do you ask the shopkeeper about it or do you try to steal it?",
        options: [{
                text: 'You ask the shopkeeper.',
                
                nextText: 5.11
            },
            {
              text: 'You try to steal the key.',
              
              nextText: 5.12
          }
        ]
    },

    {
        id: 5.11,
        text: "You ask the shopkeeper about the large key and they try to nervously dodge the question. Do you threaten the shopkeeper for the key or decide to leave him be?",
        options: [{
                text: 'You pull out your gun and threaten the shopkeeper.',
                
                nextText: 5.111
            },
            {
              text: 'You decide to leave them alone and continue searching the town.',
              
              nextText: 5.112
            }
        ]
    },

    {
        id: 5.111,
        text: "You pull out your gun and demand the shopkeeper to tell you what the key is for. They tells you it's for the chest of ancient treasure they discovered a while back. They tell you that you can have it if you spare them. Do you shoot them or spare them?",
        options: [{
                text: 'You shoot them.',
                
                nextText: 5.1111
            },
            {
              text: 'You spare them.',
              
              nextText: 5.1112
          }
        ]
    },

    {
        id: 5.1111,
        text: "You decided to kill the shopkeeper and take the treasure for yourself. The sheriff happens to be nearby and heard the gunshot go off. He comes in and arrests you for murdering the shopkeeper.",
        options: [{
                text: 'Restart',
                
                nextText: 1
            },
        ]
    },

    {
        id: 5.1112,
        text: "You decided to trust the shopkeeper and spare them. Turns out they were true to their word and they let you leave with the treasure. You decided to leave town with your newfound wealth before anyone can take it from you. You win!",
        options: [{
                text: 'Restart',
                
                nextText: 1
            },
        ]
    },

    {
        id: 5.112,
        text: "You decided to leave the them alone and continue your exploration of the town. As you're leaving the shop, they pull out a revolver and shoot you in the back killing you.",
        options: [{
                text: 'Restart',
                
                nextText: 1
            },

        ]
    },

    {
        id: 5.12,
        text: "You try to steal the key and the shopkeeper pulls out a revolver and shoots you, you died.",
        options: [{
                text: 'Restart',
                
                nextText: 1
            },
        ]
    },

    {
        id: 5.2,
        text: "As you turn around after taking a look at the shop, you get run over and killed by a wild horse.",
        options: [{
                text: 'Restart',
                
                nextText: 1
            },
        ]
    }

]

startGame()
