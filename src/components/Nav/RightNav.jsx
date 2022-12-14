import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {IoDocumentTextOutline, IoPersonOutline, IoHeartOutline, IoNotificationsOutline, IoLogOutOutline } from 'react-icons/io5';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    font-weight: 700;
  }
  li a{
    text-decoration: none;
    color: var(--Description)
    font-weight: 700;
  }
  li a:hover{
    color: var(--Primary);
  }
  button {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: var(--Primary);
    border-radius: 6px;
    margin: 5px 0;
    color: var(--White);
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;

  }

  button:hover{
    background-color: var(--ButtonHover);
    color: var(--White);
  }
  .btn {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: var(--Yellow);
    border-radius: 6px;
    margin: 5px 0;
    color: var(--White);
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;

  }

  btn:hover{
    background-color: var(--Blue);
  }


  @media (max-width: 800px) {
    flex-flow: column nowrap;
    background: rgba(237, 50, 55, 0.95);
    backdrop-filter: blur(4px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 5px;
      margin: 10px;
    }
    li a {
      color: var(--White);
    }
    li a:hover {
      color: var(--Magenta);
    }

    button{
      display: block;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: var(--White);
      color: var(--Primary);
      margin-left: 10px;
      margin-right: 10px;
      padding: 10px 0;
    }
    button svg {
      margin-right: 1px;
    }

    button:hover{
      background-color: var(--ButtonHover);
    }
    .btn{
      display: block;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color:  var(--Secondary);
      margin-left: 10px;
      margin-right: 10px;
      padding: 10px 0;
    }
    .btn svg {
      margin-right: 1px;
    }

    .btn:hover{
      background-color: var(--Blue);
    }
  }

  }
`;

function HandleOpen(e) {
  e.preventDefault();
  window.open("https://wa.me/5522999942800?text=Ol??. Gostaria de saber mais detalhes sobre cursos")
}
function HandleOpenOr??amento(e) {
  e.preventDefault();
  window.open("orcamentos", "_self")
}
function HandleLogout(e) {
  e.preventDefault();
  window.open("/entrar", "_self")
}
function HandleOpenMInhasPropostas(e) {
  e.preventDefault();
  window.open("/minhas-propostas", "_self")
}
function HandleOpenNotifica????ess(e) {
  e.preventDefault();
  window.open("/notificacoes", "_self")
}



const RightNav = ({ open }) => {
  const logged = true;
  return (
    <Ul open={open}>
       <li className='nav-item'>
            <Link to='/'>
              In??cio
            </Link>
          </li>
       <li className='nav-item'>
            <Link to='/propostas'>
            Propostas
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/profissionais' >
            Profissionais
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/planos' >
            Pre??os
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blog' >
            Contato
            </Link>
          </li>
          {logged === false ? 
            <>
            <button onClick={HandleLogout}>
              <IoLogOutOutline /> &nbsp; Entrar
            </button>
            <li className='nav-item'>
              <Link to='/cadastrar' >
              Cadastrar
              </Link>
            </li>
            </>
          :
          <>
          <button className='btn' onClick={HandleOpenOr??amento}>
            <IoDocumentTextOutline /> &nbsp; Or??amentos
          </button>
          <button className='btn' onClick={HandleOpenNotifica????ess}>
            <IoNotificationsOutline /> &nbsp; Notifica????es
          </button>
          <button className='btn' onClick={HandleOpen}>
            <IoHeartOutline /> &nbsp; Favoritos
          </button>
          <button className='btn' onClick={HandleOpen}>
            <IoPersonOutline /> &nbsp; Minha conta
          </button> 
          <button onClick={HandleLogout}>
            <IoLogOutOutline /> &nbsp; Sair
          </button>
          </>}

         
    </Ul>
  )
}

export default RightNav
