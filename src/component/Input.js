import React from 'react'
import {
    TextInput,
    StyleSheet,
    Text
} from 'react-native'

class Input extends React.Component{
    state = {
        text : ''
    }

    onSubmitEditing = () => {
        const { text } = this.state
        const { onSubmitEditing } = this.props
        if( !text ) return alert('Inputan Tidak Boleh Kosong Ya')
        onSubmitEditing(text)
        this.setState({
            text : ''
        })
        alert(text + ' ' + ' Berhasil Ditambahkan')
    }

    render(){
        const { placeholder } = this.props
        const { text } = this.state
        return(
            <TextInput
                placeholder = {placeholder}
                value = {text}
                onChangeText = {(text) => this.setState({text})}
                onSubmitEditing = {this.onSubmitEditing}
            />
        )
    }
}
export default Input