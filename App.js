import React from 'react'
import { View } from "react-native";

import { actionCreators } from './src/component/todoListRedux'
import Title from './src/component/Title'
import Input from './src/component/Input'
import List from './src/component/List'
import store from './src/component/store'

class App extends React.Component{
    state = {}

    componentWillMount() {
        const { todos } = store.getState()
        this.setState({todos})
        this.unsubscribe = store.subscribe(() => {
            const { todos } = store.getState()
            this.setState({todos})
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    onAddTodo = text => {
        store.dispatch(actionCreators.add(text))
    }

    onRemoveTodo = index => {
        const { todos } = this.state
        store.dispatch(actionCreators.remove(index))
        alert(todos[index] + ' ' + 'Berhasil Dihapus')
    }


    render(){
        const { todos } = this.state
        return(
            <View>
            <Title>
              To-Do List
            </Title>
            <Input
              placeholder={'Masukan Catatan Anda'}
              onSubmitEditing={this.onAddTodo}
            />
            <List
              list={todos}
              onPressItem={this.onRemoveTodo}
            />
          </View>
        )
    }
}
export default App