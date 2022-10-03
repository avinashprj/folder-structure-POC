import "../styles/app.scss";
import "../styles/variable.scss";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { LicenseManager } from "ag-grid-enterprise";
LicenseManager.setLicenseKey(process.env.NEXT_PUBLIC_LICENSE_KEY);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
