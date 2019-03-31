
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import EmailCard from './EmailCard';
import EmailCard2 from './EmailCard2';


class EmailList extends Component {
  render() {
      const { emails, threaded, users } = this.props
      console.log(this.props.emails);
    return (
      <View style={styles.container}>
        <FlatList
            data={emails}
            renderItem={({item}) => {
                if(threaded){
                    return <EmailCard2 data={item} users={users}/>;
                }
                else{
                    return <EmailCard data={item} users={users} />;
                }
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
const mapDispatchToProps = {

};
function mapStateToProps(state) {
    const { mail } = state
    return { emails: mail.emails, users:mail.users }
  }

 export default connect(mapStateToProps, mapDispatchToProps)(EmailList);