import { colors } from "@/constants/colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

const LocationMap = () => {
  const mapIframeHtml = `
    <iframe 
     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1984459.9855998366!2d100.633111!3d13.7246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok!5e0!3m2!1sen!2sth!4v1754729901874!5m2!1sen!2sth"
      width="100%" 
      height="100%" 
      frameborder="10" 
      style="border:10;" 
      allowfullscreen="" 
      aria-hidden="false" 
      tabindex="0">
    </iframe>
  `;
  return (
    <View style={styles.mapContainer}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: mapIframeHtml }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

export default LocationMap;

const styles = StyleSheet.create({
  mapContainer: {
    height: 400,
    borderWidth: 5,
    borderColor: colors.background.paper,
    borderRadius: 10,
  },
});
