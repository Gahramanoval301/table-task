import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { COLUMNS } from '../../utils/constants';
import useNotices from '../../utils/hooks/useNotices';
import type { Notice } from '../../utils/types';
import GenericTable from '../../shared/components/GenericTable';
import Pagination from '../../shared/components/Pagination';


const NoticeTable: React.FC = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || '1';
    const currentUrl = page === '1' ? '/notices.json' : `/notices_page${page}.json`;

    const { notices, view, loading, error } = useNotices(currentUrl);

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => notices, [notices]);

    return (
        <GenericTable<Notice>
            columns={columns}
            data={data}
            loading={loading}
            error={error || ""}
            renderPagination={<Pagination view={view} />}
        />
    );
};

export default NoticeTable;
