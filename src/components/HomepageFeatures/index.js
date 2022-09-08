import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Tonsoffun from '@site/static/img/Image1.jpg';

const FeatureList = [
  {
    title: 'What is Towers?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Towers is a free Real Time Strategy (RTS) game where you conquer and upgrade towers to dominate the battlefield.
      </>
    ),
  },
  {
    title: 'Tons of fun',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Fight your way through the singleplayer campaign and beat tricky challenges. Master different heroes with unique skills to gain superiority on the battlefield and crush your foes! Fight your friends and people from around the world to compete for glory in the leaderboards!
      </>
    ),
  },
  {
    title: 'Features',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
	  <ul style={{ listStyleType: "dot" }}>Fast paced and exiting RTS game.</ul>
	  <ul style={{ listStyleType: "dot" }}>Play as the commander of cute Knights, Soldiers, Archers with more units and features coming soon.</ul>
	  <ul style={{ listStyleType: "dot" }}>Multiplayer: Challenge your friends and play the highly addictive online mode with a competitive ladder.</ul>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p style={{
          justifyContent: 'Left',
		  aligncontent: 'left',
          alignItems: 'Left',
          fontSize: '20px',
        }}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
 
	<div className="container">
	<section className={styles.features}>
    <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
    </div> 
	</section>
	</div>
  );
}
