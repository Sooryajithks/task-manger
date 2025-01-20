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



//access the current profile on local storage
const parseProfile = JSON.parse(localStorage.getItem('currentProfile'))
let currentProfile = new Profile(parseProfile.name)
currentProfile.mon = parseProfile.mon
currentProfile.tue = parseProfile.tue
currentProfile.wed = parseProfile.wed
currentProfile.thu = parseProfile.thu
currentProfile.fri = parseProfile.fri
currentProfile.sat = parseProfile.sat
currentProfile.sun = parseProfile.sun



//add tasks for each day
const days = document.getElementById('days')
const tasks = document.getElementById('tasks')
const addButton = document.getElementById('taskAdd')
const finishButton = document.getElementById('finish')

//function to save the task
function taskSaver(){
    if(tasks.value){
        currentProfile.taskAdd(days.value,tasks.value)
        addButton.innerHTML = '&#9989'
        setTimeout(()=> (addButton.innerHTML = 'add'),400)
        tasks.value = ''
    }
}

//add event listener to the task input area
tasks.addEventListener('input',function(){
    finishButton.innerHTML = `finish`//change the finish button to original
    if(nextPageButton){nextPageButton.remove()}
})

//list elements
const monList = document.getElementById('monList')
const tueList = document.getElementById('tueList')
const wedList = document.getElementById('wedList')
const thuList = document.getElementById('thuList')
const friList = document.getElementById('friList')
const satList = document.getElementById('satList')
const sunList = document.getElementById('sunList')
//function to view the added task on the table
function taskViewer(){
    //clear all the lists to avoid repetetion
    monList.innerHTML = ''
    tueList.innerHTML = ''
    wedList.innerHTML = ''
    thuList.innerHTML = ''
    friList.innerHTML = ''
    satList.innerHTML = ''
    sunList.innerHTML = ''
    currentProfile.mon.forEach(task => {
        let li = document.createElement('li')
        let butt = document.createElement('button')
        li.textContent = task
        butt.textContent = `x`
        li.id = `mon-${task}`
        li.className = `taskListItem`
        butt.id = `mon-${task}-button`
        butt.className = `removeButton`
        
        monList.appendChild(li)
        li.appendChild(butt)
        //add event listener to the remove button
        butt.addEventListener('click',function(){
            li.remove()
            currentProfile.taskRemove('monday',task)
            
        })
    });
    currentProfile.tue.forEach(task => {
        let li = document.createElement('li')
        let butt = document.createElement('button')
        li.textContent = task
        butt.textContent = `x`
        li.id = `mon-${task}`
        li.className = `taskListItem`
        butt.id = `mon-${task}-button`
        butt.className = `removeButton`
        //add event listener to the remove button
        butt.addEventListener('click',function(){
            currentProfile.taskRemove('tuesday',task)
            li.remove()
        })
        tueList.appendChild(li)
        li.appendChild(butt)
    });
    currentProfile.wed.forEach(task => {
        let li = document.createElement('li')
        let butt = document.createElement('button')
        li.textContent = task
        butt.textContent = `x`
        li.id = `mon-${task}`
        li.className = `taskListItem`
        butt.id = `mon-${task}-button`
        butt.className = `removeButton`
        //add event listener to the remove button
        butt.addEventListener('click',function(){
            currentProfile.taskRemove('wednesday',task)
            li.remove()
        })
        wedList.appendChild(li)
        li.appendChild(butt)
    });
    currentProfile.thu.forEach(task => {
        let li = document.createElement('li')
        let butt = document.createElement('button')
        li.textContent = task
        butt.textContent = `x`
        li.id = `mon-${task}`
        li.className = `taskListItem`
        butt.id = `mon-${task}-button`
        butt.className = `removeButton`
        //add event listener to the remove button
        butt.addEventListener('click',function(){
            currentProfile.taskRemove('thursday',task)
            li.remove()
        })
        thuList.appendChild(li)
        li.appendChild(butt)
    });
    currentProfile.fri.forEach(task => {
        let li = document.createElement('li')
        let butt = document.createElement('button')
        li.textContent = task
        butt.textContent = `x`
        li.id = `mon-${task}`
        li.className = `taskListItem`
        butt.id = `mon-${task}-button`
        butt.className = `removeButton`
        //add event listener to the remove button
        butt.addEventListener('click',function(){
            currentProfile.taskRemove('friday',task)
            li.remove()
        })
        friList.appendChild(li)
        li.appendChild(butt)
    });
    currentProfile.sat.forEach(task => {
        let li = document.createElement('li')
        let butt = document.createElement('button')
        li.textContent = task
        butt.textContent = `x`
        li.id = `mon-${task}`
        li.className = `taskListItem`
        butt.className = `removeButton`
        //add event listener to the remove button
        butt.addEventListener('click',function(){
            currentProfile.taskRemove('saturday',task)
            li.remove()
        })
        satList.appendChild(li)
        li.appendChild(butt)
    });
    currentProfile.sun.forEach(task => {
        let li = document.createElement('li')
        let butt = document.createElement('button')
        li.textContent = task
        butt.textContent = `x`
        li.id = `mon-${task}`
        li.className = `taskListItem`
        butt.id = `mon-${task}-button`
        butt.className = `removeButton`
        //add event listener to the remove button
        butt.addEventListener('click',function(){
            currentProfile.taskRemove('sunday',task)
            li.remove()
        })
        sunList.appendChild(li)
        li.appendChild(butt)
    });

}

//view the tasks
taskViewer()

//add the taskSaver to the button
addButton.addEventListener('click',function(){
    taskSaver()
    taskViewer()
})






//button to save the profile
finishButton.addEventListener('click',function(){
    storeTasks(currentProfile)
    //change the button content
    finishButton.innerHTML = 'Done &#9989' 
    finishButton.style.backgroundColor = 'green'

    //appear a next page button
    if(!document.getElementById('nextPageButton')){
        const nextPage = document.getElementById('nextPage')
        const nextPageButton = document.createElement('button')
        nextPageButton.innerHTML = 'go to task bar'
        nextPageButton.id = 'nextPageButton'
        nextPage.appendChild(nextPageButton)
        nextPageButton.addEventListener('click', function () {
            window.location.href = 'taskShow.html'
        })
    }
}) 




