import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"></h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Web home of Josh Melander">
      <main>

        <div className={clsx("container", styles.main)}>
          <h1 className="text--primary">
            {siteConfig.title}
          </h1>
          <p>
            As you might have guessed this is my website.
          </p>
          <p>
            I'm a (software) engineer, business man, and armchair philosopher. Currently in that order, but working to reverse it 😀.
          </p>
          <h3>
            Why my own website?
          </h3>
          <p>
            For a few reasons:
            <ul>
              <li>I like to build things: My own website is a playground and a showcase for what I have, am, and will build.</li>
              <li>Get out there: Give y'all a place to find me that isn't a social (marketing) platform.</li>
              <li>
                Ownership: I've been inspired by others to own what parts of my internet infrastructure that I can.
              </li>
              <li>
                Independence: The failures of internet giants to be benevolent dictators pushes me invest in not-owned-by-them, or rather, owned-by-them-as-little-as-possible 😉, solutions
              </li>
            </ul>
          </p>
        </div>
      </main>
    </Layout>
  );
}
