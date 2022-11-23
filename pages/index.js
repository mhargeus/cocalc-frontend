import Head from "next/head"
import Alpha from "../components/Alpha"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carbon-calculator</title>
      </Head>

      <Alpha />
      <calculatorInput />
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Carbon Calculator</a>
        </h1>
        <box className='card'>
          <p>Car-brand</p>
          <input></input>
          <p>Model</p>
          <input></input>
          <p>Engine</p>
          <input></input>
          <p>Year</p>
          <input></input>
          <p>Distance</p>
          <input></input>
          <p>Lets keep going here guuuuuys</p>

          <button>Calculate</button>
        </box>
      </main>

      <footer className={styles.footer}>
        <h1>Dancer</h1>
      </footer> */}
    </div>
  )
}
