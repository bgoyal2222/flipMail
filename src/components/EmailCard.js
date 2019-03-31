
import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';


export default class EmailCard extends PureComponent {
  
  getUser = (id) => {
    let temp = {};
    let users = this.props.users.map((item)=>{
      
      if(item.email_id === id){
        temp =item;
      }
    });
    return temp.name;
  }
  render() {
      const { data, users } = this.props;
      console.log(users);
    return (
      <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.key}>From: </Text>
            <Text>{this.getUser(data.from)}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.key}>To: </Text>
            <Text>{data.to.join()}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.key}>Subject: </Text>
            <Text>{data.subject}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   padding:15,
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
  },
  row:{
    flexDirection:'row',
  },
  key:{
    fontWeight:'600'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
