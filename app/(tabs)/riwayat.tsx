import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const data = [
  { total: "72000", time: "02:30 PM", date: "20/11/2022", status: "success" },
  { total: "72000", time: "02:30 PM", date: "20/11/2022", status: "failed" },
  { total: "50000", time: "02:30 PM", date: "20/11/2022", status: "failed" },
  { total: "20000", time: "03:33 PM", date: "20/11/2022", status: "failed" },
  { total: "72000", time: "04:30 PM", date: "20/11/2022", status: "success" },
  { total: "40000", time: "04:30 PM", date: "20/11/2022", status: "success" },
  { total: "40000", time: "04:30 PM", date: "20/11/2022", status: "success" },
];

const RiwayatScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.label}>TOTAL</Text>
              <Text style={styles.total}>RP.{item.total}</Text>
              <Text style={styles.timeDate}>{item.time}  {item.date}</Text>
            </View>
            <FontAwesome
              name={item.status === "success" ? "check-circle" : "times-circle"}
              size={24}
              color={item.status === "success" ? "green" : "red"}
              style={styles.icon}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 16,
    backgroundColor: "#f2f2f2",
  },
  container: {
    flex: 1,
    marginTop:20
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#888",
    fontWeight: "bold",
  },
  total: {
    fontSize: 20,
    color: "#3b4cc0",
    fontWeight: "bold",
  },
  timeDate: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
  icon: {
    marginLeft: 10,
  },
});

export default RiwayatScreen;
