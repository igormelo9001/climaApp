import React from "react"
import { View, ScrollView, Image, Text, StyleSheet} from 'react-native'
import FutureForecast from './FutureForecast'

const WheatherScroll = () => {
    return(
        <ScrollView horizontal style={styles.scrollview}>
            <CurrentTempEl/>
            <FutureForecast />
        </ScrollView>
    )
}

const CurrentTempEl = () => {

    const img = require('../images/clima.jpg')
    return(
        <View style={styles.currentTempContainer}>
            <Image source={img} style={styles.image}/>
            <View style={styles.otherContainer}>
                <Text style={styles.day}>Sunday</Text>
                <Text style={styles.temp}>Night - 28&#176;C</Text>
                <Text style={styles.temp}>Day - 35&#176;C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollview:{
        flex:0.4,
        backgroundColor:'#18181bcc',
        padding:30,
    },
    image: {
        width:100,
        height:100,
        borderRadius:30
    },
    currentTempContainer:{
        flexDirection:'row',
        backgroundColor: '#00000033',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderColor:'#eee',
        borderWidth:1,
        padding:15 
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
    },
    otherContainer:{
        paddingRight:40
    }

})

export default WheatherScroll