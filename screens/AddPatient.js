import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { TextInput, RadioButton, Button, List, Checkbox } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import CollapsibleList from "react-native-collapsible-list";


const AddPatient = ({ navigation, route }) => {

    const getDetails = (type) => {
        if (route.params) {
            switch (type) {
                case "name": return route.params.name
                case "phone": return route.params.phone
                case "email": return route.params.email
                case "address": return route.params.address
                case "age": return route.params.age
                case "gender": return route.params.gender

                case "runningnose": return route.params.runningnose
                case "sneeze": return route.params.sneeze
                case "wheeze": return route.params.wheeze
                case "headache": return route.params.headache
                case "itch": return route.params.itch
                case "swell": return route.params.swell
                case "redrashes": return route.params.redrashes
                case "familyhistory": return route.params.familyhistory

                case "banana": return route.params.banana
                case "mango": return route.params.mango
                case "fruit1": return route.params.fruit1
                case "fruit2": return route.params.fruit2
                case "lime": return route.params.lime

                case "avaraikai": return route.params.avaraikai
                case "beans": return route.params.beans
                case "beetroot": return route.params.beetroot
                case "brinjal": return route.params.brinjal
                case "cabbage": return route.params.cabbage
                case "capsicum": return route.params.capsicum
                case "cauliflower": return route.params.cauliflower
                case "carrot": return route.params.carrot
                case "chowchow": return route.params.chowchow
                case "corn": return route.params.corn
                case "cucumber": return route.params.cucumber
                case "drumstick": return route.params.drumstick
                case "greens": return route.params.greens
                case "gourds": return route.params.gourds
                case "kovaikai": return route.params.kovaikai
                case "kothavarai": return route.params.kothavarai
                case "lfinger": return route.params.lfinger
                case "malli": return route.params.malli
                case "mushroom": return route.params.mushroom
                case "nuckol": return route.params.nuckol
                case "onion": return route.params.onion
                case "peas": return route.params.peas
                case "potroot": return route.params.potroot
                case "potato": return route.params.potato
                case "pumkin": return route.params.pumkin
                case "pudina": return route.params.pudina
                case "radish": return route.params.radish
                case "tomato": return route.params.tomato
                case "tondaikai": return route.params.tondaikai
                case "vazpoo": return route.params.vazpoo
                case "yams": return route.params.yams

            }
        }
        else {
            return ""
        }
    }

    const [Name, setName] = useState(getDetails("name"))
    const [Phone, setPhone] = useState(getDetails("phone"))
    const [Email, setEmail] = useState(getDetails("email"))
    const [Address, setAddress] = useState(getDetails("address"))
    const [Age, setAge] = useState(getDetails("age"))
    const [Gender, setGender] = useState(getDetails("gender"))


    const [selectedRunningNose, setSelectedRunningNose] = useState(getDetails("runningnose"));
    const [selectedSneeze, setSelectedSneeze] = useState(getDetails("sneeze"));
    const [selectedCough, setSelectedCough] = useState(getDetails("cough"));
    const [selectedWheeze, setSelectedWheeze] = useState(getDetails("wheeze"));
    const [selectedHeadache, setSelectedHeadache] = useState(getDetails("headache"));
    const [selectedItch, setSelectedItch] = useState(getDetails("itch"));
    const [selectedSwell, setSelectedSwell] = useState(getDetails("swell"));
    const [selectedRedRashes, setSelectedRedRashes] = useState(getDetails("redrashes"));
    const [selectedFamilyHistory, setSelectedFamilyHistory] = useState(getDetails("familyhistory"))


    const [selectedBanana, setSelectedBanana] = useState(getDetails("banana"))
    const [selectedMango, setSelectedMango] = useState(getDetails("mango"))
    const [selectedFruit1, setSelectedFruit1] = useState(getDetails("fruit1"))
    const [selectedFruit2, setSelectedFruit2] = useState(getDetails("fruit2"))
    const [selectedLime, setSelectedLime] = useState(getDetails("lime"))

    const [selectedAvaraikai, setSelectedAvaraikai] = useState(getDetails("avaraikai"))
    const [selectedBeans, setSelectedBeans] = useState(getDetails("beans"))
    const [selectedBeetroot, setSelectedBeetroot] = useState(getDetails("beetroot"))
    const [selectedBrinjal, setSelectedBrinjal] = useState(getDetails("brinjal"))
    const [selectedCabbage, setSelectedCabbage] = useState(getDetails("cabbage"))
    const [selectedCapsicum, setSelectedCapsicum] = useState(getDetails("capsicum"))
    const [selectedCauliflower, setSelectedCauliflower] = useState(getDetails("cauliflower"))
    const [selectedCarrot, setSelectedCarrot] = useState(getDetails("carrot"))
    const [selectedChowchow, setSelectedChowchow] = useState(getDetails("chowchow"))
    const [selectedCorn, setSelectedCorn] = useState(getDetails("corn"))
    const [selectedCucumber, setSelectedCucumber] = useState(getDetails("cucumber"))
    const [selectedDrumstick, setSelectedDrumstick] = useState(getDetails("drumstick"))
    const [selectedGreens, setSelectedGreens] = useState(getDetails("greens"))
    const [selectedGourds, setSelectedGourds] = useState(getDetails("gourds"))
    const [selectedKovaikai, setSelectedKovaikai] = useState(getDetails("kovaikai"))
    const [selectedKothavarai, setSelectedKothavarai] = useState(getDetails("kothavarai"))
    const [selectedLfinger, setSelectedLfinger] = useState(getDetails("lfinger"))
    const [selectedMalli, setSelectedMalli] = useState(getDetails("malli"))
    const [selectedMushroom, setSelectedMushroom] = useState(getDetails("mushroom"))
    const [selectedNuckol, setSelectedNuckol] = useState(getDetails("nuckol"))
    const [selectedOnion, setSelectedOnion] = useState(getDetails("onion"))
    const [selectedPeas, setSelectedPeas] = useState(getDetails("peas"))
    const [selectedPotroot, setSelectedPotroot] = useState(getDetails("potroot"))
    const [selectedPotato, setSelectedPotato] = useState(getDetails("potato"))
    const [selectedPumkin, setSelectedPumkin] = useState(getDetails("pumkin"))
    const [selectedPudina, setSelectedPudina] = useState(getDetails("pudina"))
    const [selectedRadish, setSelectedRadish] = useState(getDetails("radish"))
    const [selectedTomato, setSelectedTomato] = useState(getDetails("tomato"))
    const [selectedTondaikai, setSelectedTondaikai] = useState(getDetails("tondakai"))
    const [selectedVazpoo, setSelectedVazpoo] = useState(getDetails("vazpoo"))
    const [selectedYams, setSelectedYams] = useState(getDetails("yams"))

    const submitData = () => {
        fetch("http://20ef-122-167-192-211.ngrok.io/create", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: Name,
                phone: Phone,
                email: Email,
                address: Address,
                age: Age,
                gender: Gender,

                runningnose: selectedRunningNose,
                sneeze: selectedSneeze,
                cough: selectedCough,
                wheeze: selectedWheeze,
                headache: selectedHeadache,
                itch: selectedItch,
                swell: selectedSwell,
                redrashes: selectedRedRashes,
                familyhistory: selectedFamilyHistory,

                banana: selectedBanana,
                mango: selectedMango,
                fruit1: selectedFruit1,
                fruit2: selectedFruit2,
                lime: selectedLime,

                avaraikai: selectedAvaraikai,
                beans: selectedBeans,
                beetroot: selectedBeetroot,
                brinjal: selectedBrinjal,
                cabbage: selectedCabbage,
                capsicum: selectedCapsicum,
                cauliflower: selectedCauliflower,
                carrot: selectedCauliflower,
                chowchow: selectedChowchow,
                corn: selectedCorn,
                cucumber: selectedCucumber,
                drumstick: selectedDrumstick,
                greens: selectedGreens,
                gourds: selectedGourds,
                kovaikai: selectedKovaikai,
                kothavarai: selectedKothavarai,
                lfinger: selectedLfinger,
                malli: selectedMalli,
                mushroom: selectedMushroom,
                nuckol: selectedNuckol,
                onion: selectedOnion,
                peas: selectedPeas,
                potroot: selectedPotroot,
                potato: selectedPotato,
                pumkin: selectedPumkin,
                pudina: selectedPudina,
                radish: selectedRadish,
                tomato: selectedTomato,
                tondaikai: selectedTondaikai,
                vazpoo: selectedVazpoo,
                yams: selectedYams,

            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`${data.name} is saved`)
                navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Something went wrong")
            })
    }

    const updateData = () => {
        fetch("http://20ef-122-167-192-211.ngrok.io/update", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: route.params._id,
                name: Name,
                phone: Phone,
                email: Email,
                address: Address,
                age: Age,
                gender: Gender,
                runningnose: selectedRunningNose,
                sneeze: selectedSneeze,
                cough: selectedCough,
                wheeze: selectedWheeze,
                headache: selectedHeadache,
                itch: selectedItch,
                swell: selectedSwell,
                redrashes: selectedRedRashes,
                familyhistory: selectedFamilyHistory,

                banana: selectedBanana,
                mango: selectedMango,
                fruit1: selectedFruit1,
                fruit2: selectedFruit2,
                lime: selectedLime,

                avaraikai: selectedAvaraikai,
                beans: selectedBeans,
                beetroot: selectedBeetroot,
                brinjal: selectedBrinjal,
                cabbage: selectedCabbage,
                capsicum: selectedCapsicum,
                cauliflower: selectedCauliflower,
                carrot: selectedCauliflower,
                chowchow: selectedChowchow,
                corn: selectedCorn,
                cucumber: selectedCucumber,
                drumstick: selectedDrumstick,
                greens: selectedGreens,
                gourds: selectedGourds,
                kovaikai: selectedKovaikai,
                kothavarai: selectedKothavarai,
                lfinger: selectedLfinger,
                malli: selectedMalli,
                mushroom: selectedMushroom,
                nuckol: selectedNuckol,
                onion: selectedOnion,
                peas: selectedPeas,
                potroot: selectedPotroot,
                potato: selectedPotato,
                pumkin: selectedPumkin,
                pudina: selectedPudina,
                radish: selectedRadish,
                tomato: selectedTomato,
                tondaikai: selectedTondaikai,
                vazpoo: selectedVazpoo,
                yams: selectedYams

            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`${data.name} is updated`)
                navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("Something went wrong")
            })
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <View style={styles.details}>
                    <Text style={{ textAlign: "center", fontSize: 30, }}>
                        Details
                    </Text>
                    <TextInput
                        label='Name'
                        style={styles.inputStyle}
                        value={Name}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setName(text)}
                    />
                    <TextInput
                        label='Phone'
                        style={styles.inputStyle}
                        value={Phone}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setPhone(text)}
                        keyboardType="number-pad"
                    />
                    <TextInput
                        label='Email'
                        style={styles.inputStyle}
                        value={Email}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        label='Address'
                        style={styles.inputStyle}
                        value={Address}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setAddress(text)}
                    />
                    <TextInput
                        label='Age'
                        style={styles.inputStyle}
                        value={Age}
                        theme={theme}
                        mode="outlined"
                        onChangeText={text => setAge(text)}
                        keyboardType="number-pad"
                    />
                    <View style={styles.gender}>
                        <Text style={{ fontSize: 20 }}>
                            Gender
                        </Text>
                        <RadioButton.Group
                            onValueChange={Gender => setGender(Gender)}
                            value={Gender}>
                            <RadioButton.Item
                                label="Male"
                                value="Male" />
                            <RadioButton.Item
                                label="Female"
                                value="Female" />
                        </RadioButton.Group>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Symptoms
                    </Text>
                    <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonContent={<Button><Text>List</Text></Button>}
                    >
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Running Nose</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedRunningNose(itemValue)
                                }
                                value={selectedRunningNose}
                            >
                                <RadioButton.Item label="NO" value="NO" />
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Sneeze</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedSneeze(itemValue)
                                }
                                value={selectedSneeze}
                            >
                                <RadioButton.Item label="NO" value="NO" />
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Cough</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCough(itemValue)
                                }
                                value={selectedCough}
                            >
                                <RadioButton.Item label="NO" value="NO" />
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Wheeze</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedWheeze(itemValue)
                                }
                                value={selectedWheeze}
                            >
                                <RadioButton.Item label="NO" value="NO" />
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Headache</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedHeadache(itemValue)
                                }
                                value={selectedHeadache}
                            >
                                <RadioButton.Item label="NO" value="NO" />
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Itch</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedItch(itemValue)
                                }
                                value={selectedItch}
                            >
                                <RadioButton.Item label="NO" value="NO" />
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Swell</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedSwell(itemValue)
                                }
                                value={selectedSwell}
                            >
                                <RadioButton.Item label="NO" value="NO" />
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Red Rashes</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedRedRashes(itemValue)
                                }
                                value={selectedRedRashes}
                            >
                                <RadioButton.Item label="NO" value="NO" />
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Family History</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedFamilyHistory(itemValue)
                                }
                                value={selectedFamilyHistory}
                            >
                                <RadioButton.Item label="NO" value="NO" />
                                <RadioButton.Item label="YES" value="YES" />
                            </RadioButton.Group>
                        </View>
                    </CollapsibleList>
                </View>
                <View style={styles.buttons}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Fruits
                    </Text>
                    <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonContent={<Button><Text>List</Text></Button>}
                    >
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Banana</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedBanana(itemValue)
                                }
                                value={selectedBanana}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Mango</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedMango(itemValue)
                                }
                                value={selectedMango}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Fruit1</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedFruit1(itemValue)
                                }
                                value={selectedFruit1}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Fruit2</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedFruit2(itemValue)
                                }
                                value={selectedFruit2}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Lime</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedLime(itemValue)
                                }
                                value={selectedLime}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                    </CollapsibleList>
                </View>
                <View style={styles.buttons}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Vegitables
                    </Text>
                    <CollapsibleList
                        numberOfVisibleItems={0}
                        buttonContent={<Button><Text>List</Text></Button>}
                    >
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Avaraikai</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedAvaraikai(itemValue)
                                }
                                value={selectedAvaraikai}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Beans</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedBeans(itemValue)
                                }
                                value={selectedBeans}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Beetroot</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedBeetroot(itemValue)
                                }
                                value={selectedBeetroot}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Brinjal</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedBrinjal(itemValue)
                                }
                                value={selectedBrinjal}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Cabbage</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCabbage(itemValue)
                                }
                                value={selectedCabbage}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Capsicum</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCapsicum(itemValue)
                                }
                                value={selectedCapsicum}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Cauliflower</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCauliflower(itemValue)
                                }
                                value={selectedCauliflower}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Carrot</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCarrot(itemValue)
                                }
                                value={selectedCarrot}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Chow Chow</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedChowchow(itemValue)
                                }
                                value={selectedChowchow}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Corn</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCorn(itemValue)
                                }
                                value={selectedCorn}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Cucumber</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedCucumber(itemValue)
                                }
                                value={selectedCucumber}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Drumstick</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedDrumstick(itemValue)
                                }
                                value={selectedDrumstick}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Greens</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedGreens(itemValue)
                                }
                                value={selectedGreens}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Gourds</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedGourds(itemValue)
                                }
                                value={selectedGourds}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Kovaikai</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedKovaikai(itemValue)
                                }
                                value={selectedKovaikai}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Kothavarai</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedKothavarai(itemValue)
                                }
                                value={selectedKothavarai}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Ladies Finger</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedLfinger(itemValue)
                                }
                                value={selectedLfinger}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Malli</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedMalli(itemValue)
                                }
                                value={selectedMalli}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Mushroom</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedMushroom(itemValue)
                                }
                                value={selectedMushroom}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Nuckol</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedNuckol(itemValue)
                                }
                                value={selectedNuckol}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Onion</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedOnion(itemValue)
                                }
                                value={selectedOnion}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Peas</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPeas(itemValue)
                                }
                                value={selectedPeas}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Potroot</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPotroot(itemValue)
                                }
                                value={selectedPotroot}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Potato</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPotato(itemValue)
                                }
                                value={selectedPotato}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Pumkin</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPumkin(itemValue)
                                }
                                value={selectedPumkin}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Pudina</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedPudina(itemValue)
                                }
                                value={selectedPudina}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Radish</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedRadish(itemValue)
                                }
                                value={selectedRadish}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Tomato</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedTomato(itemValue)
                                }
                                value={selectedTomato}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Tondaikai</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedTondaikai(itemValue)
                                }
                                value={selectedTondaikai}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Vazpoo/Thandu</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedVazpoo(itemValue)
                                }
                                value={selectedVazpoo}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                        <View style={{ margin: 10, borderColor: "#abcdef", borderWidth: 3 }}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Yams</Text>
                            <RadioButton.Group
                                onValueChange={itemValue =>
                                    setSelectedYams(itemValue)
                                }
                                value={selectedYams}
                            >
                                <RadioButton.Item label="KR" value="KR" />
                                <RadioButton.Item label="NR" value="NR" />
                                <RadioButton.Item label="LR" value="LR" />
                                <RadioButton.Item label="MR" value="MR" />
                                <RadioButton.Item label="HR" value="HR" />
                            </RadioButton.Group>
                        </View>
                    </CollapsibleList>
                </View>
                {route.params ?
                    <Button style={styles.save} onPress={() => updateData()}>
                        Update
                    </Button> :
                    <Button style={styles.save} onPress={() => submitData()}>
                        Save
                    </Button>
                }
                <Button style={styles.cancel} onPress={() => {
                    navigation.navigate("Home")
                }}>
                    Cancel
                </Button>
            </View>
        </ScrollView>
    )
}

const theme = {
    colors: {
        primary: "#006aff"
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    inputStyle: {
        margin: 5,
    },
    gender: {
        margin: 20,
        padding: 20,

    },
    buttons: {
        margin: 20,
        padding: 20,
        backgroundColor: "#00ffcc",
    },
    button: {
        margin: 20,
        padding: 20,
        backgroundColor: "#ff6600",
    },
    save: {
        margin: 20,
        padding: 20,
        backgroundColor: "#00ff00",
    },
    cancel: {
        margin: 20,
        padding: 20,
        backgroundColor: "#f0204f",
    },
    details: {
        margin: 5,
        backgroundColor: "#ccff33",
    }
})

export default AddPatient;