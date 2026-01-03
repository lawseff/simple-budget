import { Entry } from '../../client/types.ts'
import { Table, Text } from '@mantine/core'
import { formatCategoryCode } from '../../service/category-service.ts'

type Props = {
  entry: Entry
}

const noWrapStyle = { whiteSpace: 'nowrap' }

export const MonthlyBudgetSectionRow = ({entry}: Props) => {
  return (
    <Table.Tr>
      <Table.Td style={noWrapStyle}>
        <Text>{entry.date}</Text>
      </Table.Td>
      <Table.Td>
        <Text ff="monospace" fw={600}>
          {formatCategoryCode(entry.categoryCode)}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm" c="dimmed">
          {entry.comment ?? ''}
        </Text>
      </Table.Td>
      <Table.Td ta="right" style={noWrapStyle}>
        <Text fw={700}>
          {entry.money.amount} {entry.money.currency}
        </Text>
      </Table.Td>
    </Table.Tr>
  )
}