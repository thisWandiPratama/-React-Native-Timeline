	
import React, {Component} from 'react';
 
import {StyleSheet, View, Text} from 'react-native';
 
import Timeline from 'react-native-timeline-flatlist'
 
class App extends Component {
 
  constructor(){
    super()
    this.data = [
      {time: '09:00', title: 'Event 1', description: 'Event 1 Description', },
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
    ]
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <Text style={styles.text}>React Native Timeline ListView Component</Text>
 
        <Timeline
          data={this.data}
          //separator={true}
          circleSize={20}
          circleColor='#0091EA'
          lineColor='grey'
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:15}}
          style={styles.listStyle}
          descriptionStyle={{color:'gray'}}
        />
        
      </View>
    
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
 
  listStyle: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20
  },
 
  text:{
    textAlign: 'center',
    fontSize: 24,
    marginTop: 20
  }
 
});

export default App

  