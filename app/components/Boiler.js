import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
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
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input, Tab, Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
export default class Boiler extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    headerLeft: null
  };
  render() {
    return(
    <View style={styles.container}>
            <ListItem>
            <Text>PILIHAN TEMPAT</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("listspbu")}>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./spbu.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >SPBU</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("listpolisi") }>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./polisi.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >KANTOR POLISI</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("listrs") }>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./rumahsakit.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >RUMAH SAKIT</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("listbandara") }>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./bandara.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >BANDARA</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("listhalte") }>
              <Thumbnail stle={{ marginRight:'2%'}} source={require('./halte.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} > HALTE BUS</Text>
              </Body>
            </ListItem>
  </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
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


AppRegistry.registerComponent("Boiler", () => Boiler);