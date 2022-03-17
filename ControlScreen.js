import React from 'react';
import { Text, View , ImageBackground, Image} from 'react-native';

export default class ControlScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <ImageBackground source={require('./assets/rainy.jpg')} style={{width: '100%', height: '100%'}}>
         <Image source={require('./assets/stand.gif')}  
           style={{width: 400, height: 200,  marginTop: 100 , alignSelf: 'center'}}/>
           </ImageBackground>
        
      </View>
    );
  }
}