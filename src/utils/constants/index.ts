import ColumnFilter from "../../shared/components/ColumnFilter";

export const FILTER_OPTIONS = {
    All: '',
    Active: 'active',
    Archived: 'archived',
};


export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id' as const,
        Filter: ColumnFilter,
    },
    {
        Header: 'Title',
        accessor: 'title' as const,
        Filter: ColumnFilter,
    },
    {
        Header: 'Status',
        accessor: 'status' as const,
        Filter: ColumnFilter,
    },
    {
        Header: 'CreatedAt',
        accessor: 'createdAt' as const,
        Cell: ({ value }: { value: string }) => new Date(value).toLocaleDateString(),
        Filter: ColumnFilter,
    },
] as const;

