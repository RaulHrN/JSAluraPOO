class Cliente { //molde
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente(); //objeto
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 1144477755;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(150);
console.log(contaCorrenteRicardo.saldo);

const cliente2 = new Cliente(); //objeto
cliente2.nome = "Alicia";
cliente2.cpf = 88822233309;

console.log(cliente1);
console.log(cliente2);