import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import db from "../../_data/db.json";

const ContactInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Info.</Text>
      {db.contacts.map((item) => (
        <View key={item.text} style={styles.item}>
          <Ionicons name={"checkmark-circle-outline"} size={24} color="black" />
          <Link style={styles.text} href={item.linkto as any}>
            {item.text}
          </Link>
        </View>
      ))}
    </View>
  );
};

export default ContactInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    gap: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
    marginBottom: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
});
