import { Box, Card, Group, Table, Text } from '@mantine/core'
import { BudgetSection } from '../../client/types.ts'
import { MonthlyBudgetSectionRow } from './MonthlyBudgetSectionRow.tsx'

type Props = {
  title: string
  section: BudgetSection
}

export const MonthlyBudgetSection = ({ title, section }: Props) => {
  return (
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

      <Table withRowBorders verticalSpacing="sm" horizontalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Date</Table.Th>
            <Table.Th>Category</Table.Th>
            <Table.Th>Comment</Table.Th>
            <Table.Th ta="right">Amount</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {section.entries.map((entry) => <MonthlyBudgetSectionRow entry={entry} key={entry.id}/>)}
        </Table.Tbody>
      </Table>
    </Card>
  )
}
