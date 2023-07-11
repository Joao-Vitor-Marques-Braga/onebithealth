import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import ResultIMC from '../ResultIMC';

import styles from './style';

export default function Form() {

const [height, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [messageResultIMC, setMessageResultIMC] = useState("Preencha o peso e altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2));
}

function validation(){
    if(weight != null && height !=null){
        imcCalculator();
        setHeight(null);
        setWeight(null);
        setMessageResultIMC("Seu IMC é igual a:");
        setTextButton("Calcular Novamente");
        return
    } else{
        setHeight(null);
        setWeight(null)
        setImc(null);
        setTextButton("Calcular")
        setMessageResultIMC("Preencha o peso e altura")
    }
}

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.subtitle}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex: 1.75'
                    keyboardType='numeric'
                />
                <Text style={styles.subtitle}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex: 75.5'
                    keyboardType='numeric'
                />
                      
                <TouchableOpacity
                    style={styles.button} 
                    onPress={() => validation()}>
                    <Text style={styles.textButton}>Calcular</Text>
                </TouchableOpacity>
                <ResultIMC messageResultIMC={messageResultIMC} ResultIMC={imc}/>
            </View>
        </View>
    )
}