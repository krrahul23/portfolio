import Head from "next/head";
import { Toaster } from "react-hot-toast";

// Components
import Navigation from "../components/navigation/Navigation";
import Landing from "../components/landing/Landing";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rahul Kumar | Portfolio</title>
        <meta name="description" content="Portfolio by Rahul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            backgroundColor: "#333",
            color: "#eee",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
          },
        }}
      />
      <Navigation />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
