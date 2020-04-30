import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class Title extends React.Component{
    render(){
        const { children } = this.props 
        return(
            <View style = { styles.container }>
                <Text style = { styles.title }>{children}</Text>
            </View>
        )
    }
}
export default Title
const styles = StyleSheet.create({
    container : {
        height : 50,
        backgroundColor : 'skyblue',
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 5
    },
    title : {
        fontSize : 25,
        color : '#fff'
    }
})