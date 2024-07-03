//class
class Budget {
    constructor(budget) {
    this.budget = budget
    this.leftBudget = budget
    }
    reduceMoney(amount){
        return this.leftBudget -= amount
    }
}
//create html class
class HTML {
insertBudget(amount){
    // add user budget 
    budgetAmount.innerHTML = amount
    budgetLeft.innerHTML = amount
}
//  create error message
printMessage(message){
    // create div for show message
    let div = document.createElement("div")
    //add attributes and classes to div
    div.textContent = message
    div.classList.add('alert','alert-danger','text-center')
    form.insertBefore(div,document.querySelector(".form-group"))
    setTimeout(() => {
        document.querySelector(".alert").remove()
    }, 3000);
    form.reset()
}
reduceAmount(price){
    let leftBudgetPrice = budget.reduceMoney(price)
    if (leftBudgetPrice > '0') {
    budgetLeft.innerHTML = `${leftBudgetPrice}`
    // if left money less than 25% change background to yellow
    if ((budget.budget / 4) > leftBudgetPrice ) {
        budgetLeft.parentElement.parentElement.classList.remove("alert-success")
        budgetLeft.parentElement.parentElement.classList.add('alert-danger')
        
        // if left money less than 50% change background to yellow
    } else if ((budget.budget / 2) > leftBudgetPrice) {
        budgetLeft.parentElement.parentElement.classList.remove("alert-danger")
        budgetLeft.parentElement.parentElement.classList.add('alert-warning')
    }
    
}else{
       this.printMessage("هزینه ی شما بیشتر از بودجه باقی مانده است")
   }
}
}

//varialbes
let budget;
const budgetLeft = document.querySelector("#left")
const budgetAmount = document.querySelector("#amount")
let form = document.querySelector(".form")
const html = new HTML()

//eventlisteners
eventlisteners()
function eventlisteners() {
    document.addEventListener("DOMContentLoaded",function () {
    //get user budget
    let userBudget = prompt("لطفا بودجه هفتگی خودرا وارد کنید")
    //validate user budget
    if (userBudget == "" || userBudget == "0" || userBudget == null) {
        window.location.reload()
        
    }else{
        budget = new Budget(userBudget)
        html.insertBudget(budget.budget)
    }
})
    // get value of fields when form submited
    form.addEventListener('submit',function (e) {
        e.preventDefault()
        // access to the fields value
        let name = document.querySelector("#name").value
        let price = document.querySelector("#price").value
        //validate fields 
        if (name === "" || price === "") {
            html.printMessage("لطفا تمام فیلد ها را پرکنید")
        } else {
            // reduce amount from budget
            html.reduceAmount(price)
        }
    })
}