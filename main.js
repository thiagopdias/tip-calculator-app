const bill = document.querySelector('#bill')
const numberPeople = document.querySelector('#numberPeople')
const tip = document.querySelectorAll('.tip')
const custom = document.querySelector('#custom')

const errorBill = document.querySelector('#errorBill')
const errorNumberPeople = document.querySelector('#errorNumberPeople')

let valueTipAmount = document.querySelector('#valueTipAmount')
let totalValue = document.querySelector('#totalValue')

const reset = document.querySelector('#reset')


const calculator = (item) => {
    if(bill.value == 0) {
        errorBill.innerHTML = "Can't be zero"
        bill.style.outlineWidth = '2px'
        bill.style.outlineStyle = 'solid'
        bill.style.outlineColor = 'hsl(0, 100%, 74%)'
    } else {
        errorBill.innerHTML = ''
        bill.style.outlineWidth = ''
        bill.style.outlineStyle = ''
        bill.style.outlineColor = ''
    }

    if(numberPeople.value == 0) {
        errorNumberPeople.innerHTML = "Can't be zero"
        numberPeople.style.outlineWidth = '2px'
        numberPeople.style.outlineStyle = 'solid'
        numberPeople.style.outlineColor = 'hsl(0, 100%, 74%)'
    } else {
        errorNumberPeople.innerHTML = ''
        numberPeople.style.outlineWidth = ''
        numberPeople.style.outlineStyle = ''
        numberPeople.style.outlineColor = ''
    }

    const porcent = Number(item.value)
    const billValue = Number(bill.value)

    const tipAmount = billValue * porcent

    const numberPeopleValue = Number(numberPeople.value)

    const tipAmountPeople = tipAmount / numberPeopleValue
    valueTipAmount.innerHTML = tipAmountPeople.toFixed(2)

    const total = (billValue + tipAmount) / numberPeopleValue
    totalValue.innerHTML = total.toFixed(2)
}

tip.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()

        calculator(item)
    })
})

custom.addEventListener('input', e => {
    if(e.target.value == 0) {
        custom.style.outlineWidth = '2px'
        custom.style.outlineStyle = 'solid'
        custom.style.outlineColor = 'hsl(0, 100%, 74%)'
    } else {
        custom.style.outlineWidth = ''
        custom.style.outlineStyle = ''
        custom.style.outlineColor = ''
    }

    const customValue = Number(e.target.value) / 100
    const billValue = Number(bill.value)
    const tipAmount = billValue * customValue

    const numberPeopleValue = Number(numberPeople.value)

    const tipAmountPeople = tipAmount / numberPeopleValue
    valueTipAmount.innerHTML = tipAmountPeople.toFixed(2)

    const total = (billValue + tipAmount) / numberPeopleValue
    totalValue.innerHTML = total.toFixed(2)

    console.log(customValue)
})

reset.addEventListener('click', () => {
    valueTipAmount.innerHTML = '0.00'
    totalValue.innerHTML = '0.00'
})