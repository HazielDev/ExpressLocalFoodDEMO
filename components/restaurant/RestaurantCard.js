import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";


export default function RestaurantCard({data, navigation}){

    return(
        <TouchableOpacity style={st.container} onPress={()=>{navigation.navigate('Detail', {info: data})}}>
            <Image style={st.img} source={{uri: data.imagen}} /> 
            <Text style={st.titl}>{data.nombre}</Text>
        </TouchableOpacity>
    )
}

const st = StyleSheet.create({
    container:{
        marginVertical: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        height: 200,
        width: '95%',
        backgroundColor: '#222',
        borderRadius: 5,
        borderWidth: 1,
        overflow: 'hidden'
    },
    img:{
        height: '150',
        width: '100%',
        backgroundColor: '#222'
    },
    titl:{
        color: '#fff',
        fontFamily: 'heyo'
    }
});