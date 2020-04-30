import React, { Component } from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput
} from "react-native";

import { validationHelper } from "./src/component/validaasi/validasi";

class App extends Component {
  constructor(props) {
    super(props);    
	this.state = {
		inputs: {
			firstName: {
				type: 'general',
				value: ''
			},
			lastName: {
				type: 'general',
				value: ''
			},
			email: {
				type: 'email',
				value: ''
			},
			password: {
				type: 'password',
				value: ''
			}
		}
	};
	this.onInputChange = validationHelper.onInputChange.bind(this);
	this.isValidate = validationHelper.isValidate.bind(this);
	this.onSubmit = this.onSubmit.bind(this);
	
  }
  
  onSubmit() {
	console.log(this.state);
	this.isValidate();
  }
  
  onError(id) {
	const { inputs } = this.state;
	if (inputs[id].error) {
	  return <Text style={styles.errorLabel}>{inputs[id].error}</Text>;
	}
	return null;
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
		  <View style={styles.inputGroup}>
			<Text style={styles.title}>Form Validasi</Text>
		  </View>
          <View  style={styles.inputGroup}>
            <Text>Nama Depan</Text>
            <TextInput
              style={styles.input}
			  onChangeText={value => this.onInputChange({id: 'firstName', value})}
            />
			{this.onError('firstName')}
          </View>

          <View style={styles.inputGroup}>
            <Text>Nama Belakang</Text>
            <TextInput
              style={styles.input}
			  onChangeText={value => this.onInputChange({id: 'lastName', value})}
            />
			{this.onError('lastName')}
          </View>
		  
		  <View style={styles.inputGroup}>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
			  onChangeText={value => this.onInputChange({id: 'email', value})}
            />
			 {this.onError('email')}
          </View>
		  
		  <View style={styles.inputGroup}>
            <Text>Password</Text>
            <TextInput
              style={styles.input}
			  secureTextEntry
			  onChangeText={value => this.onInputChange({id: 'password', value})}
            />
			{this.onError('password')}
          </View>
        </ScrollView>

        <View style={styles.button}>
          <Button title="Submit Form" onPress={() => this.onSubmit()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
	paddingTop: 20
  },
  title: {
	fontSize: 16,
	textAlign: 'center'	
  },
  input: {
	  borderRadius: 5,
	  borderWidth: 1,
	  borderColor: '#000000',
	  alignSelf: 'stretch'
  },
  errorLabel: {
    color: "red",
    fontSize: 10
  },
  inputGroup: {
	  marginBottom: 10
  }
});

export default App;