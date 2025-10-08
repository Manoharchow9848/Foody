import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#FFA500",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { height: 60, paddingBottom: 5 },
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "index") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "favourites") {
            // ✅ use heart or heart-outline
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "viewAll") {
            // ✅ use apps-outline instead of grid-outline
            iconName = focused ? "apps" : "apps-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={26} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="favourites" options={{ title: "Favourites" }} />
      <Tabs.Screen name="viewall" options={{ title: "View All" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
