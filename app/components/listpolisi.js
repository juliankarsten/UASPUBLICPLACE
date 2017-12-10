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
  ListView,
  TouchableHighlight,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import { StackNavigator } from "react-navigation";
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input, Tab, Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
import * as firebase from 'firebase';
export default class Boiler extends Component {

  constructor(){
    super();
  let ds = new ListView.DataSource({rowHasChanged : (r1,r2) => r1 !== r2 });
  this.state = {
    itemDataSource : ds
  }
  this.itemsRef = firebase.database().ref('polisi');
  this.renderRow = this.renderRow.bind(this);
  }
  componentWillMount(){
    this.getItems(this.itemsRef);
  }
  componentDidMount(){
    this.getItems(this.itemsRef);
  }

  getItems(itemRef){
    itemRef.on('value',(snap) => {
      let items = [];
      snap.forEach((child) =>{
        items.push({
          nama : child.val().Nama,
          alamat : child.val().Alamat,
          jam : child.val().Jam,
          _key : child.key
        });
      });
      this.setState({
        itemDataSource : this.state.itemDataSource.cloneWithRows(items)
      });
    });
  }
  
  renderRow(item){
    return(
      <TouchableHighlight
      onPress = {() => {
        this.pressRow(item);
      }}
      >
      <View style={{flexDirection:'row'}}>
      <Image source={require('./polisi.png')} style={{width : 100 , height : 100}}>
      </Image>
      <View style={styles.li}>
        <View style={styles.liTextView}>
          <Text style={styles.liText}>{item.nama}</Text>
        </View>
        <View style={styles.liTextView}>
          <Text style={styles.liText}>{item.alamat}</Text>
        </View>
        <View style={styles.liTextView}>
          <Text style={styles.liText}>{item.jam}</Text>
        </View>
      </View>
      </View>
      </TouchableHighlight>
    );
  }



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
            <Text>LIST KANTOR POLISI</Text>
            </ListItem>
            <ListView
              dataSource = {this.state.itemDataSource}
              renderRow = {this.renderRow}
              style = {styles.liContainer}
            />
            {/* <ListItem onPress={() => this.props.navigation.navigate("detailpolisi")}>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./polisi.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >kantor polisi</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("detailpolisi") }>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./polisi.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >kantor polisi 1</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("detailpolisi") }>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./polisi.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >kantor polisi 2</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("detailpolisi") }>
              <Thumbnail style={{ marginRight:'2%'}} source={require('./polisi.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >kantor polisi 3</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("detailpolisi") }>
              <Thumbnail stle={{ marginRight:'2%'}} source={require('./polisi.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} > kantor polisi 4</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("detailpolisi") }>
              <Thumbnail stle={{ marginRight:'2%'}} source={require('./polisi.png')}/>
              <Body style={{marginRight:'2%'}}>
                <Text style={{fontWeight:'bold', fontSize:18}} >kantor polisi 5</Text>
              </Body>
            </ListItem> */}
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
  li: {
    backgroundColor : '#fff',
    borderColor : 'transparent',
    borderWidth : 2,
    width : 300,
  },
  liTextView : {
  },
  liText : {
    color : '#333',
    fontSize : 16,
  },
  liContainer : {
    height : 700, 
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



AppRegistry.registerComponent("listpolisi", () => listpolisi);