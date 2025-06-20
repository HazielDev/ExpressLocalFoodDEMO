import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { db, deleteDoc } from '../../firebase';
import { doc } from 'firebase/firestore';

export default function EditorItem({click, data, type, loadItems}){

    const handleDelete = async () => {
        try {
        await deleteDoc(doc(db, type, data.id));
        console.log(`Categoría con id ${data.id} eliminada`);
        loadItems();
        } catch (error) {
            console.error("Error al eliminar la categoría:", error);
        }
    }

    return(
        <View style={st.cont}>
            <Image source={{uri: data.imagen}} />
            <Text style={st.text}>{data.nombre}</Text>
            <View style={st.contControls}>
                <TouchableOpacity onPress={click} style={st.btn}>
                    <Text style={st.btnText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={st.btn} onPress={handleDelete}>
                    <Text style={st.btnText}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const st = StyleSheet.create({
    text:{
        color: '#fff',
        fontFamily: 'hey'
    },  
    cont:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 90,
        width: '90%',
        borderWidth: 1,
        borderColor: '#4a4a4a',
        borderRadius: 2,
        marginVertical: 8,
        paddingInline: 12
    },
    contControls:{
        height: '100%',
        flexDirection:'column',
        justifyContent:'space-evenly'
    },
    btn:{
        padding: 8,
        backgroundColor: '#B1CC40',
        borderRadius: 2
    },
    btnText:{
        fontSize: 12,
        color: '#111',
        fontFamily: 'heyo'
    }
});