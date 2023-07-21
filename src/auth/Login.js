import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../actions/userActions';
import * as S from '../auth/Log.styles.js';
import Imagen from "../img/celebridad.JPG";
import "../components/Styles.css"

export const Login = () => {
  const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      await loginWithRedirect();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      dispatch(login(user))
    };
  }, [isAuthenticated, user, dispatch]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (

    <S.ContainerButton>
    <h1 id="bienv">BIENVENIDOS</h1>
    <div>
    <img id="imagen" src={Imagen} /></div>
      <S.Button onClick={handleLogin}>Igresar</S.Button>
    </S.ContainerButton>);
};

