import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import MonthlyReport from './component/MonthlyReport.tsx';

export default function App() {
  return <MantineProvider theme={theme}>
    <MonthlyReport />
  </MantineProvider>;
}
