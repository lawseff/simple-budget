import {
  Container,
  Box,
  Group,
  Title,
  Text,
  Button,
  SimpleGrid,
  Card,
  Collapse,
  Code,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useParams, Navigate } from 'react-router-dom'
import { MonthlyBudgetSection } from './MonthlyBudgetSection.tsx'
import { isValidYearMonth, today, yearMonth } from '../../service/date-service.ts'
import { monthlyReport } from '../../service/mock-data.ts'

export const MonthlyReport = () => {
  const [rawOpen, {toggle}] = useDisclosure(false)

  const {yearMonth: selectedYearMonth} = useParams<{ yearMonth?: string }>()

  if (!isValidYearMonth(selectedYearMonth)) {
    const currentYearMonth = yearMonth(today())
    return <Navigate to={`/months/${currentYearMonth}`} replace/>
  }

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #eef2ff 0%, #f7f8fb 100%)',
        padding: 28,
      }}
    >
      <Container size={1100}>
        {/* Header */}
        <Group justify="space-between" mb="md">
          <Box>
            <Title order={4}>Monthly Report — {selectedYearMonth}</Title>
            <Text size="sm" c="dimmed">
              Simple Budget — 50/30/20
            </Text>
          </Box>

          <Group gap="xs">
            <Button size="xs">Download JSON</Button>
            <Button size="xs" variant="light" onClick={toggle}>
              Toggle raw
            </Button>
          </Group>
        </Group>

        <SimpleGrid cols={{base: 1, md: 2}} spacing="md">
          <MonthlyBudgetSection title="Income" section={monthlyReport.income} />
          <MonthlyBudgetSection title="Savings" section={monthlyReport.savings} />
          <MonthlyBudgetSection title="Needs" section={monthlyReport.needs} />
          <MonthlyBudgetSection title="Wants" section={monthlyReport.wants} />
        </SimpleGrid>

        <Collapse in={rawOpen}>
          <Card mt="md">
            <Text fw={600} mb="xs">
              Raw JSON
            </Text>
            <Code block>
              {JSON.stringify(monthlyReport, null, 2)}
            </Code>
          </Card>
        </Collapse>

        <Text ta="center" c="dimmed" size="sm" mt="lg">
          Generated mock data • OpenAPI response viewer
        </Text>
      </Container>
    </Box>
  )
}
