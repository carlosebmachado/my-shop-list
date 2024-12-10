import { Platform, StyleSheet, TouchableHighlight, View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export type ThemedViewProps = ViewProps & {
  title: string;
  content: string;
};

export default function ListItem({ title, content }: ThemedViewProps) {
  return (
    <View style={styles.container}>
      <ThemedText>2 un. {title}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // marginVertical: 5,
    // gap: 8,
    marginBottom: 12,
    borderRadius: 5,
    backgroundColor: "red",
  },
});
