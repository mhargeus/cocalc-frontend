import Head from "next/head"
import Alpha from "../components/Alpha"
import CalculatorInput from "../components/CalculatorInput"
import Contact from "../components/Contact"
import Result from "../components/Result"
import Info from "../components/Info"

export async function getStaticProps() {
  const defaultEndpoint = "https://localhost:7114/api/Car"
  const data = await fetch(defaultEndpoint)
  const json = await data.json()

  return {
    props: { cars: json },
  }
  }

export default function Home({ cars }) {

 console.log("cars", cars) // this is an array of car
  return (
    <div className="snap-y snap-mandatory overflow-auto w-screen">

        <Head>
          <title>C0² Calculator</title>
        </Head>
        <div className="snap-start" id="first-section">
          <Alpha />
        </div>
        <div className="snap-start" id="second-section">
          <CalculatorInput passingCarsDown={cars}/>
        </div>
        <div className="snap-start" id="third-section">
          <Result />
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
