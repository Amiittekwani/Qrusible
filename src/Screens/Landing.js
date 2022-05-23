
import React from 'react'
// import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';

import {
    View,
    Button,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

// import {
//     TouchableOpacity
// } from 'react-native-gesture-handler'

export default function LandingScreen() {
    const navigation = useNavigation(); 
    return (
        <View style={styles.container}>
        <Text style ={{fontSize: 25, fontWeight: "bold"}}>Qrusible</Text>
        {/* <StatusBar style="auto" />  */}
        <View style={styles.inputView}>
        
            <TouchableOpacity style={styles.loginBtn}
                  onPress = {() => navigation.navigate('Signin') }>
                 <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity 
                 onPress = {() => navigation.navigate('Register') }>
              <Text styles = {{color : 'black'}}>Don't have a account? signup</Text>
            </TouchableOpacity> */}
            
            <TouchableOpacity style={styles.SignUpBtn}
                 onPress = {() => navigation.navigate('Register') }>
            <Text style={styles.loginText}>SignUp</Text>
            </TouchableOpacity>
            
            
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    
      SignUpBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        backgroundColor: "#696969",
      },
      inputView: {
        backgroundColor: "#fff",
        // borderRadius: 30,
        width: "70%",
        height: 200,
        marginBottom: 10,
     
        alignItems: "center",
      },
      loginBtn: {
        marginTop : 25,
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 5,
        backgroundColor: "#696969",
      },
      image: {
        marginBottom: 100,
        width: "80%",
        height: "40%"
      },
     loginText: {
         color: '#fff',
        //  textAlign : 'center',
        //  marginTop : 17,
     }
})