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
            <ListItem onPress={() => this.props.navigation.navigate("listspbuadmin")}>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./spbu.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >SPBU</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("listpolisiadmin") }>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./polisi.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >KANTOR POLISI</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("listrsadmin") }>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./rumahsakit.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >RUMAH SAKIT</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("listbandaraadmin") }>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./bandara.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >BANDARA</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("listhalteadmin") }>
              <Thumbnail stle={{ marginRight:'2%'}} source={require('./halte.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} > HALTE BUS</Text>
              </Body>
            </ListItem>
            {/* <TouchableOpacity style={styles.addButton}
            onPress={() => this.props.navigation.navigate("tambahdata")}
            >
            <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity> */}
              <Footer>
          <FooterTab style={{backgroundColor:'white'}}>
            <Button vertical onPress={()=>this.props.navigation.navigate('tambah')} >
              <Text style={{color:'grey'}}>TAMBAH</Text>
            </Button>
          </FooterTab>
          </Footer>
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
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent:'center',
    elevation: 8,
},
addButtonText: {
    color: '#fff',
    fontSize : 24
}
});

AppRegistry.registerComponent("adminhome", () => adminhome);