//////////////////SETUP////////////////////
// Close all other index.html files and open the index.html file in javascript-4/index.html.

//////////////////Step 1////////////////////
// Create a new array called 'faveColors' and assign it a value of your three favorite colors as strings.
// Create an array called 'faveColors' and set it your three favorite colors as strings

const faveColors = ['blue', 'black', 'red']

// Create an object called 'me' that has these keys: firstname, superHeroName, homeTown, superPowers, superPowerXP, profileImage. firstName should be your name as a string. superHeroName should be something fun, feel free to jazz it up. homeTown should be your home town. superPowers should be an array of your three super powers as a string. superPowerXP will be a method that returns a random number between 1-100. profileImage will return a random profile image from this url `https://randomuser.me/api/portraits/med/lego/RANDOMNUM.jpg`. The random image number should be between 1-10.

const me = {
  firstname: 'Josh',
  superHeroName: 'Blastin Hansen',
  homeTown: 'Herriman',
  superPowers: ['licking envelopes', 'eating sand', 'Riding 3 legged girrafes'],
  superPowerXP: function(){
    return Math.floor(Math.random() * 100) + 1
  },
  profileImage: function(){
    return `https://randomuser.me/api/portraits/med/lego/${Math.floor(Math.random() * 10) + 1 }.jpg`
  }
}

// Create three variables to hold some data off your me object. First should be 'regularName' that is the value of your firstName on the me object. Next is 'superName' which is the value of superHeroName on the me object. Last is 'homeTown' which will be the value of homeTown on the me object

const {firstname:regularName, superHeroName: superName, homeTown} = me

//Create a function called 'setColor' that takes in one param called arr. Just to make sure that we only ever have three colors, use splice to trim the array to 3 colors. Next, create a for loop to loop over the array. If any of the colors you chose is 'blue', change it's value to '#4D4DFF' which is just a more appealing color of blue. Outside of the for loop but still inside of setColor, run the function called background. This is a function we created to set the background colors. background expects three arguments which should be the first three indices of your array

function setColor(arr){
  arr.splice(3, 0)
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 'blue'){
      arr[i] = '#4D4DFF'
    }
  }
  background(arr[0], arr[1], arr[2])
}

//Create a function called 'setPowers' that takes in arr as a parameter. Loop over the arr param and run this function for each item in the array, createLi, which will take in the index of the array. The createLi function is a function we create to set the data on the screen and it outside the scope of this project

function setPowers(arr){
  for(let i = 0; i < arr.length; i++){
    createLi(arr[i])
  }
}

//Lastly, create a function called redactInfo that will take in an obj as a paramter. Let's imagine our super hero needs to go undercover and we need to remove all info about them. That is what this function will do. Loop over the object and change each keys value to 'redacted'. Outside of the loop but still in the redactInfo function, run the function redacted() which is a function we created that will update the text on the screen.

function redactInfo(obj){
  for(let key in obj){
    obj[key] = 'redacted'
  }
  redacted()
}
