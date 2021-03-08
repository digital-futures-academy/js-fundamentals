class Bank{
    constructor(){
        this.debit_balance = 0;
        this.credit_balance = 0;
        this.statement = {'date':['amount', 'account', 'balance of accounts']};
    }
    deposit(account, amount, date = Date.now){
        this.account = account;
        this.amount = amount;
        this.date = date;
        if(this.account.toLowerCase() === "credit"){
            this.credit_balance += amount;
            this.statement[this.date] = [this.amount, this.account.toLowerCase(), (this.credit_balance + this.debit_balance)];
        }
        else{
            this.debit_balance += amount;
            this.statement[this.date] = [this.amount, this.account.toLowerCase(), (this.credit_balance + this.debit_balance)];
        }
    }
    withdraw(account, amount, date = Date.now){
        this.account = account;
        this.amount = amount;
        this.date = date;
        let d = this.date;
        if(this.account.toLowerCase() === "credit"){
            if(this.amount > this.credit_balance){
                throw new Error('Insufficient funds.');
            }
            else{
                this.credit_balance -= this.amount;
                this.statement[this.date] = [this.amount, this.account.toLowerCase(), (this.credit_balance + this.debit_balance)];
            }
        }
        else{
            if(this.amount > this.debit_balance){
                throw new Error('Insufficient funds.');
            }
            else{
                this.debit_balance -= this.amount;
                this.statement[this.date] = [this.amount, this.account.toLowerCase(), (this.credit_balance + this.debit_balance)];
            }
        }
    }
    accountStatement(){
        console.log(this.statement);
    }
}

let account = new Bank();
account.deposit('credit', 500, '25/12/2020');
account.withdraw('credit', 250, '08/03/2021');
account.accountStatement();