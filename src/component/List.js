import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class List extends React.Component {
  renderItems = (text, i) => {
      const { onPressItem } = this.props
    return (
      <TouchableOpacity key = {i} style = { styles.container } onPress = { () => onPressItem(i)}>
        <Text style = { styles.list }>{text}</Text>
      </TouchableOpacity>
    );
  };

  render () {
    const {list} = this.props;
    console.log ('List ' + ' ' + list);
    return <View>{list.map(this.renderItems)}</View>;
  }
}
export default List;
const styles = StyleSheet.create({
    container : {
        height : 50,
        backgroundColor : '#2812',
        margin : 10,
        justifyContent : 'center'
    },
    list : {
        fontSize : 15,
        marginLeft : 5
    }
})
