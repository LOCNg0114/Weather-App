import React from 'react';
import { Text, View} from 'react-native';
export default class SettingScreen extends React.Component {
  render() {
    return (
     
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 30, color: '#cc00cc', marginTop: 80,   fontWeight: 'bold' }}>Weather</Text>
          <Text style={{ fontSize: 20, color: '#000', marginTop: 20, fontWeight: 'bold' }}>Temperature</Text>
          <Text style={{ fontSize: 15, marginTop: 5 }}>Current Information: °C</Text>

          <Text style={{ fontSize: 20, color: '#000', marginTop: 15, fontWeight: 'bold' }}>Network Refresh</Text>
          <Text style={{ fontSize: 15, marginTop: 5 }}>Current Information: Real-time</Text>

          <Text style={{ fontSize: 25, color: '#cc00cc', marginTop: 20,fontWeight: 'bold' }}>ABOUT</Text>
          <Text style={{ fontSize: 20, color: '#000', marginTop: 15, fontWeight: 'bold' }}>Instructor</Text>

          <View style={{ marginTop:20, flexDirection: 'row' }}>

            <View>
              <Text style={{ fontSize: 25,fontWeight:"bold" }}>Tiến Lộc</Text>
              <Text style={{ fontSize: 25, fontWeight:"bold" }}>ID: 1552214</Text>
            </View>
      </View>
      </View>
      </View>
      

  //  </ImageBackground>
    );
  }
 
}
