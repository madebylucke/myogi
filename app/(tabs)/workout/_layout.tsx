import { Stack } from "expo-router";

export default function WorkoutStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Workout" }} />
      <Stack.Screen
        name="preview"
        options={{
          title: "Workout Preview",
        }}
      />
    </Stack>
  );
}
