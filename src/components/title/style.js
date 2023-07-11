import { StyleSheet, StatusBar } from "react-native"

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 0 : 64

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#E1E7E4',
        width: "100%",
        height: "40%",
        paddingTop: statusBarHeigth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        color: "#D90D4A",
        fontWeight: 'bold',
        fontSize: 24
    }
});

export default styles