import { StyleSheet, View, Text } from "react-native";
import HomeMainBanner from "../components/HomeMainBanner";


export default function HistoryScreen(){
            
    return(
        <View style={st.main}>
            <HomeMainBanner img={'https://instagram.fgdl3-1.fna.fbcdn.net/v/t51.29350-15/312355033_1589880921473187_207738236186971451_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjcyMHg4Mjkuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fgdl3-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QGpH7mfSLWIbGLEUmaO8mgTkUek5eKymKSwbwQc0exCwwbOCtzZ2r1q4ixi4LPuq7A&_nc_ohc=wApl7ydaOCsQ7kNvwEmLeDu&_nc_gid=tr-lNFB_BH7HK774Iq-inA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk1NDAwNzAwMTQ3OTgzOTIzMQ%3D%3D.3-ccb7-5&oh=00_AfKdwyK3bWmUvGm_7yDjp17iUwT9oo8zf3cJyI5Y2l_JAA&oe=684668D9&_nc_sid=10d13b'} />
            <Text style={st.title}>Nuestra historia</Text>
            <Text style={st.sub}>Todo paso cuando le dije a mi "MAI" bob, oye mi todo esponjado los homies de hoy no tienen la facha que solían tener, hay que arreglar eso, pidele a tu jefazo cangrejo que nos preste una feria, así fue cómo don cangrejo se convirtio en nuestro primer inversor, todo fondo de bikini se vestia con nuestra ropa y usaba nuestros articulos. FUIMOS MAS QUE EXITOSOS</Text>
        </View>
    )
}

const st = StyleSheet.create({

    main:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title:{
        color: 'black',
        fontFamily: 'heyo',
        width: '90%',
        fontSize: 34,
        marginTop: 16,
    },
    sub:{
        width: '90%',
        fontFamily: 'hey',
        lineHeight: 24
    }

});
