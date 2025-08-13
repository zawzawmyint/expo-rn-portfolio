import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Info = () => {
  return (
    <View style={styles.introContainer}>
      <Text style={styles.title}>Zaw Zaw Myint - Software Developer</Text>
      <Text style={styles.description}>
        Hey, I’m Zaw Zaw Myint (Zack)! , a Frontend Developer based in the
        Thailand. I’ve been working in web development for over 4 years, mainly
        focusing on front-end development with ReactJS. I specialize in crafting
        interactive and visually appealing user interfaces using React.js,
        Next.js, and TypeScript. My journey has equipped me with strong
        expertise in UI/UX design, state management (Redux), and modern
        JavaScript frameworks.
      </Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  introContainer: {
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});
