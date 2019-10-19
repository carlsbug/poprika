import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loding";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as Localization from 'expo-localization';
import TimeLocation from "./TimeLocation";

const WEATHER_API_KEY = "55ae074407ba490b63c8dc8d3c67e8ca";

export default class extends React.Component{
  state = {
    isLoading: true,
  };
  getTime = async() =>
  {
    try{
      //const {locale} = await Localization.getLocalizationAsync();
      await Localization.getLocalizationAsync();
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      var times = ('Time:'+ hours+':'+min+':'+sec);
      var month = new Date().getMonth() + 1; 
      var dates = new Date().getDate();
      var days = new Date().getDay(); // Monday
    
      console.log('try:', month);
      console.log(Localization.timezone,'Month:' ,dates ,times);
    }
    catch{
      Alert.alert("Time permission not granted");
    }
    this.setState({isLoading: false, temp: times});

  }
  getLocation = async() => {
    try{
      // const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
      // if (status === 'granted') 
      // {
      //   return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      // } 
      // else 
      // {
      //   throw new Error('Location permission not granted');
      // }
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      
      // Send to API
      //console.log(coords.latitude, coords.longitude); // it shows two attributes on the console log
      // this.setState({isLoading: false}); //if this runs, it returns null 
    }
    catch(error)
    {
      Alert.alert("Location permission not granted");
    }
  }
  componentDidMount()
  {
    this.getTime();
    this.getLocation();
  }

  render()
  {
    const { isLoading, temp } = this.state;
    return <Loading />,
    <TimeLocation temp={temp} />;
    
  }
  
}

