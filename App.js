import { StatusBar } from "expo-status-bar"
import React, {useEffect, useState} from "react"
import { StyleSheet, Text, View, ImageBackground } from "react-native"  
import DateTime from './src/components/DateTime'
import WheatherScroll from "./src/components/WheaterScroll"
import { API_KEY } from "./ApiKey"
import * as Location from 'expo-location';

const image = require('./assets/buildings.jpg')
export default function App(){
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const[data, setData] = useState({})

  useEffect(() => {

    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if(!location){
        setLatitude("40.730610")
        setLongitude("-73.935242")
      }else{
        setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude);
      setLocation(location.coords);
      }   
    })();

    fetchDataFromApi(latitude, longitude)
     
  },[])

  const fetchDataFromApi = (latitude, longitude) => {

    fetch(`api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}
    &exclude=hourly,minutely&units=metric&appid=${API_KEY}
    `).then(res => res.json()).then(data => {
      console.log(data)
      setData(data)
    })

  }

  return(
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}> 
          <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
          <WheatherScroll />
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  image:{
    flex:1,
    resizeMode:"cover", 
    justifyContent:"center"
  }
})