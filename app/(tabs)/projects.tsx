import Buttons from "@/components/buttons/Buttons";
import MainSection from "@/components/MainSection";
import ProjectList from "@/components/projects/ProjectList";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Projects() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MainSection
          title="Projects I've realized"
          description="Explore some of the projects I worked on in the past."
        >
          <Buttons
            text="Github"
            variant="default"
            link="https://github.com/zawzawmyint"
          />
          <Buttons
            text="LinkedIn"
            variant="primary"
            link="https://www.linkedin.com/in/zaw-zaw-myint-29745a199/"
          />
        </MainSection>
        <ProjectList />
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
