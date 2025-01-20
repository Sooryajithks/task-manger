//define functions and class
//function to make the first letter capital
function firstCap(word){
    let strings = word.split("")
    strings[0] = strings[0].toUpperCase()
    return strings.join('')
    
}

//function to make all words' first letter to uppercase 
function allCap(sentence){
    let words = sentence.split(' ')
    for (let i=0; i < words.length; i++){
        words[i] = firstCap(words[i])
    }
    return words.join(' ')
}

//defining a class for the task addition
class Profile{
    constructor(name){
        this.name = name
        this.mon = []
        this.tue = []
        this.wed = []
        this.thu = []
        this.fri = []
        this.sat = []
        this.sun = []
    }
    

    //method to add task
    taskAdd(day,task){
        task = task.trim()
        if (day=='monday'){
            if(this.mon.includes(task)==false){
                this.mon.push(task)
            }
            
        }
        else if (day=='tuesday'){
            if(this.tue.includes(task)==false){
                this.tue.push(task)
            }
        }
        else if (day=='wednesday'){
            if(this.wed.includes(task)==false){
                this.wed.push(task)
            }
        }
        else if (day=='thursday'){
            if(this.thu.includes(task)==false){
                this.thu.push(task)
            }
        }
        else if (day=='friday'){
            if(this.fri.includes(task)==false){
                this.fri.push(task)
            }
        }
        else if (day=='saturday'){
            if(this.sat.includes(task)==false){
                this.sat.push(task)
            }
        }
        else if (day=='sunday'){
            if(this.sun.includes(task)==false){
                this.sun.push(task)
            }
        }
    }

    //method to remove task
    taskRemove(day,task){
        if (day==='monday'){
            this.mon = this.mon.filter(function(item){
                return item !== task})
        }
        else if (day==='tuesday'){
            this.tue = this.tue.filter(function(item){
                return item !== task})
        }
        else if (day==='wednesday'){
            this.wed = this.wed.filter(function(item){
                return item !== task})
        }
        else if (day==='thursday'){
            this.thu = this.thu.filter(function(item){
                return item !== task})
        }
        else if (day==='friday'){
            this.fri = this.fri.filter(function(item){
                return item !== task})
        }
        else if (day==='saturday'){
            this.sat = this.sat.filter(function(item){
                return item !== task})
        }
        else if (day==='sunday'){
            this.sun = this.sun.filter(function(item){
                return item !== task})
        }
    }
}

//save the class to the local storage
function storeTasks(prf){
    const profileData = {
        name : prf.name,
        mon: prf.mon,
        tue: prf.tue,
        wed: prf.wed,
        thu: prf.thu,
        fri: prf.fri,
        sat: prf.sat,
        sun: prf.sun
    }
    localStorage.setItem('currentProfile',JSON.stringify(profileData))

}




const createProfile = document.getElementById('createProfile') //division
const nameInput = document.getElementById('nameInput') //input name element
const nameSave = document.getElementById('nameSave') //save button

//add event listener to the input box
nameInput.addEventListener('input', function(){
    //set the default button content and color 
    // when the input is changed
    nameSave.textContent = 'Save'
    nameSave.style.backgroundColor = '#007BFF';
    //remove the next page nav button
    document.getElementById('nextPageButton0').remove()

})



//add the event listener to save button
nameSave.addEventListener('click',function(){
    let nameStr = allCap(nameInput.value.trim())
    nameInput.value = nameStr
    //create a new profile for the given name
    //profile is created with name and empty lists for day tasks
    let currentProfile = new Profile(nameStr) 
    //convert the profile to JSON string and store in localStorage
    storeTasks(currentProfile)
    nameSave.innerHTML = 'saved' //change the button content
    nameSave.style.backgroundColor = 'green'
    //document.getElementById('wlcm').textContent = 'profile saved!'
    if(!document.getElementById('nextPageButton0')){ //if the button does not exist
        const nextPageButton0 = document.createElement('button') //create new button
        nextPageButton0.id = 'nextPageButton0'
        nextPageButton0.innerHTML = `let's goo!`
        createProfile.appendChild(nextPageButton0)
        nextPageButton0.addEventListener('click',function(){
         window.location.href = 'editTask.html' //navigate to next page
        })
    }
    
})