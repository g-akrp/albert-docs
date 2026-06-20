import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Plain JSON, Lives In Your Repo',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Requests, environments, flows, and sims are all plain-JSON files that diff cleanly in git —
        no proprietary collection format, no separate server, no account.
      </>
    ),
  },
  {
    title: 'Flows & Sims',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Chain requests into an end-to-end <strong>flow</strong>, then reuse those flows as load
        profiles in a <strong>sim</strong> for stress testing, with live charts as it runs.
      </>
    ),
  },
  {
    title: 'k6-Powered',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Flows and sims execute via <a href="https://k6.io/">k6</a>, auto-downloaded on first run.
        Run the same tests in CI with the bundled <code>albert</code> CLI.
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
