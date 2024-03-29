import React, { useState } from 'react';
import { View,Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import SysModal from '../Components/sys_modal';

const Login=()=>{
  //handle when input ysername and password
  const [username, setUsername] =useState('');
  const [password, setPassword] =useState('');
  const [showModal,setShowModal] =useState(false);
  const [errorMessage,setErrorMessage] =useState('');

  //handle on hihde modal
  const onHideModal=()=>{
    setShowModal(false);
  }

  const onChangedUserName=(value)=>{
    setUsername(value);
  ;}

  const onChangedPassword=(value)=>{
    setPassword(value);
  ;}
  //handle when user click Login button
  const onClickLogin=()=>{
    //validate

    if(username.length==0||password.length==0){
      setErrorMessage("Please input login information.");
      setShowModal(true);
      return;
    }
    // console.log("click login",{
    // username,
    // password,
    //})
    // axios({
    //   url:"",
    //   method:'POST',
    //   data:{
    //     username:username,
    //     password:password,
    //   },
    // }).then(result=>{
    //   console.log(result.data)
    // }).catch(error=>{
    //   console.log(error.response.data);
    // });
};
  return(
    <View style={{
      backgroundColor:'#FF8EBF',
      flex:1}}>
        {/* <SysModal visible={showModal} message={errorMessage} onHide={onHideModal}/> */}
      <View style={{
        backgroundColor:'white',
        margin:10,
        flex:1,
        borderRadius:10
      }}>
        <View style={{
          flex:1,
        }}>
          {/* header */}
          <View style={{
                flex:1, 
                justifyContent:'center',
                alignItems:'center',
              }}>
            <Text style={{
                  fontSize:30,
                  fontWeight:'bold',
                  color:'black',
                }}>Login
            </Text>
          </View>

          {/* body */}
          <View style={{
                flex:4,
              }}>
            <View style={{
              margin:30,
              flex:1
            }}>
            {/* username */}
              <View style={{
                marginBottom:20,
              }}>
                <Text style={{
                  color:'black',
                }}>Username
                </Text>
                <View style={{
                  flexDirection:'row',
                  borderBottomColor:'grey',
                  borderBottomWidth:1,
                }}>
                  <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    padding:10,
                  }}>
                    <Icon name="user"size={15}/>
                  </View>
                  <View style={{
                        flex:4,
                    }}>
                    <TextInput
                    value={username}
                    onChangeText={onChangedUserName}
                    placeholder={'Type your username'}/>
                  </View>
                </View>
              </View>
              {/* password */}
              <View>
                <Text style={{
                  color:'black',
                }}>Password
                </Text>
                <View style={{
                  flexDirection:'row',
                  borderBottomColor:'grey',
                  borderBottomWidth:1,
                }}>
                  <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    padding:10,
                  }}>
                    <Icon name="lock" size={15}/>
                  </View>
                  <View style={{
                        flex:4,
                    }}>
                    <TextInput 
                    secureTextEntry={true}
                    placeholder={'Type your password'}
                    value={password}
                    onChangeText={onChangedPassword}
                    />
                  </View>
                </View>
              </View>
              {/* forgot password */}
              <View style={{
                marginTop:10,
                alignItems:'flex-end'
              }}>
                <Text style={{
                  color:'black'
                }}>Forgot password ?
                </Text>
              </View>
              {/* login button */}
              <View style={{
                marginVertical:20,
              }}>
                <TouchableOpacity 
                onPress={onClickLogin}
                activeOpacity={0.5}
                style={{
                  padding:13,
                  borderRadius:50,
                  backgroundColor:'#FF8EBF',
                  width:'100%',
                  justifyContent:'center',
                  alignItems:'center',
                  }}>
              <Text style={{
                color:'black',
                fontWeight:'bold',
              }}>LOGIN</Text>
            </TouchableOpacity>
              </View>
            </View>
            <View 
              style={{
                marginVertical:20,
                justifyContent:'center',
                alignItems:'center'
                }}>
              <Text>Or Sign Up Using</Text>
              <View style={{
                marginTop:10,
                flexDirection:'row',
              }}>
                {/* facebook */}
                <TouchableOpacity style={{
                  width:40,
                  height:40,
                  padding:10,
                  backgroundColor:'#3b5998',
                  borderRadius:50,
                  justifyContent:'center',
                  alignItems:'center',
                  margin:5
                }}>
                  <Icon name="facebook" size={20} color={'white'}/>
                </TouchableOpacity>
                {/* twitter */}
                <TouchableOpacity style={{
                  width:40,
                  height:40,
                  padding:10,
                  backgroundColor:'#1dcaff',
                  borderRadius:50,
                  justifyContent:'center',
                  alignItems:'center',
                  margin:5
                }}>
                  <Icon name="twitter" size={20} color={'white'}/>
                </TouchableOpacity>
                {/* gg */}
                <TouchableOpacity style={{
                  width:40,
                  height:40,
                  padding:10,
                  backgroundColor:'#EA4335',
                  borderRadius:50,
                  justifyContent:'center',
                  alignItems:'center',
                  margin:5
                }}>
                  <Icon name="google" size={20} color={'white'}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* footer */}
          <View style={{
                flex:2,
                justifyContent:'center',
                alignItems:'center'
          }}>
            <Text>Or Sign Up Using</Text>
            {/* button sign up */}
            <TouchableOpacity style={{
              padding:15,
              borderRadius:50,
              width:'40%',
              justifyContent:'center',
              alignItems:'center',
            }}>
              <Text style={{
                color:'black',
                fontWeight:'bold'
              }}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Login;