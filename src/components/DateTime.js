import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'


const WheaterItem = ({title, value, unit}) => {
    return(
        <View style={styles.WheaterItem}>
            <Text style={styles.WheaterItemTitle}>{title}</Text>
            <Text style={styles.WheaterItemTitle}>{value}{unit}</Text>
        </View>
    )
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'friday',  'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Jul', 'Aug', 
'Sep', 'Oct', 'Nov', 'Dec']

const DateTime = ({current, lat, lon, timezone}) => {

    const[date, setDate] = useState('')
    const[time, setTime] = useState('')

    useEffect(() =>{
        setInterval(() => {
            const time = new Date()
            const month = time.getMonth()
            const date = time.getDate()
            const day = time.getDay()
            const hour = time.getHours()
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes()
            const ampm = hour >= 12 ? 'pm' : 'am'

            setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat :
            hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)
            + ' ' +ampm)

            setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        }, 1000)
    }, [])

    return(
            <View style={styles.container} SafeAreaView>
                <View>
                    <View>
                        <Text style={styles.heading}>{time}</Text>
                    </View>
                    <View>
                        <Text style={styles.subHeading}>{date}</Text>
                    </View>
                    <View style={styles.wheaterItemContainer}>
                        <WheaterItem title="humidity" value="79" unit="%"/>
                        <WheaterItem title="Pressure" value="1000" unit="hPA"/>
                        <WheaterItem title="Sunrise" value="06:00" unit="am"/>
                        <WheaterItem title="Sunset" value="06:30" unit="mp"/>
                    </View>
                </View>
                <View style={styles.rightAlign}>
                    <Text style={styles.timeZone}>{timezone}</Text>
                    <Text style={styles.latLong}>{lat}N {lon}E</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1.5,
        flexDirection:"row",
        justifyContent:'space-between',
        marginTop:30,
        padding:10
    },
    heading:{
        fontSize:45,
        color:'white',
        fontWeight:'100'
    },
    subHeading:{
        fontSize:25,
        color:'#eee',
        fontWeight:'300'
    },
    rightAlign:{
        textAlign:'right'
    },
    timeZone:{
        fontSize:20,
        color:'white'
    },
    latLong:{
        fontSize:20,
        color:'white',
        fontWeight:'700'
    },
    wheaterItemContainer:{
        backgroundColor:'#18181b99',
        borderRadius:10,
        padding:10,
        marginTop:10
    },
    WheaterItem:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    WheaterItemTitle:{
        color:'#eee',
        fontSize:14,
        fontWeight:'100'
    }

})

export default DateTime