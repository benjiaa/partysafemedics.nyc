import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import psm_about from "../../content/01_psm_about.json";
import psm_vision from "../../content/02_psm_vision.json";
import psm_values from "../../content/03_psm_values.json";
import psm_rates from "../../content/04_psm_rates.json";
import psm_services from "../../content/05_psm_services.json";
import psm_supplies from "../../content/06_psm_supplies.json";
import psm_meet from "../../content/07_psm_meet.json";
import psm_contact from "../../content/08_psm_contact.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        title={psm_about.title}
        content={psm_about.text}
        button={MiddleBlockContent.button}
      />
      <MiddleBlock
        title={psm_vision.title}
        content={psm_vision.text}
        button={MiddleBlockContent.button}
      />
      <MiddleBlock
        title={psm_values.title}
        content={psm_values.text}
        button={MiddleBlockContent.button}
      />
      <MiddleBlock
        title={psm_rates.title}
        content={psm_rates.text}
        button={MiddleBlockContent.button}
      />
      <MiddleBlock
        title={psm_services.title}
        content={psm_services.text}
        button={MiddleBlockContent.button}
      />
      <MiddleBlock
        title={psm_supplies.title}
        content={psm_supplies.text}
        button={MiddleBlockContent.button}
      />
      <MiddleBlock
        title={psm_meet.title}
        content={psm_meet.text}
        button={MiddleBlockContent.button}
      />
      <Contact
        title={psm_contact.title}
        content={psm_contact.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
