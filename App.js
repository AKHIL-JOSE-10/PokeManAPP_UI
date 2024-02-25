import { View, Text, SafeAreaView, StyleSheet, Platform, ScrollView } from "react-native"
import PokemonCard from "./components/PokemonCard"
export default function APP() {

  const charmanterData = {
    name: "Charmanter",
    image: require("./assets/charmander.png"),
    type: "fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"]
  }
  const bulbasaurData = {
    name: "bulbasaur",
    image: require("./assets/bulbasaur.png"),
    type: "Grass",
    hp: 39,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Speed"],
    weaknesses: ["Fire", "Ice"]
  }
  const pikachuData = {
    name: "pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 39,
    moves: ["Quick Attack","ThunderBolt","Tail Whip"],
    weaknesses: ["Ground"]
  }
  const squirtleData = {
    name: "squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 39,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"]
  }
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <PokemonCard {...charmanterData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
        <PokemonCard {...squirtleData} />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTOp: Platform.OS == "android" ? 25 : 0
  }
})