import { View, Text, TouchableOpacity,  } from "react-native";
import Checkbox from "expo-checkbox";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./styles";

type Props = {
    isChecked: boolean
    description: string
    onRemove: () => void
    onFinished: () => void
}

export function ListTasks({ isChecked, description, onRemove, onFinished }:Props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerCheckBox}>
                <Checkbox style={styles.checkBox} value={isChecked} onValueChange={onFinished} color={isChecked ? '#5E60CE' : undefined}/>
            </View>
            <View style={styles.containerDescription}>
                <Text numberOfLines={2} style={isChecked ? styles.descriptionTextThrough : styles.descriptionText}>{description}</Text>
            </View>
            <View style={styles.containerButtonRemove}>
                <TouchableOpacity onPress={onRemove}>
                    <Ionicons name="trash-outline" color="#F2F2F2" size={15} />
                </TouchableOpacity>
            </View>
        </View>
    )
}