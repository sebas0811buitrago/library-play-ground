import { AgGridReact, AgGridReactProps } from 'ag-grid-react';

const ROWHEIGTH: number = 28;

const AgGridWrapper = <TData extends unknown>(
  props: AgGridReactProps<TData>
) => {
  const {
    suppressContextMenu = true,

    suppressCellFocus = true,
    cacheBlockSize = 100,
    blockLoadDebounceMillis = 10,
    maxConcurrentDatasourceRequests = 1,
    overlayNoRowsTemplate = 'No Results Found',
    rowSelection = 'single',
    rowHeight = ROWHEIGTH,
    ...restAgGridProps
  } = props;

  return (
    <div className={'ag-theme-balham'}>
      <AgGridReact<TData>
        suppressContextMenu={suppressContextMenu}
        rowSelection={rowSelection}
        suppressCellFocus={suppressCellFocus}
        cacheBlockSize={cacheBlockSize}
        blockLoadDebounceMillis={blockLoadDebounceMillis}
        maxConcurrentDatasourceRequests={maxConcurrentDatasourceRequests}
        overlayNoRowsTemplate={overlayNoRowsTemplate}
        columnMenu="legacy"
        rowHeight={rowHeight}
        {...restAgGridProps}
      />
    </div>
  );
};

export default AgGridWrapper;
