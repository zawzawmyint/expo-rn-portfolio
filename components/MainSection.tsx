import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MainSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonContainer}>{children}</View>
    </View>
  );
};

export default MainSection;

const styles = StyleSheet.create({
  container: {
    gap: 15,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
    opacity: 0.5,
    letterSpacing: 0.5,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
  },
});
