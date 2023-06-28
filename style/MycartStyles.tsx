import { StyleSheet } from "react-native";
import color from "../contains/color";

const styles =StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    viewArrow:{
        position: "relative"
    },
    imgArrow: {
        position: "absolute",
        marginTop: 30,
        marginLeft: 20
    },
    imgGroup: {
        position: "absolute",
        marginTop: 30,
        marginLeft: 360
    },
    textTitle: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        color: "#FF5E00",
        marginTop: 74
    },
    viewVector: {
        position: "relative"
    },
    imgVector1: {
        position: "absolute",
        marginTop: 50,
        marginLeft: 44,  
    },
    imgVector2: {
        position: "absolute",
        marginTop: 136.83,
        marginLeft: 80.21
    },
    imgVector3: {
        position: "absolute",
        marginTop: 178.57,
        marginLeft: 124.3,
    },
    imgVector4: {
        position: "absolute",
        marginTop: 201.82,
        marginLeft: 131.2
    },
    imgVector5: {
        position: "absolute",
        marginTop: 227.19,
        marginLeft: 138.72
    },
    textCard: {
        color: "#6D3805",
        fontSize: 20,
        fontWeight: "700",
        textAlign:"center",
        marginTop: 370
    },
    text: {
        color: "#6D3805",
        fontSize: 16,
        marginLeft: 61,
        textAlign:"center",
        marginTop: 11,
        width: 273, 
    }

})

export default styles