import CartCard from "@/components/CartCard";
import ItemSeparator from "@/components/ItemSeparator";
import { useCart } from "@/context/CartContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const { state } = useCart();
  return (
    <SafeAreaView style={styles.container}>
      {state.cart.length > 0 ? (
        <>
          <FlatList
            style={styles.container}
            data={state.cart}
            renderItem={({ item }) => <CartCard {...item} />}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={{
              paddingBottom: 80,
              paddingHorizontal: 20,
            }}
          />
          <Link href="/sucess" asChild>
            <Pressable style={styles.btn}>
              <Text style={{ textAlign: "center" }}>Order</Text>
            </Pressable>
          </Link>
        </>
      ) : (
        <Text style={{ textAlign: "center" }}>No Item</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  btn: {
    width: "90%",
    backgroundColor: "lightblue",
    margin: "auto",
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    bottom: 10,
    left: 20,
  },
});
