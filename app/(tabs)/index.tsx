import { products } from "@/assets/data/products";
import ProductCard from "@/components/ProductCard";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hey! what do you want?</Text>
        <Image style={styles.avi} source={require("@/assets/images/avi.png")} />
      </View>
      <FlatList
        style={styles.productsWrapper}
        data={products}
        renderItem={({ item }) => <ProductCard {...item} />}
        keyExtractor={(item) => item.name}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
        contentContainerStyle={{ paddingBottom: 180 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  headerText: {
    fontWeight: "800",
    fontSize: 28,
    width: "50%",
  },
  avi: {
    width: 49,
    height: 49,
    borderRadius: 400,
  },
  productsWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
