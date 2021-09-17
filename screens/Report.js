import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, Alert } from 'react-native';
import { Title, Card, Button } from 'react-native-paper';
import * as OpenAnything from 'react-native-openanything';


const Report = (props) => {

    const { _id, name, phone, email, address, age, gender, runningnose, sneeze, cough, wheeze, headache, itch, swell, redrashes, familyhistory, banana, mango, fruit1, fruit2, lime, avaraikai, beans, beetroot, brinjal, cabbage, capsicum, cauliflower, carrot, chowchow, corn, cucumber, drumstick, greens, gourds, kovaikai, kothavarai, lfinger, malli, mushroom, nuckol, onion, peas, potroot, potato, pumkin, pudina, radish, tomato, tondaikai, vazpoo, yams,

    } = props.route.params.item

    const downloadPatient = () => {
        fetch("http://20ef-122-167-192-211.ngrok.io/download", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: _id
            })
        })
            .then(res => res.json())
            .then(downloadingUser => {
                Alert.alert(`${downloadingUser.name}, Report generated`, "OK")
                props.navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("PDF not generating")
            })
    }


    const deletePatient = () => {
        fetch("http://20ef-122-167-192-211.ngrok.io/delete", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: _id
            })
        })
            .then(res => res.json())
            .then(deletePat => {
                Alert.alert(`${deletePat.name} deleted`)
                props.navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Something went wrong")
            })
    }
    const openDial = () => {
        if (Platform.OS === "android") {
            Linking.openURL(`tel:${phone}`)
        }
        else {
            Linking.openURL(`telprompt:${phone}`)
        }

    }

    return (
        <ScrollView>
            <View style={{ alignItems: "center" }}>
                <Title >
                    Report
                </Title>
            </View>
            <View>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Name: {name}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard} onPress={() => openDial()}>
                    <View style={styles.cardContent}>
                        <Text>
                            Phone: {phone}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard} onPress={() => { Linking.openURL(`mailto:${email}`) }}>
                    <View style={styles.cardContent}>
                        <Text>
                            Email: {email}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Address: {address}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Age: {age}
                        </Text>
                    </View>
                </Card>
                <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                        <Text>
                            Gender: {gender}
                        </Text>
                    </View>
                </Card>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Button style={{ backgroundColor: "orange", margin: 10 }} onPress={() => downloadPatient()}>
                    Generate and Mail PDF
                </Button>
                <Button style={{ backgroundColor: "cyan", margin: 10 }} onPress={() => {
                    props.navigation.navigate("AddPatient", {
                        _id, name, phone, email, address, age, gender, runningnose, sneeze, cough, wheeze, headache, itch, swell, redrashes, familyhistory, banana, mango, fruit1, fruit2, lime, avaraikai, beans, beetroot, brinjal, cabbage, capsicum, cauliflower, carrot, chowchow, corn, cucumber, drumstick, greens, gourds, kovaikai, kothavarai, lfinger, malli, mushroom, nuckol, onion, peas, potroot, potato, pumkin, pudina, radish, tomato, tondaikai, vazpoo, yams,
                    })
                }}>
                    Edit
                </Button>
            </View>
            <View>
                <Button style={{ backgroundColor: "red", margin: 10 }} onPress={() => deletePatient()}>
                    Delete
                </Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 3,
    },
    cardContent: {
        flexDirection: "row",
        padding: 10
    }
})

export default Report;