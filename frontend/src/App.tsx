import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import { theme } from "./theme"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MonthlyReport } from './component/month/MonthlyReport.tsx'

export default function App() {
  return <MantineProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/months" replace />} />
        <Route path="/months/:yearMonth" element={<MonthlyReport />}/>
      </Routes>
      <MonthlyReport/>
    </BrowserRouter>
  </MantineProvider>
}
