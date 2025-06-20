import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ImageBanner from '../assets/burgerpromo.png';

export default function HomeMainBanner({img}){
    
    const imgUrl = img ?? 'https://instagram.fcyw1-1.fna.fbcdn.net/v/t51.29350-15/312000694_190720796759889_1921104220969872143_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTI0NC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fcyw1-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QGH9lFTK9VNMR55bPtWl03wRsH4-Zcujb6Jjv_nE93sQxzXOI6N0akZqvLgZiJT_SCb5l6zD5tdbqa5Gbl2zujr&_nc_ohc=Alks3SfNxL4Q7kNvwG1Sz6Z&_nc_gid=bcx30a-Uc_4eLmUvBb4NKQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk1NDAwNzAwMTQ4ODQxMzY3Mg%3D%3D.3-ccb7-5&oh=00_AfIQjz-SEJZyQEVHA-pyOb94AwXnfXP8rSwUPaJFeDNFNw&oe=6845BB5B&_nc_sid=10d13b';
    return(
        <View style={st.main}>
            <Image style={st.img} source={ImageBanner} />
        </View>
    );
}

const st = StyleSheet.create({
    main:{
        marginTop: -8,
        height: 200,
        width: '100%',
        backgroundColor: 'black'
    },
    text:{
        color: '#fff'
    },
    img:{
        height: 200,
        width: '100%'
    }
});