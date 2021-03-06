import React, { Component } from 'react';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating';
import DriverCard from './Components/DriverCard';
import LikeButton from './Components/LikeButton';
import LikeBtns from './Components/LikeBtns'

import Facebook from './Components/Facebook';
import FacebookBtns from './Components/FacebookBtns';
import profiles from './data/berlin.json'

import './Components/style.css';

const profilesData = profiles;

class App extends Component {
  
  render() {
    
    const allProfiles = profilesData.map((profile, index) => {
      
      return (
      <div> 
          <p><img src={profile.img} style={{ width: '100px' }}/></p>
          <p>{profile.firstName} {profile.lastName}</p>
          <p>{profile.country}</p>
          {/* <td><button onClick={handleDelete}>delete</button></td> */}
      </div>
      )
    })

    return (
      <div className="App">
        <h1>Facebook</h1>
        <FacebookBtns
          profilesData={profilesData}
        />
        <h1>IdCard</h1>
        <IdCard 
          lastName="Don" 
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <h1>Greetings</h1>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        <h1>Random</h1>
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>    
        <h1>Credit Card</h1>   
        <CreditCard 
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />  
        <CreditCard 
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard 
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
        <h1>Rating</h1>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        <h1>Driver Card</h1>
        <DriverCard 
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
        <h1>Like Button | State</h1>
          <LikeButton />
          <LikeBtns />
        <h1>Facebook | List and Keys</h1>
          {allProfiles}
        
      </div>
    );
  }
}

export default App;
