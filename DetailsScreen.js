import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Weather in ' + navigation.getParam("city"),

      headerTitleStyle: {
        textAlign: 'center', flexGrow: 1,
        alignSelf: 'center',
      },
      headerStyle: {
        backgroundColor: '#0047b3',
      },

      headerLeft: (
        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 5, justifyContent: "center" }} onPress={() => navigation.goBack()}>
          <Image source={require('./assets/arrow_back.png')} resizeMode={'contain'} style={{ width: 30, height: 30 }} tintcolor={'#fff'} />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginLeft: 5
            }}> BACK
        </Text>
        </TouchableOpacity>
      ),
    }
  };

  render() {
    const city = this.props.navigation.getParam('city');
    const status = this.props.navigation.getParam('status');
    const temperature = this.props.navigation.getParam('temperature');
    const humidity = this.props.navigation.getParam('humidity');
    
    let image;
    
    if (status === 'Sun') {
      image = <Image source={require('./assets/sun_icon.png')} style={{ width: 100, marginTop: 10, height: 100, alignSelf: 'center' }} resizeMode={'contain'} />
    
    }
    else if (status === 'Wind') {
      image = <Image source={require('./assets/wind_icon.png')} style={{ width: 100, marginTop: 10, height: 100, alignSelf: 'center' }} resizeMode={'contain'} />
    }
    else if (status === 'Cloudy') {
      image = <Image source={require('./assets/cloudy_icon.png')} style={{ width: 100, marginTop: 10, height: 100, alignSelf: 'center' }} resizeMode={'contain'} />
    }
    else if (status === 'Rain') {
      image =
        <Image source={require('./assets/rain_icon.png')} style={{ width: 100, marginTop: 10, height: 100, alignSelf: 'center' }} resizeMode={'contain'} />
    }
    else image =
      <Image source={require('./assets/default_icon.png')} style={{ width: 100, marginTop: 10, height: 100, alignSelf: 'center' }} resizeMode={'contain'} />

    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 45, marginTop: 20,alignSelf:'center' }}>{city}</Text>
        <Text style={{ fontSize: 25, alignSelf:'center' }}>Việt Nam</Text>
        {image}
        <View style={{ flexDirection: 'row', marginTop: 30,justifyContent:'space-around'}}>

          <View>
            <Text style={{fontSize:60}}>{temperature}°C</Text>
            <Text style={{fontSize:25}}>TEMPERATURE</Text>
          </View>
          
          <View>
            <Text style={{fontSize:60}}>{humidity}%</Text>
            <Text style={{fontSize:25}}>HUMIDITY</Text>
          </View>
        </View>
      </View>
    );
  }
}