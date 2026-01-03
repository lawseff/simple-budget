import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import { theme } from "./theme"
import MonthlyReport from './component/MonthlyReport.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export default function App() {
  return <MantineProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/months" replace />} />
        <Route path="/months" element={<MonthlyReport />}/>
        <Route path="/months/:yearMonth" element={<MonthlyReport />}/>
      </Routes>
      <MonthlyReport/>
    </BrowserRouter>
  </MantineProvider>
}
