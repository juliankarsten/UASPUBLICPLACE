import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Picker, Label, Icon, Container,Footer, FooterTab, Form, Item, Input,Tab,Tabs, Content, ListItem, CheckBox, Header, Left, Right, Body, Button, Title, Subtitle, Thumbnail, CardItem, Card, TabHeading} from 'native-base';
var{width,height}=Dimensions.get('window');

export default class mari extends Component {
  constructor(props){
    super(props);
    this.state=({
      alert : false
    })
  }
  render() {
    const { navigate } = this.props.navigation;
    return (      
       <Container style={{backgroundColor:'white'}}>
          <View style={{width : width, height : 200, backgroundColor:'#e6e6e6'}}>
          <Image source={require('./polisi.png')} style={{width:width, height:200}} />
          </View>
        <Content>
        <ListItem>
          <Body>
          <Text style={{fontWeight:'bold', fontSize:18}}>KANTOR POLISI</Text>
          </Body>
        </ListItem>

        <ListItem>
          <Body>
          <Text style={{fontWeight:'bold', fontSize:18}}>Informasi Detail</Text>
          <View style={{flexDirection:'row'}} >
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%'}} >00.00-23.59 Wita</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%'}} >Jalan Raya Renon</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15, marginTop:'1%', marginLeft:'2%'}} >polri.gov.id</Text>
          </View>
          </Body>
        </ListItem>
        </Content>
        </Container>
    );
  }
}


AppRegistry.registerComponent("detailpolisi", () => detailpolisi);