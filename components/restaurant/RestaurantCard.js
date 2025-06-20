import { View, StyleSheet, Text, Image } from "react-native";


export default function RestaurantCard({data}){

    return(
        <View style={st.container}>
            <Image style={st.img} source={{uri: data.imagen}} /> 
            <Text style={st.titl}>{data.nombre}</Text>
        </View>
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