import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import {Card} from 'react-native-paper'

function Quote(){
    return (
                <View style={styles.cardview}>
                    <Card style={styles.mycard} >
                    <Text style={styles.text}>HI WELCOME</Text>
                    </Card>
                    <Card style={styles.mycard}>
                    <Text style={styles.text}>HELLO EVERYONE</Text>
                    </Card>
                    {/* <Text style={styles.text}>HOW ARE YOU GUYS???</Text>
                    <Text style={styles.text}>ALL FYN!!!</Text>
                    <Text style={styles.text}>THIS IS HOW</Text> */}
                </View>

    )
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
        backgroundColor:"gold"
    },
    cardview:{
        flexDirection:'column',
        padding:8
    },
    text:{
        fontSize:20,
        marginLeft:45,
        padding:1
    },
    div:{
        backgroundColor:"black"
    },
    fab:{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }

})

export default Quote