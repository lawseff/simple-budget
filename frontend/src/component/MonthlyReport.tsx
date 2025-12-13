import {
  Container,
  Box,
  Group,
  Title,
  Text,
  Button,
  SimpleGrid,
  Card,
  Table,
  Collapse,
  Code
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { monthlyReport } from '../service/mock-data.ts';

export default function MonthlyReport() {
  const [rawOpen, { toggle }] = useDisclosure(false);

  const renderSection = (title: string, section: any) => (
    <Card key={title} radius="lg" shadow="sm" withBorder>
      <Group justify="space-between" mb="sm">
        <Box>
          <Text fw={600}>{title}</Text>
          <Text size="sm" c="dimmed">
            Total
          </Text>
        </Box>

        <Group gap="xs">
          <Text fw={700} size="lg">
            {section.total.amount} {section.total.currency}
          </Text>
          {section.relativeToIncome && (
            <Text size="sm" c="dimmed">
              {section.relativeToIncome}
            </Text>
          )}
        </Group>
      </Group>

      <Table
        withRowBorders
        verticalSpacing="sm"
        horizontalSpacing="sm"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Date</Table.Th>
            <Table.Th>Category</Table.Th>
            <Table.Th>Comment</Table.Th>
            <Table.Th ta="right">Amount</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {section.entries.map((e: any) => (
            <Table.Tr key={e.id}>
              <Table.Td>{e.date}</Table.Td>
              <Table.Td>
                <Text ff="monospace" fw={600}>
                  {e.category}
                </Text>
              </Table.Td>
              <Table.Td>
                <Text size="sm" c="dimmed">
                  {e.comment ?? ''}
                </Text>
              </Table.Td>
              <Table.Td ta="right">
                <Text fw={700}>
                  {e.money.amount} {e.money.currency}
                </Text>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Card>
  );

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
            <Title order={4}>Monthly Report — 2025-02</Title>
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

        {/* Sections */}
        <SimpleGrid cols={{base: 1, md: 2}} spacing="md">
          {renderSection('Income', monthlyReport.income)}
          {renderSection('Savings', monthlyReport.savings)}
          {renderSection('Needs', monthlyReport.needs)}
          {renderSection('Wants', monthlyReport.wants)}
        </SimpleGrid>

        {/* Raw JSON */}
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

        {/* Footer */}
        <Text ta="center" c="dimmed" size="sm" mt="lg">
          Generated mock data • OpenAPI response viewer
        </Text>
      </Container>
    </Box>
  );
}
