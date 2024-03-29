// Aula 08 - Polimorfismo

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar  = function (valor) {
    if(valor > this.saldo) {
        console.log('saldo insuficiente: ' + this.saldo)
        return;
    }

    this.saldo -= valor;
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function () {
    console.log()
}

// const conta1 = new Conta(11, 22 , 10);
// conta1.depositar(11);
// conta1.sacar(30);

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.sacar = function(valor) {
    if(valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente ${this.saldo}`)
    }
}