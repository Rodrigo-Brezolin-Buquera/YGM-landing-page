import { Box, CircularProgress } from "@chakra-ui/react";
import Head from "next/head";
import { lazy, Suspense } from "react";
import { businessCol, findAllItems, findClasses, plansCol } from "../api";

const Header = lazy(() => import("../sections/header"));
const General = lazy(() => import("../sections/general"));
const YogaStyles = lazy(() => import("../sections/yogaStyles"));
const PhysicalSpace = lazy(() => import("../sections/physicalSpace"));
const Agenda = lazy(() => import("../sections/agenda"));
const Values = lazy(() => import("../sections/values/Index"));
const Teachers = lazy(() => import("../sections/teachers"));
const Footer = lazy(() => import("../sections/footer"));


export async function getStaticProps() {
  const [businessInfo] = await findAllItems(businessCol)
  const plans = await findAllItems(plansCol)
  const classes = await findClasses() 

  return {
    props: {
      businessInfo: businessInfo,
      plans: plans,
      classes: classes
    },
  }
}

export default function Home({ businessInfo, plans, classes }) {
  const { address, email, facebook, instagram, phone } = businessInfo

  return (
    <>
      <Head>
        <title>Yoga Mangala</title>
        <meta name="description" content="Studio Yoga Mangala - Aulas de yoga, meditação e massagens" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >

        <Suspense fallback={<CircularProgress alignSelf={"center"} justifySelf={"center"} size='120px' isIndeterminate color="brand.100" />}>
          <Header />
          <General />
          <YogaStyles />
          <Agenda phone={phone} classes={classes} />
          <Values plans={plans} />
          <Teachers />
          <PhysicalSpace address={address} />
          <Footer contact={{ email, facebook, instagram, phone }} />
        </Suspense>

      </Box>
    </>

  )
}


