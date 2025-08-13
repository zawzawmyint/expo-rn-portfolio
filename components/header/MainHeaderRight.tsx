import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const MainHeaderRight = () => {
  return (
    <View style={{ flexDirection: "row", gap: 10, marginRight: 20 }}>
      <Link href="https://github.com/zawzawmyint">
        <Ionicons name="logo-github" size={24} color="black" />
      </Link>
      <Link href="https://www.linkedin.com/in/zaw-zaw-myint-29745a199/">
        <Ionicons name="logo-linkedin" size={24} color={colors.info.dark} />
      </Link>
    </View>
  );
};

export default MainHeaderRight;
