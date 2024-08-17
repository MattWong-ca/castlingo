import styles from '../../styles/Pages.module.css';

export default function New({ navigateToPage}) {
  // const [currentTabUrl, setCurrentTabUrl] = useState<string>("Loading...");

  // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //   setCurrentTabUrl(tabs[0].url);
  // });
  // const [counter, setCounter] = useState(0);
  // const incrementCounter = () => setCounter(counter + 1);

    return (
        <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>NEXT-CHROME-STARTER</h1>
          <p className={styles.description}>
            This is an example of a Browser Extension built with NEXT.JS.
            Please refer to the GitHub repo for running instructions and
            documentation
          </p>
          <h1 className={styles.code}>New Page ./components/New/index.js</h1>
          {/* <div>{currentTabUrl}</div> */}
          <p>{"[ - This is New page content - ]"}</p>
          {/* <span className={styles.counter}>{counter}</span>
          <button onClick={incrementCounter}>+</button> */}
          <p onClick={() => navigateToPage('home')}>{"< Go Back"}</p>
        </main>
      </div>
    );
  }