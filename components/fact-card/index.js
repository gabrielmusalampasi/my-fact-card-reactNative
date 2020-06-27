import React from 'react';
import { View, Image, Button, Text, Linking} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class FactCard extends React.Component {
  render() {
    return(
      <View style={{
        elevation: 1, //effet surelevation android
        shadowColor: 'black', // effet d'ombre sur OIS
        shadowOffset : {width:1, height:1 },  // toujour pour Ois
        shadowOpacity: 0.7,
        width: wp('90%'),
        backgroundColor:'white'
      }}>
        <Image
          style={{width:wp('90%'), height:hp('30%')}}
          source={{url:this.props.fact.image}}/>
        <Text style={{padding: 10}}>
          {this.props.fact.text}
        </Text>
        <Button
          title = 'See the source'
          disabled={this.props.disabled}
          onPress={() => Linking.openURL(this.props.fact.source_url)}
         />
      </View>

    )
  }
}

export default FactCard;
