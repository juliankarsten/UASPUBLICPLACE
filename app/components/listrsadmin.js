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
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';
import { StackNavigator } from "react-navigation";
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input, Tab, Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
import * as firebase from 'firebase';
export default class Boiler extends Component {

  constructor(){
    super();
  let ds = new ListView.DataSource({rowHasChanged : (r1,r2) => r1 !== r2 });
  this.state = {
    itemDataSource : ds,
    modalVisible : false,
    modalVisible2 : false,
    modalDelVisible : false,
    nama : "",
    alamat : "",
    jamKerja : "",
    setItem : ""
  }
  this.itemsRef = firebase.database().ref('rumahsakit');
  this.renderRow = this.renderRow.bind(this);
  this.pressRow = this.pressRow.bind(this);
  this.deleteRow =  this.deleteRow.bind(this);
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
      <View style={{flexDirection:'row'}}>
        <Image source={require('./rumahsakit.png')} style={{width : 100 , height : 100}}>
        </Image>
        <View style={styles.li}>
          <View style = {{marginLeft:260}}>
            <TouchableHighlight
                onPress = {() => {
                this.setModalVisible(true)
                this.setState({setItem : item._key})
              }}
            >
              <Image source = {require('./edit.png')} style = {{height:30, width:30}} />
            </TouchableHighlight>
          </View>
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
    );
  }
  pressRow(item) {        
    this.setModalVisible(false);
    firebase.database().ref('rumahsakit/'+item).on('value', (snap) => {
      this.setState({
        nama : snap.val() && snap.val().Nama,
        alamat : snap.val() && snap.val().Alamat,
        jamKerja : snap.val() && snap.val().Jam
      });
    });
    this.setModalVisible2(true);
  }
  deleteRow(item) {
    firebase.database().ref('rumahsakit').child(item).remove();
    this.setModalDeleteVisible(!this.state.modalDelVisible)
    this.setModalVisible(!this.state.modalVisible)
  }
  setModalVisible(visible) {
    this.clearModal;
    this.setState({modalVisible:visible});
  }
  setModalVisible2(visible) {
    this.clearModal;
    this.setState({modalVisible2:visible});
  }
  setModalDeleteVisible(visible) {
    this.clearModal;
    this.setState({modalDelVisible : visible});
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
      <Text>LIST RUMAH SAKIT</Text>
      </ListItem>
      <ListView
        dataSource = {this.state.itemDataSource}
        renderRow = {this.renderRow}
        style = {styles.liContainer}
      />
      <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}
        >
            <View
                style = {{
                    alignSelf : 'center',
                    backgroundColor : '#fff',
                    borderWidth : 3,
                    borderRadius : 10,
                    marginTop : 200,
                    width : 200,
                }}
            >
                <View
                    style={styles.modal}
                >
                  <TouchableHighlight
                    onPress = {() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    style = {{position:'absolute', top : 0, right:16,borderWidth:1}}
                  >
                    <Text> X </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress = {() => {
                      this.pressRow(this.state.setItem)
                    }}
                  >
                   <Text>Edit Data</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress = {() => {
                      this.setModalDeleteVisible(true)
                    }}
                  >
                   <Text>Hapus Data</Text>
                  </TouchableHighlight> 
                </View>
            </View>
        </Modal>
        

        <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible2}
            onRequestClose={() => {}}
        >
            <View
                style = {{
                    alignSelf : 'center',
                    backgroundColor : '#fff',
                    borderWidth : 3,
                    borderRadius : 10,
                    marginTop : 200,
                    width : 300,
                }}
            >
                <View
                    style={styles.modal2}
                >
                  <TouchableHighlight
                    onPress = {() => {
                      this.setModalVisible2(!this.state.modalVisible2)
                    }}
                    style = {{position:'absolute', top : 0, right:16,borderWidth:1}}
                  >
                    <Text> X </Text>
                  </TouchableHighlight>
                  <View>
                    <TextInput
                        style = {{width : 250, height : 50, borderWidth:1, marginBottom:10, fontSize:18}}
                        value = {this.state.nama}
                        onChangeText = {(value) => this.setState({nama : value})}
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "words"
                    />
                    <TextInput
                        style = {{width : 250, height : 50, borderWidth:1, marginBottom:10, fontSize:18}}
                        value = {this.state.alamat}
                        onChangeText = {(value) => this.setState({alamat : value})}
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "words"
                    />
                    <TextInput
                        style = {{width : 250, height : 50, borderWidth:1, marginBottom:10, fontSize:18}}
                        value = {this.state.jamKerja}
                        onChangeText = {(value) => this.setState({jamKerja : value})}
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "words"
                    />
                    <TouchableHighlight
                      style = {{width:100, height:25, borderRadius:25, backgroundColor:'green'}}
                      onPress = {() => {
                        if(this.state.nama == "" || this.state.alamat == "" || this.state.jamKerja == "") {
                          alert("Input belum lengkap")
                        }
                        else {
                          firebase.database().ref('rumahsakit').child(this.state.setItem).update({
                            Nama : this.state.nama,
                            Alamat : this.state.alamat,
                            Jam : this.state.jamKerja
                          })
                          this.setModalVisible2(!this.state.modalVisible2)
                        }
                      }}
                    >
                      <Text style={styles.buttonText}>Edit</Text>
                    </TouchableHighlight> 
                  </View>
                </View>
            </View>
        </Modal>


        <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalDelVisible}
            onRequestClose={() => {}}
        >
            <View
                style = {{
                    alignSelf : 'center',
                    backgroundColor : '#fff',
                    borderWidth : 3,
                    borderRadius : 10,
                    marginTop : 200,
                    width : 200,
                }}
            >
                <View
                    style={styles.modal}
                >
                  <View>
                    <TouchableHighlight
                      onPress = {() => {
                        this.deleteRow(this.state.setItem)
                     
                      }}
                    >
                    <Text>Konfirmasi</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress = {() => {
                        this.setModalDeleteVisible(!this.state.modalDelVisible)
                      }}
                    >
                    <Text>Batal</Text>
                    </TouchableHighlight>
                  </View> 
                </View>
            </View>
        </Modal>
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
  },
  modal : {
      height : 70,
      width : 200,
      justifyContent : 'center',
      alignItems : 'center',
  },
  modal2 : {
      height : 300,
      width : 300,
      justifyContent : 'center',
      alignItems : 'center',
  },
});



AppRegistry.registerComponent("listrsadmin", () => listrsadmin);