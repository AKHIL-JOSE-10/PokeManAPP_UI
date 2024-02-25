import { View, Text, StyleSheet, Platform, Image } from 'react-native'

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses,
}) {

    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>{hp}</Text>
            </View>
            <Image style={styles.image} source={image} accessibilityLabel={`${name} Pokemon`} resizeMode="contain" ></Image>

            <View style={styles.typeContainer}>
                <View style={styles.badge}>
                    <Text styles={styles.typeText}>{type}</Text>
                </View>
                
            </View>

            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves:{moves.join(", ")}</Text>
            </View>

            <View style={styles.weaknessContainer}>
                <Text style={styles.weaknessText}>weakness:{weaknesses.join(", ")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5,
            }
        })
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22
    },
    image:{
        width:"100%",
        height:200,
        marginBottom:16
    },
    typeContainer:{
        marginBottom:40,
        alignItems:"center"
    },
    badge:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:6,
        paddingHorizontal:15,
        borderRadius:20,
        borderWidth:4
    },
    movesContainer:{
        marginBottom:16
    },
    movesText:{
        fontSize:20,
        fontWeight:"bold"
    },
    weaknessContainer:{
        marginBottom:8
    },
    weaknessText:{
        fontSize:22,
        fontWeight:"bold"
    }


})