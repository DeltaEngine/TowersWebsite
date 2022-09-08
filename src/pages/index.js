import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
	 <div>
      <video loop autoPlay width="100%">
        <source
          src='https://deltaengine.net/videos/TowersLoop.mp4'
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
	  {/* <h1 className="hero__title">{siteConfig.title}</h1>*/}
		  {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
			  {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
			  </div>*/}

    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
