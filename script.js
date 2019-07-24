//Variables
let line = document.querySelector('.line')
let con = document.querySelector('.console')
let titleBar = document.querySelector('.bar')
let maj = [
    {
        start: 18,
        end: 22.5,
        date: {
            name: "Monday",
            month: 7,
            day: 29
        }
    },
    {
        start: 12,
        end: 17,
        date: {
            name: "Saturday",
            month: 8,
            day: 3
        }
    }
]
let mad = [
    {
        start: 17,
        end: 21,
        date: {
            name: 'Tuesday',
            month: 7,
            day: 30
        }
    },
    {
        start: 17,
        end: 21,
        date: {
            name: 'Thursday',
            month: 8,
            day: 1
        }
    },
    {
        start: 17,
        end: 21,
        date: {
            name: 'Sunday',
            month: 8,
            day: 4
        }
    }
]

//Functions
print = (string) => { line.firstElementChild.innerHTML += string }
printLine = (string, def = true) => {
    let oldLine = document.createElement('P')
    oldLine.innerHTML = line.firstElementChild.innerHTML + " " + line.lastElementChild.value
    con.insertBefore(oldLine, con.lastElementChild)
    if (def) {
        line.firstElementChild.innerHTML = '<span class="green">MajdTarbin@Portfolio</span>:<span class="blue">~/home</span>' + '<span class="blue">' + string + '</span>' + '$ '
    }
}
replace = (string) => { line.firstElementChild.innerHTML = string }
newLine = () => {
    let oldLine = document.createElement('P')
    oldLine.innerHTML = line.firstElementChild.innerHTML// + " " + line.lastElementChild.value
    con.insertBefore(oldLine, con.lastElementChild)
    line.firstElementChild.innerHTML = ''
}

printLine('')
con.addEventListener('keydown', e => {
    let val = line.lastElementChild.value
    if (e.key === 'Enter') {
        if (val.includes("cd")) {
            val = val.replace("cd", '')
            if (val === " gallery") {
                printLine("/gallery")
            }
            else if (val === '' || " " || " ..") {
                printLine("")
            }
        }
        else if (val.includes("oakton")) {
            printLine("")
            window.open('https://bit.ly/oaktonschedule')
            replace("opening")
            printLine("")
        }
        else if (val.includes("maj")) {
            printLine("")
            replace("Maj's Schedule:")
            maj.forEach(shift => {
                newLine()
                replace(`${shift.date.name} ${shift.date.month}/${shift.date.day}`)
                newLine()
                replace(`from ${shift.start} to ${shift.end}`)
            })
            line.lastElementChild.value = ''
            printLine()
        }
        else if (val.includes("mad")) {
            printLine("")
            replace("Maddie's Schedule:")
            mad.forEach(shift => {
                newLine()
                replace(`${shift.date.name} ${shift.date.month}/${shift.date.day}`)
                newLine()
                replace(`from ${shift.start} to ${shift.end}`)
            })
            line.lastElementChild.value = ''
            printLine()
        }
        line.lastElementChild.value = ''

    }

})
con.addEventListener('click', () => { line.lastElementChild.focus() })