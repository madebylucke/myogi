import { useColorScheme } from "@/components/hooks/useColorScheme";
import SvgCalendar from "@/components/icons/SvgCalendar";
import SvgChart from "@/components/icons/SvgChart";
import SvgTimer from "@/components/icons/SvgTimer";
import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 70,
            marginBottom: 10,
            paddingBottom: 10,
            paddingTop: 10,
            paddingHorizontal: 14,
            backgroundColor: "transparent",
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarItemStyle: {
            borderRadius: 4,
            overflow: "hidden",
            marginHorizontal: 6,
          },
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          tabBarActiveBackgroundColor:
            Colors[colorScheme ?? "light"].tabIconSelectedBackground,
          tabBarInactiveTintColor: "#bbbbbbff",
        }}
      >
        <Tabs.Screen
          name="workout"
          options={{
            title: "Workout",
            tabBarIcon: ({ color }) => (
              <SvgTimer width={28} height={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="plan/index"
          options={{
            title: "Plan",
            tabBarIcon: ({ color }) => (
              <SvgCalendar width={28} height={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="analyze/index"
          options={{
            title: "Analyze",
            tabBarIcon: ({ color }) => (
              <SvgChart width={28} height={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
