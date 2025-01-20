//function to make the first letter capital
export function firstCap(word){
    let strings = word.split("")
    strings[0] = strings[0].toUpperCase()
    let result = ''
    for (str of strings){
        result += str
    }
    return result
}

//function to make all words' first letter to uppercase 
export function allCap(sentence){
    let words = sentence.split(' ')
    result = ''
    for (word of words){
        result += (' '+firstCap(word))
    }
    return result
}

//defining a class for the task addition
export class Profile{
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
export function storeTasks(prf){
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
