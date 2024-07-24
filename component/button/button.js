import React from 'react';
import { Text, View } from 'react-native';

const ButtonComponent = ({ title, color }) => {
  return (
    <View style={{
      marginHorizontal: 10,
    }}>
    
      <Text style= {{
        width: 340,
        height: 50,
        color: 'white',
        backgroundColor: color,
        textAlign: 'center',
        lineHeight: 60,
        fontSize: 20,
        borderRadius: 50,
    }}>
      {title}
      </Text>
    </View>
  )
}

export default ButtonComponent
