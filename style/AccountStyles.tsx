import { StyleSheet } from 'react-native';
import color from '../contains/color';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        fontFamily: "Klarna Text"
    }, 
    imgArrow: {
        marginTop: 30,
        marginLeft: 20
    },
    textTitle: {
        color: "#FF5E00",
        fontSize: 24,
        textAlign: "center",
        fontWeight: "700",
        marginTop: 20

    },
    groundVector: {
        position: "relative"
    },
    imgBell: {
        position: "absolute",
        marginLeft: 20,
        marginTop: 33,

    },
    textBell: {
        position: "absolute",
        marginTop: 33,
        marginLeft: 55,
        color: "#804F1E",
        fontSize: 18,
        fontWeight: "700",

    },
    imgBackArrow:{
        marginLeft: 380,
        marginTop: 40
    },
    textTitleApp: {
        color: "#FF5E00",
        fontSize: 24,
        fontWeight: "700",
        marginTop: 32,
        marginLeft: 20
    },
    imgContainer:{
        marginTop: 35,
        marginLeft: 350 
    },
    textEnglish: {
        position: "absolute",
        color: "#804F1E",
        fontSize: 16,
        marginTop: 35,
        marginLeft: 310
    }
})

export default styles