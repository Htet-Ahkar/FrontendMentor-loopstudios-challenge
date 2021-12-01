//Styled components
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

//Layout
import { Layout } from "../Components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
