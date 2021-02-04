import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export default props => {
    const [contador, setContador] = useState(1)

    const alteraValor = () => {return setContador(contador + 1)}
    
    const retornaValor = () => {return setContador(1)}

    return (
        <View>
          <Text>{props.children.toUpperCase()} Valor: {contador}</Text>
          <Button
            title='Soma' 
            onPress={alteraValor}
            
          />
          <Button
            title='Retorna' 
            onPress={retornaValor}
            
          />
        </View>
      );
};
