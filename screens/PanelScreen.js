import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import EditorItem from "../components/panel/EditorItem";
import { collection, doc, getDocs, updateDoc, addDoc } from "firebase/firestore";
import { db } from "../firebase"; 

export default function PanelScreen({navigation}){

    const [newNombre, setNewNombre] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [actualModal, setActualModal] = useState("");
    const [actualType, setActualType] = useState("restaurante");
    const [items, setitems] = useState([]);
    const [actualItem, setActualItem] = useState(null);

    const HandleNewItem = async ({nombre, desc}) => {

        const info = {
            nombre: nombre,
            descripcion: desc
        }

        try {
            
        const docRef = await addDoc(collection(db, actualType), info);
        console.log(`${actualType} agregada con ID:`, docRef.id);
        
        } catch (error) {
            console.error("Error al agregar categoría:", error);
        }

        fetchItems();
        setActualModal('list')

    }

    const HandleUpdateItem = async (nombre, desc) => {

        const info = {
            nombre: nombre,
            descripcion: desc
        }

        try {
            const docRef = doc(db, actualType, actualItem.id);
            await updateDoc(docRef, info);
            console.log("Categoría actualizada");
        } catch (error) {
            console.error("Error al actualizar categoría:", error);
        }
        
        fetchItems();
        setActualModal('list')
    }

    const OptionsComponent = () => (
        <View style={st.container} >
            <Text style={st.title}>Que quiere administrar?</Text>
            <TouchableOpacity style={st.btn} onPress={()=>{setActualModal("list"); setActualType('restaurante'); fetchItems();}}>
                <Text style={st.btnText}>Restaurantes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setActualModal("list"); setActualType('comida'); fetchItems();}} style={st.btn}>
                <Text style={st.btnText}>Comidas</Text>
            </TouchableOpacity>
        </View>
    )

    const EditorComponent = () =>{

        const [internalName, setInternalName] = useState(newNombre);
        const [internalDesc, setInternalDesc] = useState(newDesc);

        return(
            <View style={st.container}>
                <TouchableOpacity style={st.atrasBtn} onPress={()=>{setActualModal("")}}>
                    <Text style={st.text}>Ir Atras</Text>
                </TouchableOpacity>
                <Text style={st.title}>Editando: {actualItem.nombre}</Text>
                <TextInput style={st.searcher} placeholder="Nombre" placeholderTextColor={'grey'} value={internalName} onChangeText={setInternalName}/>
                <TextInput style={st.searcher} placeholder="Descripcion" placeholderTextColor={'grey'} value={internalDesc} onChangeText={setInternalDesc}/>
                <TouchableOpacity onPress={()=>{HandleUpdateItem(internalName, internalDesc)}} style={st.newBtn}>
                    <Text style={[st.text, {textAlign: 'center'}]}>Editar Elemento</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const NewItemComponent = () => {

        const [internalName, setInternalName] = useState("");
        const [internalDesc, setInternalDesc] = useState("");

        return(
        <View style={st.container}>
            <TouchableOpacity style={st.atrasBtn} onPress={()=>{setActualModal("")}}>
                <Text style={st.text}>Ir Atras</Text>
            </TouchableOpacity>
            <Text style={st.title}>Añadir nuevo {actualType}</Text>
            <TextInput style={st.searcher} placeholder="Nombre" placeholderTextColor={'grey'} value={internalName} onChangeText={setInternalName}/>
            <TextInput style={st.searcher} placeholder="Descripcion" placeholderTextColor={'grey'} value={internalDesc} onChangeText={setInternalDesc}/>
            <TouchableOpacity onPress={()=>{HandleNewItem({nombre: internalName, desc: internalDesc})}} style={st.newBtn}>
                <Text style={st.text}>Añadir nuevo elemento</Text>
            </TouchableOpacity>
        </View>
        )
    }

    const ListComponent = () =>(
        <View style={st.container}>
            <TouchableOpacity style={st.atrasBtn} onPress={()=>{setActualModal("")}}>
                <Text style={st.text}>Ir Atras</Text>
            </TouchableOpacity>
            <Text style={st.title}>Lista de {actualType}s</Text>
            <TouchableOpacity style={st.newBtn} onPress={()=>{setActualModal('nuevo')}}><Text style={st.text}>Añadir nuevo elemento</Text></TouchableOpacity>
            {items.map((it) => (
                <EditorItem key={it.id} click={()=>{
                    setActualItem(it); 
                    setActualModal('editor'); 
                    setNewNombre(it.nombre); 
                    setNewDesc(it.descripcion); 
                }} data={it} type={actualType} loadItems={fetchItems}/>
            ))}
        </View>
    )

    const NoAccountComponent = () => (
        <View style={st.container}>
            <Text style={st.title}>Necesita una cuenta para administrar el panel</Text>
            <TouchableOpacity onPress={()=>{navigation.replace('HomeTabs', {screen: 'Perfil'})}} style={st.btn}>
                <Text style={st.btnText}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
    )

    const fetchItems = async () => {
        try {
            const q = collection(db, actualType);
            const data = await getDocs(q);
            const realData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            console.log(realData);
            setitems(realData);
        } catch (error) {
            console.error(`Error al cargar ${actualType}:`, error);
        }
    };

    const RenderComp = () => {
        if(auth.currentUser == undefined){
            return <NoAccountComponent />
        }else{
            switch (actualModal) {
                case 'editor':
                    return <EditorComponent />
                case 'nuevo':
                    return <NewItemComponent />
                case 'list':
                    return <ListComponent />
                default:
                    return <OptionsComponent />
            }
        }
    }

    return (
    auth.currentUser === undefined ? (
        <NoAccountComponent />
    ) : actualModal === 'editor' ? (
        <EditorComponent />
    ) : actualModal === 'nuevo' ? (
        <NewItemComponent />
    ) : actualModal === 'list' ? (
        <ListComponent />
    ) : (
        <OptionsComponent />
    )
);

}


const st = StyleSheet.create({
    container:{
        position: 'relative',
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
        fontSize: 22,
        textAlign: 'center'
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
    },
    atrasBtn:{
        position: 'absolute',
        left: 12,
        top: 12,
        borderWidth: 1,
        padding: 8,
        borderRadius: 4,
        paddingInline: 16,
        borderColor: '#B1CC40'
    },
    newBtn:{
        width: '90%',
        borderWidth: 1,
        padding: 8,
        borderRadius: 4,
        paddingInline: 16,
        borderColor: '#B1CC40',
        marginBottom: 12,
    },
    searcher:{
        backgroundColor: '#111',
        fontFamily: 'hey',
        color: '#fff',
        borderColor: '#4b4b4b',
        borderWidth: 1,
        borderRadius: 3,
        letterSpacing: 1,
        fontSize: 12,
        marginVertical: 8,
        paddingVertical: 12,
        paddingStart: 12,
        width: '90%'
    },
});