import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonModal, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar, useIonModal, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { error } from 'console';
import { Container } from 'react-dom';
import { modalController } from "@ionic/core";

import React from 'react';

const Home: React.FC = () => {
 


  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef<HTMLIonInputElement>(null);

 

  const [open,setOpen]=useState(false);
  const closeModal=()=>{
    setOpen(false);
  }


  let Items=[
    {
      "index":1,
    "Name": "",
    "Mobile": "",
    "Pets": "", 
    "Permanent_address": "",
    "current_Address": ""
  }
  ];
  const [persons,setPersons]=useState(Items);
  


  function goGetData(){
    
    let theURL="assets/Residents.json";
    axios.get(theURL).then(
      (theResponse:AxiosResponse)=>{
        console.log("our data just got loaded");

        console.log(theResponse);
        setPersons(theResponse.data);
      }
    );
   
  }


  // useEffect(()=>{
  //     getAllNotes();
  // },[]);

  return (
    <React.Fragment>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
      </IonContent>
      <IonButton color={'danger'} onClick={goGetData}>Go get Data</IonButton>
      <IonContent>
        <IonList >
          {persons.map((person:{index:number,Name:string,Mobile:string,Pets:string,
          Permanent_address:string,current_Address:string})=>(
             <><><><IonItem key={person.index.toPrecision()} onClick={() => setShowModal(true)} >
              <IonLabel>{person.Name}</IonLabel>
              <IonLabel>{person.Mobile}</IonLabel>
              <IonLabel>{person.Pets}</IonLabel>
              <IonLabel>{person.Permanent_address}</IonLabel>
              <IonLabel>{person.current_Address}</IonLabel>
              
            </IonItem>
            
            </>
             


            </>
                <IonModal isOpen={showModal} onDidDismiss={closeModal} breakpoints={[]} initialBreakpoint={1}
                  backdropBreakpoint={0.2}>
                
              
                    {persons.map((person: {index:number,
                      Name: string; Mobile: string; Pets: string;
                      Permanent_address: string; current_Address: string;
                    }) => (
                      <IonSlide key={person.index.toPrecision()}>
                        <IonCard>
                          <IonCardHeader>
                            <IonCardTitle>Residents {person.index}</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>{person.Name}</IonCardContent>
                          <IonCardContent>{person.Mobile}</IonCardContent>
                          <IonCardContent>{person.Pets}</IonCardContent>
                          <IonCardContent>{person.Permanent_address}</IonCardContent>
                          <IonCardContent>{person.current_Address}</IonCardContent>
                          <IonButton onClick={() => setShowModal(false)}>
                            Close Modal
                            </IonButton>
                        </IonCard>
                        
                      </IonSlide>


                    ))}
                  
                 
                </IonModal>
            </>
          ))}
     
        
     </IonList >
      </IonContent>
       

    </IonPage>
    </React.Fragment>
  );
};

export default Home;

class MyModal extends React.Component{

  
  render(){
      return(
          <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Blank</IonTitle>
              </IonToolbar>
            </IonHeader>
            
          </IonContent>
          <IonContent className="ion-padding">
        
          </IonContent>
  
    
        </IonPage>
      
      );
  }
  
  
};