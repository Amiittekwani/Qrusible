import React from 'react';
import { TextInput, Button, StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
// import { Auth } from 'aws-amplify';
import awsexports from "../aws-exports"
Amplify.configure(awsexports);
import { useNavigation } from '@react-navigation/native';
// import { Auth } from 'aws-amplify';
// const navigation = useNavigation(); 
export default class App extends React.Component {
  
  state = {
    username: '',
    password: '',
    confirmationCode: '',
    user: {},
  };
  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }
  signIn() {
    const { username, password } = this.state;
    Auth.signIn(username, password)
      .then(user => {
        
        this.setState({ user });
        console.log('successful sign in!');
        this.props.navigation.navigate("landing1",{username});
        
      })
      .catch(err =>{
        console.log('error signing up!: ', err);
        Alert.alert(err)
      } )
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder="username"
        />
        <TextInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
        />
        <Button title="Sign In" onPress={this.signIn.bind(this)} />
        
        <TouchableOpacity  style = {{marginLeft : 5}}
        onPress = {() => this.props.navigation.navigate("Register")}>
          <Text style = {{color : 'blue',}}>Don't have Account? SignUp</Text></TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
  },
});