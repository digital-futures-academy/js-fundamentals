class AccountInformation{
    constructor(balance){
        this.balance=balance
        this.history=[]
    }
    statement() {
        console.log('date || credit || debit || balance')
        for (let item of this.history) {
            console.log(`${item[0]}|| ${item[1]} ||${item[2]}|| ${item[3]}`)
        }
    }
}

class AccountActions {
    constructor(balance){
        this.accInfo=new AccountInformation(balance)
    }

    deposit(amount){
        let date=new Date()
        this.accInfo.balance+=amount
        this.accInfo.history.unshift([`${date.getDate()}/${date.getMonth()}/${date.getYear()}`,amount,null,this.accInfo.balance])
        console.log(`£${amount} deposited`)
        }


    withdraw(amount){
        let date= new Date()
        this.accInfo.balance-=amount
        this.accInfo.history.unshift([`${date.getDate()}/${date.getMonth()}/${date.getYear()}`,null,amount,this.accInfo.balance])
        console.log(`£${amount} withdrawn`)}


    statement(){
        this.accInfo.statement()
    }

}


let acc=new AccountActions(100)
acc.deposit(50)
acc.withdraw(10)
acc.withdraw(25)
acc.deposit(20)
acc.statement()