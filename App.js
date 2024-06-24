import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

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
            marginTop: 10,
            opacity: 1,
            zIndex: 1,
          }}
        />
        <Text style={{
          fontSize: 20,
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: 'white',
          position: 'absolute',
          top: 0,
          marginTop: 320,
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
          marginTop: 20,
        }}>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{
              width: 100,
              height: 50,
              color: 'white',
              backgroundColor: 'red',
              textAlign: 'center',
              lineHeight: 50,
              fontSize: 20,
              borderRadius: 10,
              marginTop: 80,
            }}>
              Login
            </Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{
              width: 100,
              height: 50,
              color: 'white',
              backgroundColor: 'green',
              textAlign: 'center',
              lineHeight: 50,
              fontSize: 20,
              borderRadius: 10,
              marginTop: 80,
            }}>
              Register
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
