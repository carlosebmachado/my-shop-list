import { Image, StyleSheet, Platform, TouchableHighlight, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ListCard } from "@/components/ListCard";

import { Colors } from "@/constants/Colors";
import { Sizes } from "@/constants/Sizes";

import { useTranslation } from "react-i18next";

export default function HomeScreen() {
  const { t /*, i18n*/ } = useTranslation();

  function changeLanguage(lang: string) {
    // i18n.changeLanguage(lang);
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t("lists")}</ThemedText>
      </ThemedView>
      <ScrollView>
        <View style={{ padding: 18, backgroundColor: Colors.dark.lightBackground }}>
          {Array(15)
            .fill(0)
            .map((_, i) => {
              return <ListCard key={i} title={"List " + i} content={"Loren ipsum dolor sit amet"} />;
            })}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 48,
    paddingTop: 48,
    // paddingHorizontal: 28,
    // gap: 16,
    // overflow: "hidden",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingBottom: 12,
    paddingHorizontal: Sizes.container.paddingHorizontal,
  },
  scrollView: {
    backgroundColor: Colors.dark.lightBackground,
    paddingHorizontal: Sizes.container.paddingHorizontal,
    gap: 16,
    overflow: "hidden",
  },
});
