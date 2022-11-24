import Head from "next/head"
import Alpha from "../components/Alpha"
import CalculatorInput from "../components/CalculatorInput"

const defaultEndpoint = "https://localhost:7114/api/Car"

export const getServerSideProps = async () => {
  const data = await fetch(defaultEndpoint)
  const json = await data.json()
  return {
    props: { cars: json },
  }
} // getStaticProps

export default function Home({ cars }) {
  console.log("data", cars)
  return (
    <div>
      <Head>
        <title>C0² Calculator</title>
      </Head>

      <Alpha />
      <CalculatorInput />
    </div>
  )
}
