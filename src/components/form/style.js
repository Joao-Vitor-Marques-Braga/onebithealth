import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        bottom: 0,
        backgroundColor:"#fff"
    }, 
    form:{
        padding: 50,
        width: "100%"
    },
    subtitle:{
        fontSize: 20,
        fontWeight: 500,
        marginLeft: 15,
        marginTop: 10
    },
    input:{
        backgroundColor: "#f1f1f1",
        borderRadius: 20,
        width: "100%",
        height: 45,
        padding: 5
    },
    button:{
        backgroundColor: "#D90D4A",
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 15,
    },
    textButton:{
        color: "#fff",
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default styles