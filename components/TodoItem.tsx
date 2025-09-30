import React from "react";
import { StyleSheet, Text, View } from "react-native";

type TodoItemProps = {
  text: string;
};

export default function TodoItem({ text }: TodoItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemText: {
    fontSize: 18,
  },
});
