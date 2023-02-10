let numero1 = prompt("Insira o numero 1")
        let numero2 = prompt("Insira o numero 2")
        
        let soma = Number(numero1) + Number(numero2)
        let sub =  Number(numero1) - Number(numero2)
        let multi = Number(numero1) * Number(numero2)
        let div = Number(numero1) / Number(numero2)
       
        let resultado = soma % 2 == 0 ? 'Par' : 'Impar';

        let numeros; 

        if (numero1 == numero2) {
            numeros = "Os numeros inseridos são iguais"
        } else {
            numeros = "Os numeros inseridos são diferentes"
        }

        alert(`A soma dos dois numero é ${soma} e esse numero é ${resultado} e ${numeros}. Já a subtração é ${sub}, a divisão é ${div} e a multiplicação é ${multi}`);
