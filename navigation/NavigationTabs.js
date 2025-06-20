import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfScreen from "../screens/ProfScreen";
import { TouchableOpacity, Text } from "react-native";
import FloatingNav from "../components/FloatingNav";
import { Book, Home, Settings2, User } from "lucide-react-native";
import HistoryScreen from "../screens/HistoryScreen";
import PanelScreen from "../screens/PanelScreen";

const Tab = createBottomTabNavigator();

export default function NavigationTabs(){
    return(
        <Tab.Navigator 
            initialRouteName="Inicio"
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#111',
                    borderColor: 'grey',
                    height: 100
                },
                tabBarActiveTintColor: '#B1CC40',
                tabBarInactiveTintColor: '#3c3c3c',
                headerStyle: {
                    backgroundColor: '#fff', // Fondo del header
                    height: 120, 
                },
                tabBarLabelStyle: {
                    fontFamily: 'hey',
                    width: 40
                },
                tabBarLabelPosition: 'below-icon',
                tabBarButton: (props) => (
                    <TouchableOpacity
                        {...props}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        activeOpacity={1} // Elimina el efecto de presión
        
                    >
                    </TouchableOpacity>
                ),
                headerTitle: () => (
                    <FloatingNav />
                ),
                headerTitleAlign: 'center', // Opcional: centrar la imagen
            }}>
             <Tab.Screen name="Inicio" component={HomeScreen}  options={{
                    tabBarIcon: ({ color, size }) => (
                        <Home size={20} color={color} />
                    ),
                }} />
            <Tab.Screen name="Panel" component={PanelScreen}  options={{
                    tabBarIcon: ({ color, size }) => (
                        <Settings2 size={20} color={color} />
                    ),
                }}/>
             <Tab.Screen name="Perfil" component={ProfScreen}  options={{
                    tabBarIcon: ({ color, size }) => (
                        <User size={20} color={color} />
                    ),
                }}/>
        </Tab.Navigator>
    );
}