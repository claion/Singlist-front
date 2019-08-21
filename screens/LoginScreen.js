import React, { Component } from 'react';
import {
  Text,
  Alert
} from 'react-native';
import styled from 'styled-components';
import { MAIN_COLOR } from '../constants/colors';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      logging: false,
      signing: false
    };
  }

  onClickListener = viewId => {
    Alert.alert('알림', viewId + ' 버튼이 눌렸어요');
  };

  login() {
    const {
      navigation: { navigate }
    } = this.props;
    this.setState({logging: true})
    setTimeout(() => navigate('MainScreen'), 3000)
  };

  sign() {
    const {
      navigation: { navigate }
    } = this.props;
    this.setState({signing: true})
    setTimeout(() => navigate('Sign'), 3000)
  };

  forgot() {
    const {
      navigation: { navigate }
    } = this.props;

    setTimeout(() => navigate('Forgot'), 3000)
  };





  render() {
    const {logging} = this.state;
    const {signing} = this.state;
    return (
      <Container>
        <HeaderTitle>
          <HeaderText> 로그인 </HeaderText>
        </HeaderTitle>
        <InputContainer>
          <Inputs
            placeholder="아이디"
            returnKeyType="next"
            textContentType="username"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => {
              this.passwordInput.focus();
            }}
            underlineColorAndroid="transparent"
            onChangeText={username => this.setState({ username })}
          />
        </InputContainer>

        <InputContainer>
          <Inputs
            ref={(ref) => {this.passwordInput = ref}}
            returnKeyType="done"
            placeholder="비밀번호"
            textContentType="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
            onSubmitEditing={this.login.bind(this)}
          />
        </InputContainer>

        <LoginBtn
          underlayColor="transparent"
          onPress={this.login.bind(this)}
        >
          <LoginText>{!logging ? "로그인" : "..."}</LoginText>
        </LoginBtn>


        <RegisterBtn
          underlayColor="transparent"
          onPress={this.sign.bind(this)}
        >
          <RegisterText> 회원가입 </RegisterText>
        </RegisterBtn>

        <FacebookBtn
          underlayColor="transparent"
          onPress={this.login.bind(this)}
        >
          <EasyLoginText> 페이스북 계정으로 로그인 </EasyLoginText>
        </FacebookBtn>

        <KakaoBtn
          underlayColor="transparent"
          onPress={this.login.bind(this)}
        >
          <EasyLoginText>카카오 계정으로 로그인</EasyLoginText>
        </KakaoBtn>

        <NaverBtn
          underlayColor="transparent"
          onPress={this.login.bind(this)}
        >
          <EasyLoginText>네이버 계정으로 로그인</EasyLoginText>
        </NaverBtn>

        <BtnInterface 
          underlayColor="transparent"
          onPress={() => this.forgot(this)}
        >
          <Text>아이디/비밀번호 찾기</Text>
        </BtnInterface>
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
  border-radius: 30px;
  border-bottom-width: 1;
  width: 250px;
  height: 45px;
  margin-top: 10px
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

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
`

const EasyLoginBtnInterface = styled.TouchableOpacity `
  height: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 250px;
`


const LoginBtn = styled(BtnInterface)`
  background-color: #F1F0F0;
`

const RegisterBtn = styled(BtnInterface)`
  background-color: white;
  border-width: 1.8px;
  border-color: black;  

`

const FacebookBtn = styled(EasyLoginBtnInterface)`
  background-color: #3B5999;

`
const KakaoBtn = styled(EasyLoginBtnInterface)`
  background-color: #FFD800;

`
const NaverBtn = styled(EasyLoginBtnInterface)`
  background-color: #2DB400;
`

const HeaderText = styled.Text `
  color: black;
  fontSize: 20;
  fontWeight: bold;
  margin-top: 30px
  margin-bottom: 10px;
  
`

const LoginText = styled.Text `
  color: black;
`

const RegisterText = styled.Text `
  color: black;
`

const EasyLoginText = styled.Text `
color: white;
`