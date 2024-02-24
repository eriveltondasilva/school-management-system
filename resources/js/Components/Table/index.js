import NotFoundItems from './NotFoundItems'
import {
  TableBody,
  TableHeader,
  TableRoot,
  TableRow,
  TableRowButtonEdit,
  TableRowButtonShow,
} from './Table'

// ------------------------------------
const Table = TableRoot
Table.Body = TableBody
Table.Header = TableHeader
Table.Row = TableRow
Table.RowButtonShow = TableRowButtonShow
Table.RowButtonEdit = TableRowButtonEdit
Table.NotFoundItems = NotFoundItems

export default Table
