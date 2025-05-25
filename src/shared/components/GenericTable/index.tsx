// components/GenericTable.tsx
import React from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  type TableOptions,
  type TableInstance,
} from 'react-table';
import styles from './GenericTable.module.scss';
import Loader from '../Loader';
import GlobalFilter from '../GlobalFilter';

interface GenericTableProps<T extends object> extends TableOptions<T> {
  loading: boolean;
  error?: string;
  enableGlobalFilter?: boolean;
  renderPagination?: React.ReactNode;
}

function GenericTable<T extends object>({
  columns,
  data,
  loading,
  error,
  enableGlobalFilter = true,
  renderPagination,
}: GenericTableProps<T>) {
  const tableInstance = useTable<T>(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy
  ) as TableInstance<T> & {
    state: {
      globalFilter: string;
    };
    setGlobalFilter: (filterValue: string) => void;
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  if (loading) return <div className={styles.loaderContainer}><Loader /></div>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.tableWrapper}>
      {enableGlobalFilter && (
        <GlobalFilter setFilter={setGlobalFilter} filter={state.globalFilter} />
      )}

      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={column.id}>
                  {column.render('Header')}
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}

                  <div
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    {column.canFilter ? column.render('Filter') : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {renderPagination}
    </div>
  );
}

export default GenericTable;
