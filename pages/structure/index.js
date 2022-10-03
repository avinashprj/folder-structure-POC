import { AgGridReact } from "ag-grid-react";
import React, { useState, useMemo } from "react";
import { sideBar } from "./../../components/Sidebar";
import defaultColumnDef from "./../../components/defaultColumnDef";

const Structure = () => {
  const [gridApi, setGridApi] = useState(null);
  const rowData = [
    { orgHierarchy: ["Erica"], jobTitle: "CEO", employmentType: "Permanent" },
    {
      orgHierarchy: ["Erica", "Malcolm"],
      jobTitle: "VP",
      employmentType: "Permanent",
    },
  ];
  const [columnDefs, setColumnDefs] = useState([
    // we're using the auto group column by default!
    { field: "jobTitle" },
    { field: "employmentType" },
  ]);
  const getDataPath = useMemo(() => {
    return (data) => {
      return data.orgHierarchy;
    };
  }, []);

  const treeData = true;
  const onGridReady = (params) => {
    setGridApi(params.api);
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ height: 500 }} className="ag-theme-alpine">
        <AgGridReact
          treeData={treeData}
          enableCharts={true}
          enableRangeSelection={true}
          defaultColDef={defaultColumnDef}
          rowData={rowData}
          columnDefs={columnDefs}
          stopEditingWhenCellsLoseFocus={true}
          rowSelection={"multiple"}
          suppressRowClickSelection={true}
          singleClickEdit={true}
          pagination={true}
          paginationPageSize={20}
          onGridReady={onGridReady}
          getDataPath={getDataPath}
          // onSelectionChanged={onSelectionChanged}
          // onCellValueChanged={onCellValueChanged}
          // onFirstDataRendered={firstDataRenderedHandler}
          // onModelUpdated={rowCountHandler}
          sideBar={sideBar}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default Structure;
