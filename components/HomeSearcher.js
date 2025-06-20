import { Search } from "lucide-react-native";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

export default function HomeSearcher(){
    return(
    <View style={st.contSearcher}>
        <TextInput style={st.searcher} placeholder="Buscar Comida" placeholderTextColor={'grey'}></TextInput>
        <TouchableOpacity style={st.searcherBtn}><Search color="#B1CC40" size={16} /></TouchableOpacity>
    </View>
    )
}

const st = StyleSheet.create({
    contSearcher:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -22,
        marginBottom: 32,
        height: 'auto',
        width: '95%',
        backgroundColor: '#111',
        padding: 8,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#333333'
    },
    searcher:{
        flex: 1,
        backgroundColor: '#111',
        fontFamily: 'hey',
        color: '#fff',
        borderRadius: 3,
        letterSpacing: 1,
        fontSize: 12,
        paddingVertical: 0,
        paddingStart: 12,
    },
    searcherBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 40,
        color: '#B1CC40',
        marginLeft: 8,
        borderRadius: 3
    }
});