import React, {useState, useCallback} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  ActivityIndicator, 
  TextInput} from 'react-native';
  import axios from 'axios';

export default function App() {

  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const api = {
    key: '7662313e5d4cb17e547af10450bb3e5d',
    baseUrl: 'http://api.openwheathermap.org/data/2.5/'
  }

  const fetchDataHandler = useCallback(() =>{
    //console.log('fired');
    setLoading(true)
    setInput("")
    axios({
      method:"GET",
      url:`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api.key}`
    })
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(e => console.dir(e))
    .finally((() => setLoading(false)))
  } , [api.key, input])

  return (
    <View style={styles.root}>
      <ImageBackground source={require('./assets/buildings.jpg')}
      resizeMode='cover' 
      style={styles.Image}>

        <View>
          <TextInput placeholder='Busque uma cidade'
            onChangeText={text=>setInput(text)}
            value={input}
            placeholderTextColor={"#AAA"}
            style={styles.textInput}
            onSubmitEditing={fetchDataHandler}
          />
        </View>
          {loading && (
            <View>
              <ActivityIndicator size={'large'} color="#fff"/>
            </View>
            )}

            { data && 
            <View style={styles.infoView}>
              <Text style={styles.cityCountryText}>
                {`${data?.name}, ${data?.sys?.country}`}
              </Text>
              <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
              <Text style={styles.tempText}>{`${Math.round(data?.main?.temp - 273.15)} °C`}</Text>
              <Text style={styles.minMaxText}>{`Min ${Math.round(data?.main?.temp_min - 273.15)} °C / Max ${Math.round(data?.main?.temp_max - 273.15)} °C`}</Text>
            </View>
            }
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  Image:{
    flex:1,
    flexDirection:"column"
  }, 
  textInput: {
    borderBottomWidth:3,
    padding:5,
    paddingVertical:20,
    marginVertical:100,
    marginHorizontal: 10,
    backgroundColor:"white",
    borderRadius:16,
    borderBottomColor:"#df8e00"
  },
  infoView:{
    alignItems: 'center'
  },
  cityCountryText:{
    color:'#fff',
    fontSize:40,
    fontWeight: 'bold'
  },
  dateText:{
    color:'#fff',
    fontSize: 22,
    marginVertical: 10
  },

  tempText:{
    color:'#fff',
    fontSize:45,
    marginVertical: 10,
  },
  minMaxText:{
    fontSize:22,
    color:'#fff'
  }
});
