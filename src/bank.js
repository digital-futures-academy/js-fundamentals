class AccountStatement{
    statement(history) {
        console.log('date || credit || debit || balance')
        for (let item of history) {
            console.log(`${item[0]}|| ${item[1]} ||${item[2]}|| ${item[3]}`)
        }
    }
}

class AccountActions{
    deposit(amount, balance, history){
        let date= new Date()
        balance+=amount
        history.unshift([`${date.getDate()}/${date.getMonth()}/${date.getYear()}`,amount,null,balance])
        return [balance, history]
    }
    withdraw(amount, balance, history){
        let date=new Date()
        balance-=amount
        history.unshift([`${date.getDate()}/${date.getMonth()}/${date.getYear()}`,null,amount,balance])
        return [balance, history]
    }
}



class Account{
    constructor (balance=0, history=[]){
        this.balance=balance
        this.history=history
        this.accStatement=new AccountStatement()
        this.accActions=new AccountActions()
    }
    statement(){
        this.accStatement.statement(this.history)
    }
    deposit(amount){
        let result=this.accActions.deposit(amount, this.balance, this.history)
        this.balance=result[0]
        this.history=result[1]
    }
    withdraw(amount){
        let result = this.balance=this.accActions.withdraw(amount, this.balance, this.history)
        this.balance=result[0]
        this.history=result[1]
    }
}

let acc=new Account(100)

acc.deposit(40)
acc.statement()
acc.withdraw(20)
acc.statement()
acc.deposit(60)
acc.statement()