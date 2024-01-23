import {View,Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';

const SysModal=({message, visible, onHide})=>{
    return(
        <Modal visible={visible} transparent={true}>
            <View style={{
                flex:1,
                backgroundColor:'rgba(00,00,00,.5)',
                justifyContent:'center',
                alignItems:'center',
                padding:20,
            }}>
                <View 
                style={{
                    width:'100%',
                    backgroundColor:'white',
                    borderRadius:10,
                    padding:20,
                }}>
                {/* header */}
                    <View style={{
                        justifyContent:'center',
                        alignItems:'center',
                        marginBottom:20,
                    }}>
                        <Text style={{
                            fontSize:20,
                            color:'black',
                        }}>Alert
                        </Text>
                    </View>
                    {/* body */}
                    <View>
                        <Text>{message}</Text>
                    </View>
                    {/* footer */}
                    <View style={{
                        marginTop:20,
                    }}>
                        <TouchableOpacity
                        onPress={onHide}
                        style={{
                        padding:10,
                        borderRadius:50,
                        backgroundColor:'#FF8EBF',
                        width:'100%',
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                        <Text>close</Text>
                    </TouchableOpacity>
              </View>
                </View>
            </View>
        </Modal>
    )
}
export default SysModal;