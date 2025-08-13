import Buttons from "@/components/buttons/Buttons";
import ContactInfo from "@/components/contact/ContactInfo";
import LocationMap from "@/components/contact/LocationMap";
import MainSection from "@/components/MainSection";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Contact() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MainSection
          title="Reach Out and Say Hello!"
          description="I'm always eager to connect with like-minded individuals and explore new opportunities."
        >
          <Buttons
            text="LinkedIn"
            variant="default"
            link="https://www.linkedin.com/in/zaw-zaw-myint-29745a199/"
          />
          <Buttons
            variant="primary"
            text="Resume"
            link="https://zawzawmyint.vercel.app/resume/Zaw_Zaw_Myint_Resume.pdf"
          />
        </MainSection>
        <LocationMap />
        <ContactInfo />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    flexDirection: "column",
    gap: 30,
  },
});
