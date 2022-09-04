function imc(Altura, Peso) {
    const imc = Peso / Math.pow(Altura, 2)
    if (imc != 0 && imc >= 18.59 && imc <= 24.99) {
        console.log(nome + ',Seu imc está acima de 18.5 e abaixo de 24.9. IMC normal')
    } else if (imc != 0 && imc >= 25.90 && imc <= 29.99) {
        console.log(nome + ',Seu imc está acima de 25.0 e abaixo de 29.0. IMC Sobrepeso')
    } else if (imc != 0 && imc >= 30.00 && imc <= 39.99) {
        console.log(nome + ',Seu imc está acima de 30. e menor do que 40.0. IMC Obesidade')
    } else if (imc != 0 && imc >= 40) {
        console.log(nome + ',Seu imc está acima de 40. Seu imc está Obesidade Grave. Procure um médico')
    } else console.log(nome + ',Seu imc está abaixo de 18.5. Seu imc está abaixo do peso. ')
    console.log(imc.toFixed(2))

}

let nome = 'SeuNome' //atribua seu nome caso queira
const altura1 = 0 //atribua a sua altura para ser feito o calculo do IMC
const peso1 = 0 //atribua o seu peso para ser feito o calculo do IMC
imc(altura1, peso1) //CTRL+ALT+N para executar o code e imprimir o resultado no terminal.