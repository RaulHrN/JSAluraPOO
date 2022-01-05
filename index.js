import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 98765432100);
gerente.cadastrarSenha("123");

const loginDiretor = SistemaAutenticacao.login(diretor, "123456");
const loginGerente = SistemaAutenticacao.login(gerente, "123");
const cliente = new Cliente("Lais", 78945612379, "456");
const loginCliente = SistemaAutenticacao.login(cliente, "123456")

console.log("Diretor: " + loginDiretor, "Gerente: " + loginGerente, "Cliente: " + loginCliente);