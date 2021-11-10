import { IonContent, IonPage, IonImg, IonSegment, IonSegmentButton, IonLabel, IonButton } from '@ionic/react';

import vfslogo from "../assets/images/vfslogo.png";
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonImg 
          className="vfslogo" 
          src={vfslogo} 
          alt="Vertical Flight School logo" 
        />
        <IonButton 
          expand="block"
          size="large"
          color="primary"
        >
          Start
        </IonButton>
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="magyar">
            <IonLabel>Magyar</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="english">
            <IonLabel>English</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="deutsch">
            <IonLabel>Deutsch</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
    </IonPage>
  );
};

export default Home;
