import React from "react";
import { StyleSheet, Text } from "react-native";

const TechTitle = ({ title }: { title: string }) => {
  return <Text style={styles.techTitle}>{title}</Text>;
};

export default TechTitle;

const styles = StyleSheet.create({
  techTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
});
