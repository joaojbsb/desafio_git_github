
function divisao(numero1, numero2){

        if (numero1 === 0 || numero2 === 0) {
            return 'Não se pode dividir por zero'
        } else {
            return `A divisão do ${numero1} com ${numero2} = ` + numero1 / numero2 
        }
}

export { divisao };