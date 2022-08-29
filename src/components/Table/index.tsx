import * as React from 'react';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];
interface ITable {
    headers: {
        name: string;
        node: string;
        numeric?: boolean;
    }[];
    data: {
        [key: string]: any;
    }[]
}
const Table = ({ headers, data }: ITable) => {
    const [page, setPage] = React.useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        {headers.map((h, index) => <DataTable.Title key={""+index} numeric={h.numeric ? true : false}>{h.name}</DataTable.Title>)}
      </DataTable.Header>
        {data.map((d, rowIndex) => {
            return (
             <DataTable.Row>
                {headers.map((h, hi) =>  <DataTable.Cell key={""+rowIndex + hi} numeric={h.numeric ? true : false}>{d[h.node]}</DataTable.Cell>)}
            </DataTable.Row>
            )
        })}
    

      {/* <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      /> */}
    </DataTable>
  );
};

export default Table;