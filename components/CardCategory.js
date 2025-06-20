import { User, Utensils } from "lucide-react-native";
import { StyleSheet, Text, View, Image } from "react-native";

export default function CardCategory({data}){

    const icono = (data.imagen == "") ? <Utensils color={'#fff'} /> : <Image style={st.img} source={{uri: data.imagen}} />;

    return(
        <View style={st.cont}>
            {icono}
            <Text style={st.sub}>
                {data.nombre}
            </Text>
        </View>
    )
}

const st = StyleSheet.create({
    cont:{
        alignItems:'center',
        justifyContent: 'center',
        height: 'auto',
        width: 80,
        gap: 8
    },
    sub:{
        color: '#fff',
        fontFamily: 'hey',
        textAlign: 'center',
        fontSize: 12
    },
    img:{
        height: 30,
        width: 30
    }
});