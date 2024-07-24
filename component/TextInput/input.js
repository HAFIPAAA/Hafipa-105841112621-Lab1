import { TextInput } from 'react-native';
import React from 'react';

const Inputan = ({nama, color})=>{
    return (
        <TextInput
            placeholder={`${nama}`}
            placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
            style={{
                borderWidht: 1,
                borderColor: 'transparent',
                borderRadius: 2,
                width: 350,
                height: 0,
                marginVertical: 10,
                paddingTop: 20,
                height: 64,
                marginVertical: 8,
                paddingHorizontal: 15,
                backgroundColor: 'white',
                color: color,  
                fontSize: 16,
                textAlignVertical: 'top',
                textAlign: 'left',
            }}
        />
    )
}

export default Inputan;