import { StyleSheet, Text, View } from "react-native";
import TodoItem from "../../components/TodoItem"; // ici c'est le chemin 

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>My Todo List</Text>

      <TodoItem text="Learn React Native" />
      <TodoItem text="Build a static UI" />
      <TodoItem text="Practice with StyleSheet" />
    </View>
  );
}

const styles = StyleSheet.create({  // ici je crée pas mage
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#8f8f92ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
