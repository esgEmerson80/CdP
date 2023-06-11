import React from 'react';
import { useAuth } from '../../contexts/AuthProvader/useAuth';

import { Comentario } from './Styles';


export const ProtectedLayout = ({ children }: { children: JSX.Element}) => {
  const auth = useAuth();
  
  if (!auth.email) {
    
    return (
      <Comentario>
        <ul>
          Você não está logado como administrador...
        </ul>
        <hr />
      </Comentario>
    )
  } return (
    children
  )  
};