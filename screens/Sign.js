import React, { Component } from 'react';
import {
  Text,
  Alert,
} from 'react-native';
import styled from 'styled-components';
import { MAIN_COLOR } from '../constants/colors';


export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email   : '',
      password: '',
      accept: false,
      signing: false,
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("알림", "Button pressed "+viewId);
  }

  login() {
    const {
      navigation: { navigate }
    } = this.props;
    this.setState({logging: true})
    setTimeout(() => navigate('MainScreen'), 3000)
  };

  render() {
    const {accept} = this.state;
    const {signing} = this.state;
    return (
      <Container>
        <HeaderTitle>
          <HeaderText> 회원가입 </HeaderText>
        </HeaderTitle>
        <InputContainer>
          <Inputs
              placeholder="이름"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </InputContainer>

        <InputContainer>
          <Inputs
              placeholder="이메일"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </InputContainer>
        
        <InputContainer>
          <Inputs
              placeholder="비밀번호(6~15자)"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </InputContainer>

        <InputContainer>
          <Inputs
              placeholder="비밀번호 재입력"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </InputContainer>

        <AcceptBtn onPress={() => this.onClickListener('동의')}>
          <SignUpText> 약관동의 </SignUpText>
        </AcceptBtn>

        <SignupBtn onPress={() => this.onClickListener('가입완료')}>
          <SignUpText> 가입하기 </SignUpText>
        </SignupBtn>      

      </Container>
    );
  }
}


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${MAIN_COLOR};
`
const HeaderTitle = styled.View`

  justify-content: center;
  align-items: center;
  background-color: ${MAIN_COLOR};
  border-bottom-color: gray;
  border-bottom-width: 1;
`

const InputContainer = styled.View`
      border-bottom-color: gray;
      background-color: white;
      border-bottom-width: 1;
      width: 250px;
      height: 45px;
      margin-bottom: 20px;
      flex-direction: row;
      align-items: center;
  `

const Inputs = styled.TextInput `
  height: 45px;
  margin-left: 16px;
  border-bottom-color: white;
  flex: 1;
  `

const BtnInterface = styled.TouchableOpacity `
    height: 45px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: 250px;
    border-bottom-color: gray;
  `
  
  const AcceptBtn = styled(BtnInterface)`
    background-color: #F1F0F0;
  `
  const SignupBtn = styled(BtnInterface)`
    background-color: #F1F0F0;
  `
  const HeaderText = styled.Text `
    color: black;
    fontSize: 20;
    fontWeight: bold;
     
  `

  const SignUpText = styled.Text `
    color: black;
  `