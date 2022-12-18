import Head from "next/head"
import Alpha from "../components/Alpha"
import CalculatorInput from "../components/CalculatorInput"
import Contact from "../components/Contact"
import Result from "../components/Result"
import Info from "../components/Info"
import { useState } from "react"

export async function getStaticProps() {
  const defaultEndpoint = "https://localhost:7114/api/Car"
  const data = await fetch(defaultEndpoint)
  const json = await data.json()

  return {
    props: { cars: json },
  }
  }

export default function Home({ cars }) {
  const [result, setResult] = useState(0);

 console.log("result in index", result) // this is an array of car
 console.log("cars", cars) // this is an array of car
  return (
    <div className="snap-y snap-mandatory overflow-auto w-screen">

        <Head>
          <title>CO² Calculator</title>
        </Head>
        <div className="snap-start" id="first-section">
          <Alpha />
        </div>
        <div className="snap-start" id="second-section">
          <CalculatorInput passingCarsDown={cars} setResult={setResult}/>
        </div>
        <div className="snap-start" id="third-section">
          <Result result={result} />
        </div>  
        <div className="snap-start" id="fourth-section">
          <Info />
        </div>
        <div className="snap-start" id="fifth-section">
          <Contact />
        </div>
      </div>
  )
}
