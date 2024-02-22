import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'

const FutureForecast = () => {
    return(
        <View style={{flexDirection: 'row'}}>
            <FutureForecastItem />
            <FutureForecastItem />
            <FutureForecastItem />
        </View>
    )
}

const FutureForecastItem = () => {

    const img = require('../images/clima.jpg')

    return(
        <View style={styles.futureForecastItemContainer}>
            <Text style={styles.day}>Monday</Text>
            <Image source={img} style={styles.image}/>
            <Text style={styles.temp}>Night - 26&#176;</Text>
            <Text style={styles.temp}>Day - 36&#176;</Text>
        </View>
    )
}

export default FutureForecast

const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        borderRadius:30
    },
    futureForecastItemContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#00000033',
        borderRadius:10,
        borderColor:'#eee',
        borderWidth:1,
        padding:20,
        marginLeft:10
    },
    day:{
        fontSize:20,
        color:'white',
        backgroundColor: '#3c3c44',
        padding:10,
        textAlign:'center',
        borderRadius: 50,
        fontWeight:"200",
        marginBottom:15,
        marginLeft:10
    },
    temp:{
        fontSize:16,
        color:'white',
        fontWeight:'100',
        textAlign:'center',
        marginLeft:15
    }
})