import { Text, View, Image } from 'react-native';
import styles from './style';
import tabela from '../../images/tabelaIMC.png'

export default function ResultIMC(props){
    return(
        <View>
            <Text style={styles.textInformations}>{props.messageResultIMC}</Text>
            <Text style={styles.resultIMC}>{props.ResultIMC}</Text>
        </View>
    )
}