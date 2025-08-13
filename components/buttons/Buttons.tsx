import { colors } from "@/constants/colors";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

const Buttons = ({
  text,
  variant = "default",
  link = "#",
}: {
  text: string;
  variant?: "default" | "primary";
  link?: string;
}) => {
  return (
    <Pressable
      onPress={() => {
        console.log("Pressed");
      }}
      style={[
        styles.button,
        variant === "default" ? styles.default : styles.primary,
      ]}
    >
      <Link
        href={link as any}
        style={[
          styles.text,
          variant === "default" ? styles.defaultText : styles.primaryText,
        ]}
      >
        {text}
      </Link>
    </Pressable>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    minWidth: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  default: {
    backgroundColor: colors.background.paper,
  },
  primary: {
    backgroundColor: colors.primary.main,
  },
  text: {
    fontSize: 16,
  },
  defaultText: {
    color: colors.text.default,
  },
  primaryText: {
    color: colors.text.inverted,
  },
});
