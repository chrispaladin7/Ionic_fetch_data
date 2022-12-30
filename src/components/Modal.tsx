import React, { useState } from 'react';
import { modalController } from "@ionic/core";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";




class MyModal extends React.Component{

   
    // const addModal=async()=>{
    //     const Modal =await modalController.create({
    //         component:"my-modal",
    //         swipeToClose:true,
    //         presentingElement:await modalController.getTop(),
    //     });
    //     await Modal.present(); 
    // };
    // const closeModal=()=>{
    //     modalController.dismiss();
    // }
    
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




export default MyModal;