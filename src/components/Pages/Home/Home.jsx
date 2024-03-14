import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import profile from '../../../images/profile.jpg'
import { Main } from '../../Layouts/Main/Main'
import { InfoTasks } from '../../Layouts/InfoTasks/InfoTasks'
import { NewTask } from '../../NewTask/NewTask'
import { FilterTasks } from '../../FilterTasks/FilterTasks'
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks'
import { ItemTask } from '../../ItemTask/ItemTask'


export const Home = () => {
  return (
    <>      
      <Header>
        <div className="container-header-1">
          <div className="container-title">
            <h1 className='title-header'>Gestor de Tareas</h1>
          </div>
          <div className="container-img">
            <img className='img-profile' src={profile} alt="Imagen de perfil" />        
          </div>
        </div>
      <NewTask />
      <InfoTasks pendingTasks={4} y doneTasks={2} />
      </Header>      
      <Main>
        <FilterTasks />
        <ContainerTasks>
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
          <ItemTask />
        </ContainerTasks>
      </Main>        
    </>
  )
}
