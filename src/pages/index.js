import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Step from '@site/src/components/step';
import Footer from '@site/src/components/footer';
import features from '@site/static/img/features.jpg';
import BottomLead from '@site/src/components/BottomLead';

import styles from './index.module.css';

function HomepageHeader() {
  //h1 is hack to prevent scrolling down, first h1 is selected
  return (
    <header>
  <h1 class="xlarge-font"></h1>
  <div class="VideoBannerParallex">
    <figure>
      <video loop autoplay="true" muted="muted">
        <source src="video/TowersLoop.mp4" type="video/mp4"/>
      </video>
      <div class="IconHolder">
      </div>
    </figure>
    <div class="TowerBannerLogo">
      <img src="img/TowersLogo.png" alt="Towers" />
    </div>
  </div>
  <div id="FreePlaynowButton" class="FreePlaynowButton">
    <a href="https://store.steampowered.com/app/1673670/Towers/" target="_blank" rel="noopener">
      <img class="img" src="img/ButtonWebsitePlayNow.png" alt="Download the game"/><span>Play Now</span></a>
  </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const data = {
    step1: {
      title: 'What is Towers?',
      description: 'Towers is a free Real Time Strategy (RTS) game where you conquer and upgrade towers to dominate the battlefield.',
      alternate: false,
    },
    step2: {
      title: 'Tons of fun',
      description: 'Fight your way through the singleplayer campaign and beat tricky challenges. Master different heroes with unique skills to gain superiority on the battlefield and crush your foes! Fight your friends and people from around the world to compete for glory in the leaderboards!Shop for your favorite meals or drinks and enjoy while doing it.',
      alternate: true,
    },
    step3: {
      title: 'Features',
      firstpoint: '● Fast paced and exiting RTS game.',
      SecondPoint:'● Play as the commander of cute Knights, Soldiers, Archers with more units and features coming soon.',
      ThirdPoint: '● Multiplayer: Challenge your friends and play the highly addictive online mode with a competitive ladder.',
      ForthPoint: '● Great controls on all platforms, play with mouse, keyboard or touch.',
      FifithPoint:'● Cute hand drawn graphic style.',
      SixthPoint: '● Free to Play without any pay to win, you can play any level, game mode without ever having to pay anything. We are grateful if you can support us through purchasing extra gold, optional skins or progressing faster through the game if you like that.',
      alternate: false,
    },
    bottomLead: {
      actionText: 'Download the game now.',
      description: 'Available in your favorite store. Start your premium fun now.',
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
    },
  }
  return (
    <Layout
      title={``}
      description="Action strategy game">
      <HomepageHeader />
      <div>
      <div id = "image">
<img src='/img/TowersWelcome.jpg' style={{marginTop: 70}} />
</div>
      <div id="faq" className="pt-20" style={{marginLeft: 630, marginTop: -470, marginBottom:-100}}>
<ul>
  <li>- Towers is an action Strategy game that comes free on Steam and soon on Mobile too (Awesome!)</li>
  <li>- To fight epic battles you have to upgrade your buildings</li>
  <li>- Capture enemy buildings to increase the size of your army</li>
  <li>- Make your army much stronger by using your hero and their skills</li>
  <li>- Enjoy big battles in the multiplayer mode</li>
  <li>- Master all the different and unique level mechanics</li>
</ul>
</div>
</div>

      <main>
     <br></br>
     <br></br>
     <br></br>
     
               <br></br>
               <br></br>
             <BottomLead 
            actionText={data.bottomLead.actionText}
            description={data.bottomLead.description}
            mainActionText={data.bottomLead.mainActionText}
            extraActionText={data.bottomLead.extraActionText}
          />
      </main>
    
    </Layout>
  );
}
