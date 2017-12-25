import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  Picker,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  Alert,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import { StackNavigator } from "react-navigation";
import {Label, Icon, Container,Footer, FooterTab, Form, Item, Input, Tab, Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
import * as firebase from 'firebase';

export default class Boiler extends Component {
    constructor() {
        super();
        this.state = {
            nama: "",
            alamat: "",
            jam:"",
            place:"spbu"
          };
    }
 render() {
     return(
         <View style={styles.container}>
         <Text style={{fontSize : 24, color : 'black'}}>TAMBAH DATA</Text>
         <KeyboardAvoidingView style={styles.keyboard}>
            <TextInput
              placeholder="Nama"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={nama => this.setState({ nama })}
            />
            <TextInput
              placeholder="Alamat"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              ref={input => (this.passwordInput = input)}
              value={this.state.password}
              onChangeText={alamat => this.setState({ alamat })}
            />
            <TextInput
              placeholder="Jam operasi"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="go"
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={jam => this.setState({ jam })}
            />
            <Picker
                selectedValue={this.state.place}
                onValueChange={(itemValue, itemIndex) => this.setState({place: itemValue})}>
                <Picker.Item label="spbu" value="spbu" />
                <Picker.Item label="kantor polisi" value="polisi" />
                <Picker.Item label="Rumah sakit" value="rumahsakit" />
                <Picker.Item label="bandara" value="bandara" />
                <Picker.Item label="halte bus" value="halte" />
            </Picker>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                  
                firebase.database().ref().child(this.state.place).push({
                        Nama : this.state.nama,
                        Alamat : this.state.alamat,
                        Jam : this.state.jam
                    })
                this.props.navigation.navigate("adminhome")
                }}>
              <Text style={styles.buttonText}>TAMBAH TEMPAT</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
            <View>
            </View>
        </View>
     );
 }   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#87CEEB"
    },
    subtext: {
        color: "#ffffff",
        marginTop: 10,
        width: 160,
        textAlign: "center",
        opacity: 0.8
      },
      keyboard:{
        margin: 20,
        padding: 20,
        alignSelf: "stretch"
      },
      buttonContainer: {
        backgroundColor: "rgba(255,255,255,0.2)",
        paddingVertical: 15
      },
      buttonText: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "700"
      },
      button: {
        backgroundColor: "#27ae60",
        paddingVertical: 15
      }
  });
  

AppRegistry.registerComponent("tambah", () => tambah);