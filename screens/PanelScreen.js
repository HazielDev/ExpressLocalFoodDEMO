import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";


export default function PanelScreen(){

    const [actualModal, setActualModal] = useState("");

    return(
        <View style={st.container} >
            <Text style={st.title}>Que quiere administrar?</Text>
            <TouchableOpacity style={st.btn}>
                <Text style={st.btnText}>Restaurantes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={st.btn}>
                <Text style={st.btnText}>Comidas</Text>
            </TouchableOpacity>
        </View>
    )

}


const st = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111'
    },
    text:{
        color: '#fff',
        fontFamily: 'hey'
    },
    title:{
        marginBottom: 18,
        color: '#fff',
        fontFamily: 'heyo',
        fontSize: 22
    },
    btn:{
        marginVertical: 8,
        paddingVertical: 12,
        width: '90%',
        backgroundColor: '#B1CC40',
        borderRadius: 5,
    },
    btnText:{
        color: '#111',
        fontFamily: 'heyo',
        textAlign: 'center'
    }
});