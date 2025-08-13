import { getImage } from "@/utils/getImage";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

interface WorkExperience {
  position: string;
  company: string;
  company_link: string;
  companyImage: string;
  project: string;
  skills: string;
  period: string;
  tasks: string[];
}

const WorkExpCard = ({
  workexperience,
}: {
  workexperience: WorkExperience;
}) => {
  return (
    <View style={styles.workExpCardContainer}>
      {/* title  */}
      <View style={styles.workExpCardTitleContainer}>
        <View style={styles.workExpCardTitle}>
          <Text style={styles.workExpCardTitleText}>
            {workexperience.position}
          </Text>
          <Text style={styles.workExpCardTitleDate}>
            {workexperience.period}
          </Text>
        </View>
        <Text style={styles.workExpCardCompany}>{workexperience.company}</Text>
      </View>
      {/* image  */}
      <View style={styles.workExpCardImageContainer}>
        <Image
          source={getImage(workexperience.companyImage)}
          style={styles.workExpCardImage}
        />
      </View>
      {/* project */}
      <View style={styles.workExpCardProjectContainer}>
        <Text style={styles.workExpCardProjectTitle}>
          {workexperience.project}
        </Text>
        {/* project desc  */}
        <ScrollView
          nestedScrollEnabled={true}
          style={{
            height: 200,
          }}
        >
          <View style={styles.workExpCardProjectDescriptionContainer}>
            {workexperience.tasks.map((task) => (
              <View key={task} style={styles.workExpCardProjectDescription}>
                <Text style={styles.bullet}>•</Text>
                <Text style={{ opacity: 0.7, lineHeight: 24 }}>{task}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default WorkExpCard;

const styles = StyleSheet.create({
  workExpCardContainer: {
    flex: 1,
    gap: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    padding: 20,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
  },
  workExpCardTitleContainer: {
    gap: 5,
  },
  workExpCardTitle: {
    gap: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  workExpCardCompany: {
    fontSize: 14,
    opacity: 0.5,
  },
  workExpCardTitleText: {
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.7,
  },
  workExpCardTitleDate: {
    fontSize: 14,
    opacity: 0.7,
  },
  workExpCardImageContainer: {
    width: "100%",
    height: 300,
  },
  workExpCardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  workExpCardProjectContainer: {
    flex: 1,
    gap: 10,
  },
  workExpCardProjectTitle: {
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.7,
  },
  workExpCardProjectDescriptionContainer: {
    gap: 5,
  },
  workExpCardProjectDescription: {
    flexDirection: "row",

    gap: 5,
  },
  bullet: {
    fontSize: 14,
  },
});
