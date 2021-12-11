import {
    Cliente
} from "./Cliente.js"

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields

    _saldo = 0; //quando o parametro iniciar com "_" significa que não deve ser alterado fora do método

    set saldo(novoValor) {
        if (novoValor instanceof Cliente) {
            this._saldo = novoValor;
        }
    }
    
    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}