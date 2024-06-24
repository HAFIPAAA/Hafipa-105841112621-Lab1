import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import ButtonComponent from './component/button/button'; // pastikan path ini benar

const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000'
    }}>
      <Image 
        source={require('./assets/th.jpg')}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: 0.5,
          zIndex: -1,
        }}
        resizeMode="cover"
      />
      <ScrollView 
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Image 
          source={require('./assets/tiktok.png')}
          style={{
            width: 150,
            height: 150,
            marginTop: 50,
            opacity: 1,
            zIndex: 1,
          }}
        />
        <Text style={{
          color: 'white',
          fontSize: 20,
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          position: 'absolute',
          top: 0,
          marginTop: 327,
        }}>
          Selamat Datang di Tiktok
        </Text>
        <Text style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 50,
        }}>
          Temukan video-video yang menarik dan lucu
        </Text>
        <Text style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 10,
        }}>
          Dan membuat anda bahagia
        </Text>
        <View style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120,
        }}>
         <ButtonComponent title="Sign In" color="blue" />
         <ButtonComponent title="Sign Up" color="tomato" />
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
