// Your code here
const saturdayFun = (act="roller-skate") => `This Saturday, I want to ${act}!`
const mondayWork = (act="go to the office") => `This Monday, I will ${act}.`
const wrapAdjective = (str="*") => (txt="special") => `You are ${str}${txt}${str}!`

const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

const actionApplyer = (int, fns) => {
    if (fns.length > 0) {
        for (let i = 0; i < fns.length; i++) {
            int = fns[i](int)
        }
    }
    return int
}