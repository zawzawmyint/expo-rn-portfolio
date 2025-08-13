import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
const ProfileImage = require("@/assets/images/profile.png");

const Profile = () => {
  return (
    <View style={styles.imageContainer}>
      <Image source={ProfileImage} style={styles.image} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
