import { View, Text, Image, TouchableOpacity, TextInput, Alert, FlatList } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import { ListTasks } from "../components/ListTasks"
import styles from "./styles"
import { useState } from "react"

type TasksModel = {
    id: number
    description: string
    finished: boolean
}

export default function Home() {
    const [tasks, setTasks] = useState<TasksModel[]>([]);
    const [description, setDescription] = useState("") 
    const [countCreated, setCountCreated] = useState(0)
    const [countFinished, setCountFinished] = useState(0)
    const [id, setId] = useState(0)

    function handleCreateTasks() {  
        if(description.length === 0) {
            return Alert.alert("Cadastrar tarefa", "A descrição deve ser preenchida.")
        }
        setId(id + 1)
        setCountCreated(countCreated + 1)
        setTasks(prevState => [...prevState, {
            id: id,
            description: description,
            finished: false
        }])
        setDescription("")
    }

    function handleRemoveTasks(id: number, isChecked: boolean) {
        setTasks(prevState => prevState.filter(task => task.id !== id))
        setCountCreated(countCreated - 1)
        setCountFinished(isChecked ? countFinished - 1 : countFinished)
    }

    function handleFinishTask(id: number, isChecked: boolean) {
        setTasks(tasks.map(item => {
            if (item.id === id) {
                return {...item, finished: isChecked ? false : true}
            } else {
                return item
            }
        }))
        setCountFinished(isChecked ? countFinished - 1 : countFinished + 1)
    }

  return (
    <>
        <View style={styles.containerLogo}>
            <Image source={require('../../assets/Logo.png')} />
        </View>
        <View style={styles.container}>
            <View style={styles.forms}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Adicione uma nova tarefa" 
                    placeholderTextColor="#808080" 
                    value={description}
                    onChangeText={text => setDescription(text)}
                />
                <TouchableOpacity style={styles.button} onPress={handleCreateTasks}>
                    <Ionicons name="add-circle-outline" color="#F2F2F2" size={20} />
                </TouchableOpacity>
            </View>
            <View style={styles.moreInformation}>
                <View style={styles.containerCreate}>
                    <Text style={styles.textTaskCreate}>Criadas</Text>
                    <Text style={styles.countCreate}>{countCreated}</Text>
                </View>
                <View style={styles.containerFinish}>
                    <Text style={styles.textTaskFinish}>Concluídas</Text>
                    <Text style={styles.countFinish}>{countFinished}</Text>
                </View>
            </View>
            <View style={styles.listTasks}>
                <FlatList 
                    data={tasks}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => (
                        <ListTasks 
                            isChecked={item.finished} 
                            description={item.description}
                            onRemove={() => handleRemoveTasks(item.id, item.finished)}
                            onFinished={() => handleFinishTask(item.id, item.finished)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.containerListEmpty}>
                            <Image style={styles.logoListEmpty} source={require('../../assets/Clipboard.png')}/>
                            <Text style={styles.textHeaderListEmpty}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.textListEmpty}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
            </View>
        </View>

    </>
  );
}