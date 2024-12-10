import { Platform, StyleSheet, TouchableHighlight, View, type ViewProps } from "react-native";
import { Link } from 'expo-router';

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export type ThemedViewProps = ViewProps & {
  title: string;
  content: string;
};

export function ListCard({ title, content }: ThemedViewProps) {
  return (
    <Link href="/list" asChild>
      <TouchableHighlight style={styles.container}>
        <View>
          <ThemedText type="subtitle">{title}</ThemedText>
          <ThemedText>{content}</ThemedText>
        </View>
      </TouchableHighlight>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 5,
    gap: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: "red",
  },
});
