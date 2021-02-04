import {Dimensions} from 'react-native'

const params = {
    blockSize: 30,
    borderBlock: 5,
    fontSize: 15,
    headerRatio: 0.15, //proporção do cabeçalho de 15% da tela
    difficultLevel: 0.1,
    getColunas() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getLinhas(){
        const totalHeight = Dimensions.get('window').height
        const blocoHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(blocoHeight / this.blockSize)
    },
}

export default params