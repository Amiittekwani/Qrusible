import React from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
// import { Auth } from 'aws-amplify';
import awsexports from "../aws-exports";
Amplify.configure(awsexports);

export default class App extends React.Component {
  state = {
    username: '',
    password: '',
    // phone_number: '',
    // email: '',
    confirmationCode: '',
  };
  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }
  forgotpassword(){
    Auth.forgotPassword({username : this.state.username})
    .then((value)=>console.log(value))
    .catch((error)=>{console.log(error)})
}
  signUp() {
    Auth.signUp({
      username: this.state.username,
      password: this.state.password,
      attributes: {
        email: this.state.email,
        phone_number: this.state.phone_number,
      },
    })
      .then(() => console.log('successful sign up!'))
      .catch(err => console.log('error signing up!: ', err));
  }
  confirmSignUp() {
    Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
      .then(() => console.log('successful confirm sign up!'))
      .catch(err => console.log('error confirming signing up!: ', err));
  }
  render() {
    return (
      <View style={styles.container}>
          <Text>Enter Your username</Text>
        <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder="username"
        />
        {/* <TextInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
        /> */}
        {/* <TextInput
          onChangeText={value => this.onChangeText('phone_number', value)}
          style={styles.input}
          placeholder="phone"
        /> */}
        {/* <TextInput
          onChangeText={value => this.onChangeText('email', value)}
          style={styles.input}
          placeholder="email"
        /> */}
        <Button title="forgot password" onPress={this.forgotpassword.bind(this)} />
        <TextInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder="confirmation Code"
        />
        <Button
          title="Confirm Sign Up"
          onPress={this.confirmSignUp.bind(this)}
        />
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