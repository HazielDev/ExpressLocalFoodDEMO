import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LogOut, User } from "lucide-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfRealScreen(){

    const [nombreStorage, setNombreStorage] = useState("");

    const closeSession = () => {
        AsyncStorage.setItem('hCode', "");
    }

    useEffect(() => {
        const cargarNombre = async () => {
            let nombre = await AsyncStorage.getItem('nombre');
            setNombreStorage(nombre)
        }

        cargarNombre();
    }, [])

    return(
        <View style={st.main}>
            <View style={st.topProfile}>
                <User size={20} color={'#fff'} />
                <Text style={st.basicText}>{nombreStorage}</Text>
            </View>
            <View style={st.body}>
                <TouchableOpacity style={st.btn} onPress={closeSession}>
                    <LogOut size={20} color={'#fff'} />
                    <Text style={st.basicText}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const st = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#223'
    },
    topProfile:{
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingInline: 32,
        gap: 32,
        borderWidth: 1,
        borderColor: '#3c3c3c',
        backgroundColor: '#111',
        width: '90%',
        height: 'auto',
        paddingVertical: 26,
        borderRadius: 3
    },
    body:{
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#3c3c3c',
        backgroundColor: '#111',
        width: '90%',
        height: 'auto',
        alignItems: 'center',
        paddingVertical: 26,
        borderRadius: 3,
    },
    basicText: {
        color: '#fff',
        fontFamily: 'hey'
    },
    btn:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        width: '90%'
    }
});