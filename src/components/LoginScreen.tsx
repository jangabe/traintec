import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import { PropertyChangeData } from '@nativescript/core';

type LoginScreenProps = {
  route: RouteProp<MainStackParamList, "LoginScreen">,
  navigation: FrameNavigationProp<MainStackParamList, "LoginScreen">,
}

function LoginScreen({ navigation }: LoginScreenProps) {
  const [phone, setPhone] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  navigation.setOptions({'title':'Login'});
  const goToTravels = () => navigation.navigate('Secondary');

  const loginAction = async () => {
    try {
      console.log('user:',username, ' - password:', password);
      console.log('stringify',JSON.stringify({userName: username,password}));
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({userName: username,password})
      };
      console.log('requestOptions', requestOptions);
      console.dir(requestOptions);
      const response = await fetch('https://siast.asocoltrans.com/api/v1/auth/login/', requestOptions);
      console.log('response', response);
      const data = await response.json();
      console.dir(data);


      /*const resp = await fetch('https://rickandmortyapi.com/api/charact');
      if(resp.status !== 200){
        throw Error('msg');
      }
      const data = await resp.json();*/
      //alert('ir a aceptar viajes');
      //goToTravels();
      console.log('aquí');

    } catch (error) {
      alert('Error de autenticación. Intente nuevamente');
      console.log('error2', error);
    }

  };

  const createAccount = () => {
    alert('Crear cuenta');
  };

  function updatePhone(event: PropertyChangeData) {
    console.log('event', event.value);
    setPhone(event.value);
  }

  function updateUserName(event: PropertyChangeData) {
    console.log('event', event.value);
    setUserName(event.value);
  }

  function updatePassword(event: PropertyChangeData) {
    console.log('event', event.value);
    setPassword(event.value);
  }
  return (
    <flexboxLayout className="login" flexDirection="column" justifyContent="center" alignItems="center">
      <stackLayout 
          width='100%'
          height='30%'
          paddingTop="20px"
      >
        <image
          marginBottom="60px"
          src="~/LogoOrigi.png"
          stretch="aspectFit"
          className="login-image"
        />
      </stackLayout>

      <stackLayout 
          height='69%'
      >
        <stackLayout width='80%' marginTop='30px'>
          <label color="white" paddingBottom="25px" fontSize="15px" textAlignment="center" marginBottom="20px">INGRESA CON TU NÚMERO DE CELULAR</label>
        </stackLayout>

        <flexboxLayout width="60%" marginBottom="20px" flexDirection="column" justifyContent="center">
          {/* <stackLayout marginRight="7">
            <textField
              className="login-input"
              width="20%"
              textAlignment="center"
              id="prefix"
              text="+57"
              isEnabled="false"
            ></textField>
          </stackLayout> */}

          <stackLayout>
            <textField 
              width="100%"
              className="login-input" 
              hint="Usuario" 
              text={username}
              textAlignment="center"
              maxLength="50"
              onTextChange={updateUserName}
              ></textField>
          </stackLayout>

          <stackLayout>
            <textField
              width="100%"
              className="login-input"
              hint="Contraseña"
              textAlignment="center"
              text={password}
              secure="true"
              onTextChange= {updatePassword}
            ></textField>
          </stackLayout>
        </flexboxLayout>

        <button text="INICIAR SESIÓN"
          width="60%"
          onTap={loginAction}
          class="login-iniciar-sesion"
        >
        </button>

        <stackLayout>
          <label color="white" fontSize="15px" textAlignment="center" marginBottom="20px">AL REGISTRARME ACEPTO TÉRMINOS Y CONDICIONES</label>
        </stackLayout>

        <stackLayout>
          <button
            onTap={createAccount}
            text="CREA TU CUENTA"
            className="login-crear-cuenta"
          >
          </button>
        </stackLayout>

      </stackLayout>

    </flexboxLayout>
  );
}


export default LoginScreen;
