import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList, ScrollView, Image } from 'react-native';
//import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    constructor (props){
    super(props);
    this.state= {
      text: '',
      data: [
        {
          city: 'Sài Gòn',
          temperature: '29',
          status: 'Sun',
          humidity: '66',
        },
        {
          city: 'Hà Nội',
          temperature: '28',
          status: 'Rain',
          humidity: '70',
        },
        {
          city: 'Đà Nẵng',
          temperature: '30',
          status: 'Cloudy',
          humidity: '67',
        },
        {
          city: 'Bình Thuận',
          temperature: '37',
          status: 'Wind',
          humidity: '60',
        },
        {
          city: 'Thừa Thiên-Huế',
          temperature: '25',
          status: 'Storm',
          humidity: '49',
        },
        {
          city: 'Quảng Ninh',
          temperature: '25',
          status: 'Sun',
          humidity: '49',
        },
        {
          city: 'Tây Nguyên',
          temperature: '32',
          status: 'Wind',
          humidity: '55',
        },
        {
            city: 'Vinh',
            temperature: '29',
            status: 'Wind',
            humidity: '70',
          },


      ]
    };
  }

  AddItems = () => {
    this.state.data.push(this.state.text.toString());
    this.setState({
      data: this.state.data,
    })
  }
  delete = (index) => {
    const lastItem = this.state.data[index];
    this.shiftUp(index);
    this.setState({
      data: this.state.data,
    })
     return lastItem;
  }

  shiftUp = (index) => {
    for (let i = index; i < this.state.data.length - 1; i++) {
      this.state.data[i] = this.state.data[i + 1];
    }
    delete this.state.data[this.state.data.length - 1];
    this.state.data.length--;
  }

   deleteItem = (index) => {
     this.state.data.delete(index);
     this.setState({
       data: this.state.data,
     })
   }

   renderItem = ({ item, index }) => {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <TouchableOpacity style={{ flexDirection: 'row' }}
          onPress={() => this.props.navigation.navigate('Details', { city: item.city, temperature: item.temperature, status: item.status, humidity: item.humidity })}
        >

          {item.status === 'Sun'
            ?
            <Image source={require('./assets/sun_icon.png')} style={{ width: 30, marginLeft: 20, height: 30, alignSelf: 'center' }} resizeMode={'contain'} />
            : item.status === 'Rain'
              ?
              <Image source={require('./assets/rain_icon.png')} style={{ width: 30, marginLeft: 20, height: 30, alignSelf: 'center' }} resizeMode={'contain'} />
              : 
              item.status === 'Cloudy'
                ?
                 <Image source={require('./assets/cloudy_icon.png')} style={{ width: 30, marginLeft: 20, height: 30, alignSelf: 'center' }} resizeMode={'contain'} />
                 :
                 item.status === 'Wind'
                 ?
                 <Image source={require('./assets/wind_icon.png')} style={{ width: 30, marginLeft: 20, height: 30, alignSelf: 'center' }} resizeMode={'contain'} />
                :
                <Image source={require('./assets/default_icon.png')} style={{ width: 30, marginLeft: 20, height: 30, alignSelf: 'center' }} resizeMode={'contain'} />
          }

          <View style={{ marginLeft: 20, flex: 1 }}>
            <View key={item} style={{ flexDirection: 'row', height: 70, justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontWeight: 'bold', }}>{item.city}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text>{item.temperature}°C</Text>
                  <Text style={{ marginLeft: 5 }}>{item.humidity}%</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity>
                  <Image source={require('./assets/refresh_icon.png')} resizeMode={'contain'} style={{ height: 20, width: 20, marginRight: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.delete(index)}>
                  <Image source={require('./assets/delete_icon.png')} resizeMode={'contain'} style={{ height: 20, width: 20, marginRight: 20, }} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ borderWidth: 0.5 }} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }


  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#dee1e5' }}>
        <FlatList
          data={this.state.data}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}

        />

        <View style={{ borderTopWidth: 0.8, alignItems: 'center' }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 20, color: '#4286f4', alignSelf: 'center', marginVertical: 25 }}>+ ADD LOCATION</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});