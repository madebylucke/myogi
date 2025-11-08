import SvgChevronRight from "@/components/icons/SvgChevronRight";
import { fontSize, height, width } from "@/constants/ResponsiveSizes";
import { StyleSheet, Text, View } from "react-native";

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

const weeks = [
  [31, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, 1, 2, 3],
];

const workouts = [
  {
    title: "Pull day",
    plan: "Hypertrophy Plan",
    description: "4 exercises",
  },
  {
    title: "Light Cardio Session",
    plan: "Endurance Plan",
    description: "6 km sprint",
  },
];

export default function PlanScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerDropdown}>
          <Text style={styles.headerDropdownText}>Dec</Text>
          <SvgChevronRight
            style={{ transform: [{ rotate: "90deg" }, { translateX: 3 }] }}
            strokeWidth={3}
          />
        </View>
        <View style={styles.headerPrograms}>
          <Text style={styles.headerProgramsText}>Programs</Text>
        </View>
      </View>
      <View style={styles.calendar}>
        <View style={styles.weekdays}>
          {WEEKDAYS.map((day, i) => (
            <View key={i} style={styles.weekday}>
              <Text style={styles.weekdayText}>{day}</Text>
            </View>
          ))}
        </View>
        <View style={styles.divider}></View>
        {weeks.map((week, i) => (
          <View key={i}>
            <View style={styles.week}>
              {week.map((day, j) => {
                const isSelected = day === 10;
                const isInactive = (i === 0 && j === 0) || (i === 4 && j > 3);
                return (
                  <View
                    key={j}
                    style={[
                      styles.day,
                      isSelected && styles.selectedDay,
                      isInactive && styles.inactiveDay,
                    ]}
                  >
                    <Text
                      style={[
                        styles.dayText,
                        isSelected && styles.selectedText,
                      ]}
                    >
                      {day}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.divider}></View>
          </View>
        ))}
      </View>
      <View style={styles.workouts}>
        {workouts.map((workout, i) => (
          <View
            key={i}
            style={[
              styles.workout,
              i === 0 && {
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              },
              i === workouts.length - 1 && {
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              },
            ]}
          >
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutTitle}>{workout.title}</Text>
              <Text style={styles.workoutPlan}>{workout.plan}</Text>
              <Text style={styles.workoutDescription}>
                {workout.description}
              </Text>
            </View>
            <View style={styles.workoutButton}>
              <SvgChevronRight></SvgChevronRight>
            </View>
          </View>
        ))}
        <View style={styles.addWorkout}>
          <Text style={styles.addWorkoutText}>Add Workout</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "95%",
    backgroundColor: "lightslategray",
    marginVertical: 3,
    marginHorizontal: "auto",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width(4),
    paddingVertical: height(1),
    marginBottom: height(2),
  },
  headerDropdown: {
    flexDirection: "row",
    alignItems: "center",
    gap: height(1),
  },
  headerDropdownText: {
    fontSize: fontSize(30),
    fontWeight: "600",
  },
  headerPrograms: {
    borderColor: "darkslategray",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  headerProgramsText: {
    color: "darkslategray",
    fontSize: fontSize(16),
  },
  calendar: {
    width: "100%",
    paddingHorizontal: width(6),
    paddingBottom: 12,
  },
  weekdays: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 3,
  },
  weekday: {
    width: 35,
    alignItems: "center",
  },
  weekdayText: {
    fontSize: 18,
    fontWeight: 600,
  },
  week: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  day: {
    borderRadius: 4,
    width: 45,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    color: "darkslategray",
    fontWeight: 600,
    fontSize: 16,
  },
  selectedText: {
    color: "white",
    fontWeight: 600,
  },
  selectedDay: {
    backgroundColor: "#333",
  },
  inactiveDay: {
    opacity: 0.3,
  },
  nonActiveText: {
    color: "green",
  },
  workouts: {
    gap: 4,
    paddingHorizontal: width(10),
  },
  workout: {
    width: "100%",
    backgroundColor: "#e6e9ecff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingTop: 10,
    paddingBottom: 16,
    paddingHorizontal: width(6),
    justifyContent: "space-between",
  },
  workoutInfo: {
    gap: 2,
  },
  workoutTitle: {
    fontWeight: "600",
    fontSize: 24,
  },
  workoutPlan: {
    color: "dimgray",
  },
  workoutDescription: {},
  workoutButton: {},
  addWorkout: {
    marginTop: 8,
    borderRadius: 12,
    borderColor: "lightslategrey",
    borderStyle: "dashed",
    borderWidth: 2,
    paddingVertical: width(4),
    alignItems: "center",
  },
  addWorkoutText: {
    fontSize: 17,
    color: "lightslategrey",
  },
});
