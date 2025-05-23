import React, { useMemo } from 'react';
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    useFilters,
    type TableInstance,
} from 'react-table';
import { useSearchParams } from 'react-router-dom';
import styles from './style.module.scss';
import GlobalFilter from '../GlobalFilter';
import type { Notice } from '../../utils/types';
import { COLUMNS } from '../../utils/constants';
import useNotices from '../../utils/hooks/useNotices';
import Pagination from '../Pagination';
import Loader from '../Loader';

const NoticeTable: React.FC = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || '1';
    const currentUrl = page === '1' ? '/notices.json' : `/notices_page${page}.json`;

    const columns = useMemo(() => COLUMNS, []);
    const { notices, view, loading, error } = useNotices(currentUrl);
    const data = useMemo(() => notices, [notices]);

    const tableInstance = useTable(
        {
            columns,
            data,
        },
        useFilters,
        useGlobalFilter,
        useSortBy
    ) as TableInstance<Notice> & {
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
    } = tableInstance

    if (loading) return <Loader />;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.tableWrapper}>
            <GlobalFilter setFilter={setGlobalFilter} filter={state.globalFilter} />
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
                                    </div>                                </th>
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

            <Pagination view={view} />

        </div>
    );
};

export default NoticeTable;
