import React from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native';
import color from '../contains/color'
import styles from '../style/AccountStyles';

const Account = (): React.JSX.Element => {
  return (
      <View style ={styles.container}>
        <Image style = {styles.imgArrow} source={require('../img_account/Arrow.png')}/>
          <Text style = {styles.textTitle}>Profile</Text>
          <View style = {styles.groundVector}>
              <Image style = {styles.imgBell} source={require('../img_account/user.png')} />
              <Text style = {styles.textBell}>Edit Profile</Text>
              <Image style = {styles.imgBackArrow} source={require('../img_account/back_arrow.png')} />
          </View>
          <View style = {styles.groundVector}>
              <Image style = {styles.imgBell} source={require('../img_account/key.png')} />
              <Text style = {styles.textBell}>Change Password</Text>
              <Image style = {styles.imgBackArrow} source={require('../img_account/back_arrow.png')} />
          </View>
          <View style = {styles.groundVector}>
              <Image style = {styles.imgBell} source={require('../img_account/cart.png')} />
              <Text style = {styles.textBell}>My Cards</Text>
              <Image style = {styles.imgBackArrow} source={require('../img_account/back_arrow.png')} />
          </View>
          <Text style = {styles.textTitleApp} >App Settings</Text>

          <View style = {styles.groundVector}>
              <Image style = {styles.imgBell} source={require('../img_account/bell.png')} />
              <Text style = {styles.textBell}>Notifications</Text>
              <Image style = {styles.imgContainer} source={require('../img_account/Container.png')} />
          </View>
          <View style = {styles.groundVector}>
              <Image style = {styles.imgBell} source={require('../img_account/language.png')} />
              <Text style = {styles.textBell}>Language</Text>
              <Text style = {styles.textEnglish}>English</Text>
              <Image style = {styles.imgBackArrow} source={require('../img_account/back_arrow.png')} />
          </View>
          <View style = {styles.groundVector}>
              <Image style = {styles.imgBell} source={require('../img_account/logout.png')} />
              <Text style = {styles.textBell}>Logout</Text>
          </View>
      </View>

  )
}
export default Account