//stored data retrieval
const profileData = JSON.parse(localStorage.getItem('currentProfile'))

//header to the profile name
const header = document.getElementById('header')
header.textContent = profileData.name + `'s Task Bar`

//show the day
const dayView = document.getElementById('dayView')

function dayStr(){
    let today = new Date
    let dayInt = today.getDay()
    if(dayInt===1){
        return 'monday'
    }
    else if(dayInt===2){
        return 'tuesday'
    }
    else if(dayInt===3){
        return 'wednesday'
    }
    else if(dayInt===4){
        return 'thursday'
    }
    else if(dayInt===5){
        return 'friday'
    }
    else if(dayInt===6){
        return 'saturday'
    }
    else {
        return 'sunday'
    }
}
dayView.textContent = dayStr()

//task view panel
const viewPanel = document.getElementById('viewPanel')
//function to view the tasks and checkbox the finished ones
function viewTasks(){
    if(dayStr()=='monday'){
        profileData.mon.forEach(task => {
            const newEl = document.createElement('input')
            newEl.type = 'checkbox'
            newEl.id = `${task}box`
            newEl.className = 'classTask'
            const newLab = document.createElement('label')
            newLab.setAttribute('for',`${task}box`)
            newLab.textContent = task
            newLab.className = 'labelTask'
            viewPanel.appendChild(newEl)
            viewPanel.appendChild(newLab)
            viewPanel.appendChild(document.createElement('br'))
        });
    }

    else if(dayStr()=='tuesday'){
        (profileData.tue).forEach(task => {
            const newEl = document.createElement('input')
            newEl.type = 'checkbox'
            newEl.id = `${task}box`
            newEl.className = 'classTask'
            const newLab = document.createElement('label')
            newLab.setAttribute('for',`${task}box`)
            newLab.textContent = task
            viewPanel.appendChild(newEl)
            viewPanel.appendChild(newLab)
            viewPanel.appendChild(document.createElement('br'))

        });
    }

    else if(dayStr()=='wednesday'){
        (profileData.wed).forEach(task => {
            const newEl = document.createElement('input')
            newEl.type = 'checkbox'
            newEl.id = `${task}box`
            newEl.className = 'classTask'
            const newLab = document.createElement('label')
            newLab.setAttribute('for',`${task}box`)
            newLab.textContent = task
            viewPanel.appendChild(newEl)
            viewPanel.appendChild(newLab)
            viewPanel.appendChild(document.createElement('br'))

        });
    }

    else if(dayStr()=='thursday'){
        (profileData.thu).forEach(task => {
            const newEl = document.createElement('input')
            newEl.type = 'checkbox'
            newEl.id = `${task}box`
            newEl.className = 'classTask'
            const newLab = document.createElement('label')
            newLab.setAttribute('for',`${task}box`)
            newLab.textContent = task
            viewPanel.appendChild(newEl)
            viewPanel.appendChild(newLab)
            viewPanel.appendChild(document.createElement('br'))

        });
    }

    else if(dayStr()=='friday'){
        (profileData.fri).forEach(task => {
            const newEl = document.createElement('input')
            newEl.type = 'checkbox'
            newEl.id = `${task}box`
            newEl.className = 'classTask'
            const newLab = document.createElement('label')
            newLab.setAttribute('for',`${task}box`)
            newLab.textContent = task
            viewPanel.appendChild(newEl)
            viewPanel.appendChild(newLab)
            viewPanel.appendChild(document.createElement('br'))

        });
    }

    else if(dayStr()=='saturday'){
        (profileData.sat).forEach(task => {
            const newEl = document.createElement('input')
            newEl.type = 'checkbox'
            newEl.id = `${task}box`
            newEl.className = 'classTask'
            const newLab = document.createElement('label')
            newLab.setAttribute('for',`${task}box`)
            newLab.textContent = task
            newLab.className = 'labelTask'
            viewPanel.appendChild(newEl)
            viewPanel.appendChild(newLab)
            viewPanel.appendChild(document.createElement('br'))

        });
    }

    else if(dayStr()=='sunday'){
        (profileData.sun).forEach(task => {
            const newEl = document.createElement('input')
            newEl.type = 'checkbox'
            newEl.id = `${task}box`
            newEl.className = 'classTask'
            const newLab = document.createElement('label')
            newLab.setAttribute('for',`${task}box`)
            newLab.textContent = task
            newLab.className = 'labelTask'
            viewPanel.appendChild(newEl)
            viewPanel.appendChild(newLab)
            viewPanel.appendChild(document.createElement('br'))

        });
    }
}

//execute the function
viewTasks()



//check if all the tasks are completed
const completion = document.getElementById('completion')
const classTask = document.getElementsByClassName('classTask')


function taskAnalyze(){
    let nTasks = null
    let nComp = 0
    if(dayStr()=='monday'){nTasks=profileData.mon.length}
    else if(dayStr()=='tuesday'){nTasks=profileData.tue.length}
    else if(dayStr()=='wednesday'){nTasks=profileData.wed.length}
    else if(dayStr()=='thursday'){nTasks=profileData.thu.length}
    else if(dayStr()=='friday'){nTasks=profileData.fri.length}
    else if(dayStr()=='saturday'){nTasks=profileData.sat.length}
    else if(dayStr()=='sunday'){nTasks=profileData.sun.length}

    if(nTasks==0){completion.textContent=`No tasks to complete today!`}
    else{
        let checkBoxes = Array.from(classTask)
        checkBoxes.forEach(check=>{
            if(check.checked){
                nComp += 1
            }
        })
        if(nComp<checkBoxes.length){completion.textContent=`Some tasks yet to be completed.`}
        else if(nComp===checkBoxes.length){completion.textContent=`Hurray, all tasks completed!`
            //change the bg color
            completion.style.backgroundColor = 'rgb(78, 249, 135)'
        }

    }

}

taskAnalyze()

Array.from(classTask).forEach(task => {
    task.addEventListener('click', taskAnalyze);
})

//editor button
const editor = document.getElementById('editor')
editor.addEventListener('click',function(){
    window.location.href = 'editTask.html'
})