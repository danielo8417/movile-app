import { 
         IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar, 
         IonCard, 
         IonCardContent, 
         IonCardHeader, 
         IonCardSubtitle, 
         IonCardTitle 
} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fotos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Fotos"/>
        
        <IonCardContent className='card-background-image'>

<IonCard style={{backgroundColor:"wheat"}}>
  <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6c/16/ce/caption.jpg?w=1200&h=-1&s=1"/>
  <div className="card-title">São Paulo</div>
  <div className="card-subtitle">41 Listings</div>
  </IonCard>

<IonCard>
  <img src="https://amsterdamguias.com/wp-content/uploads/2022/02/amsterdam-guias-y-tour-suscribete-a-nuestra-newsletter.jpg"/>
  <div className="card-title">Amsterdam</div>
  <div className="card-subtitle">64 Listings</div>
  </IonCard>

<IonCard>
  <img src="https://aws-tiqets-cdn.imgix.net/images/content/4b6e12e7690246369e834e3e7ebf123b.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=519b376686d8d06c9f911c79388b4edf"/>
  <div className="card-title">San Francisco</div>
  <div className="card-subtitle">72 Listings</div>
  </IonCard>

<IonCard>
  <img src="https://media.istockphoto.com/photos/aerial-view-of-madison-city-downtown-at-sunset-wisconsin-picture-id1321423495?k=20&m=1321423495&s=612x612&w=0&h=CDhkNZrhFMxicG9Pl_mnaPPjNsDxfVHCPD_kuzzc3fA="/>
  <div className="card-title">Madison</div>
  <div className="card-subtitle">28 Listings</div>
  </IonCard>
 </IonCardContent>

       </IonContent>
    </IonPage>
  );
};

export default Tab4;
