import { useFormik } from "formik";
import Head from "next/head";
import * as Yup from "yup";
import { useState, useMemo, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import defaultColumnDef from "./../components/defaultColumnDef";
import { sideBar } from "./../components/Sidebar";
import { flatten } from "../utils/flatten";
import { data } from "./../utils/data";
const cellClassRules = {
  "hover-over": (params) => {
    return params.node === potentialParent;
  },
};
const potentialParent = null;
const moveToPath = (newParentPath, node, allUpdatedNodes) => {
  // last part of the file path is the file name
  const oldPath = node.data.hierarchy;
  const fileName = oldPath[oldPath.length - 1];
  const newChildPath = newParentPath.slice();
  newChildPath.push(fileName);
  node.data.hierarchy = newChildPath;
  allUpdatedNodes.push(node.data);
  if (node.childrenAfterGroup) {
    node.childrenAfterGroup.forEach(function (childNode) {
      moveToPath(newChildPath, childNode, allUpdatedNodes);
    });
  }
};
const isSelectionParentOfTarget = (selectedNode, targetNode) => {
  const children = selectedNode.childrenAfterGroup || [];
  for (let i = 0; i < children.length; i++) {
    if (targetNode && children[i].key === targetNode.key) return true;
    isSelectionParentOfTarget(children[i], targetNode);
  }
  return false;
};

const arePathsEqual = (path1, path2) => {
  if (path1.length !== path2.length) {
    return false;
  }
  const equal = true;
  path1.forEach(function (item, index) {
    if (path2[index] !== item) {
      equal = false;
    }
  });
  return equal;
};

const setPotentialParentForNode = (api, overNode) => {
  let newPotentialParent;
  if (overNode) {
    newPotentialParent =
      overNode.data.type === "folder"
        ? // if over a folder, we take the immediate row
          overNode
        : // if over a file, we take the parent row (which will be a folder)
          overNode.parent;
  } else {
    newPotentialParent = null;
  }
  const alreadySelected = potentialParent === newPotentialParent;
  if (alreadySelected) {
    return;
  }
  // we refresh the previous selection (if it exists) to clear
  // the highlighted and then the new selection.
  const rowsToRefresh = [];
  if (potentialParent) {
    rowsToRefresh.push(potentialParent);
  }
  if (newPotentialParent) {
    rowsToRefresh.push(newPotentialParent);
  }
  potentialParent = newPotentialParent;
  refreshRows(api, rowsToRefresh);
};

const refreshRows = (api, rowsToRefresh) => {
  const params = {
    // refresh these rows only.
    rowNodes: rowsToRefresh,
    // because the grid does change detection, the refresh
    // will not happen because the underlying value has not
    // changed. to get around this, we force the refresh,
    // which skips change detection.
    force: true,
  };
  api.refreshCells(params);
};

export default function Home() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState(() => data);
  const [tags, setTags] = useState([]);
  const [show, setShow] = useState(false);

  const submitButtonHandler = () => {
    setShowFolder(!showfolder);
    // const replace = {
    //   folderName: formik.values.folderName,
    //   datasetName: formik.values.datasetName,
    // };
    // const clone = structuredClone(rowData);
    // const newData = clone.map((data) => {
    //   data.description = formik.values.description;
    //   data.product = formik.values.product || "NA";
    //   data.baseDataLevel = formik.values.baseDataLevel || "NA";
    //   data.hierarchy = data.hierarchy.map((o) => {
    //     return replace[o];
    //   });
    //   return data;
    // });
    // setRowData(() => newData);
    // const newData = [
    //   {
    //     name: formik.values.folderName,
    //     description: formik.values.description || "NA",
    //     product: formik.values.product || "NA",
    //     baseDataLevel: formik.values.baseDataLevel || "NA",
    //     children: [
    //       {
    //         name: formik.values.datasetName,
    //         description: formik.values.description || "NA",
    //         product: formik.values.product || "NA",
    //         baseDataLevel: formik.values.baseDataLevel || "NA",
    //       },
    //     ],
    //   },
    // ];
    const newData = [
      { id: 100, hierarchy: [formik.values.folderName], type: "folder" },
      {
        id: 101,
        hierarchy: [formik.values.folderName, formik.values.datasetName],
        type: "file",
        dateModified: "May 21 2017 01:50:00 PM",
        size: 14.7,
      },
    ];

    setRowData((prev) => {
      return [...newData, ...prev];
    });
  };

  const formik = useFormik({
    initialValues: {
      dataSource: "Upload New Data",
      datasetName: "",
      folderName: "",
      description: "NA",
      uniqueResponse: {
        status: true,
        message: "Unique Dataset Name",
      },
      product: "NA",
      baseDataLevel: "NA",
      nameOfBaseDataLevel: "NA",
      datasetFile: null,
      datasetFileList: [],
      schema: [],
      updatedSchema: [],
      selectedFileIndex: -1,
      divide_cols_by_ref: {},
      datasetModule: "",
      no_of_unique_acc_ids: null,
      activeStep: 0,
    },
    validationSchema: Yup.lazy((values) =>
      Yup.object().shape({
        datasetName: Yup.string().test(
          "datasetName",
          "Dataset name is required",
          (name) => {
            if (values.dataSource === "Upload New Data" && !name) {
              return false;
            } else {
              return true;
            }
          }
        ),
        folderName: Yup.string().test(
          "folderName",
          "folderName name is required",
          (name) => {
            if (!name) {
              return false;
            } else {
              return true;
            }
          }
        ),
        //   datasetFileList: Yup.array().test(
        //     "datasetFileList",
        //     "Dataset is required",
        //     (dataset) => {
        //       if (values.dataSource === "Upload New Data" && !dataset.length) {
        //         return false;
        //       } else {
        //         return true;
        //       }
        //     }
        //   ),
      })
    ),
    onSubmit: submitButtonHandler,
  });

  const folderNameHandler = (e) => {
    formik.setFieldValue("folderName", e.target.value);
  };
  const datasetNameHandler = (e) => {
    formik.setFieldValue("datasetName", e.target.value);
  };

  // for aggrid ::
  const [showfolder, setShowFolder] = useState(false);
  const [gridApi, setGridApi] = useState(null);

  const [columnDefs, setColumnDefs] = useState([
    // we're using the auto group column by default!
    { field: "description", cellClassRules: cellClassRules },
    { field: "product", cellClassRules: cellClassRules },
    { field: "baseDataLevel", cellClassRules: cellClassRules },
  ]);
  const autoGroupColumnDef = {
    headerName: "Folder Name",
    rowDrag: true,
    cellRendererParams: {
      suppressCount: true,
    },
    cellClassRules: {
      "hover-over": (params) => {
        return params.node === potentialParent;
      },
    },
  };

  const onRowDragMove = useCallback((event) => {
    setPotentialParentForNode(event.api, event.overNode);
  }, []);

  const onRowDragLeave = useCallback((event) => {
    // clear node to highlight
    setPotentialParentForNode(event.api, null);
  }, []);

  const onRowDragEnd = useCallback(
    (event) => {
      if (!potentialParent) {
        return;
      }
      const movingData = event.node.data;
      // take new parent path from parent, if data is missing, means it's the root node,
      // which has no data.
      const newParentPath = potentialParent.data
        ? potentialParent.data.hierarchy
        : [];
      const needToChangeParent = !arePathsEqual(
        newParentPath,
        movingData.hierarchy
      );
      // check we are not moving a folder into a child folder
      const invalidMode = isSelectionParentOfTarget(
        event.node,
        potentialParent
      );
      if (invalidMode) {
        console.log("invalid move");
      }
      if (needToChangeParent && !invalidMode) {
        const updatedRows = [];
        moveToPath(newParentPath, event.node, updatedRows);
        gridRef.current.api.applyTransaction({
          update: updatedRows,
        });
        gridRef.current.api.clearFocusedCell();
      }
      // clear node to highlight
      setPotentialParentForNode(event.api, null);
    },
    [potentialParent]
  );
  const getDataPath = useMemo(() => {
    return (data) => {
      return data.hierarchy;
    };
  }, []);

  const treeData = true;
  const onGridReady = (params) => {
    setGridApi(params.api);
  };
  const onRowClicked = (params) => {
    console.log(params);
  };

  // for aggrid ::
  return (
    <div>
      <Head>
        <title>Folder Structure</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active "
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="card">
              <div className="card-body">
                <label htmlFor="" className="text-muted">
                  Source of Dataset {formik.values.dataSource}
                </label>
                <div className="row">
                  <div className="col-md-12">
                    <button
                      type="button"
                      className="btn btn-primary btn-large mr-1"
                      onClick={() => setShow(!show)}
                    >
                      Create folder structure
                    </button>
                  </div>
                </div>
                <div className="row">
                  {show && (
                    <div className="col-md-4">
                      <label htmlFor="" className="text-muted">
                        Folder Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className={
                          "form-control" +
                          ((formik.touched?.folderName &&
                            formik.errors?.folderName) ||
                          !formik.values.uniqueResponse?.status
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Folder Name"
                        type="text"
                        value={formik.values.folderName || ""}
                        onBlur={formik.handleBlur}
                        name="folderName"
                        onChange={folderNameHandler}
                      />
                      {formik.touched.folderName && formik.errors.folderName ? (
                        <span className="text-danger">
                          {formik.errors?.folderName}
                        </span>
                      ) : (
                        formik.touched.folderName &&
                        !formik.values.uniqueResponse?.status && (
                          <span className="text-danger">
                            {formik.values.uniqueResponse?.message}
                          </span>
                        )
                      )}
                    </div>
                  )}
                  <div className="col-md-4">
                    <label htmlFor="" className="text-muted">
                      Dataset Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className={
                        "form-control" +
                        ((formik.touched?.datasetName &&
                          formik.errors?.datasetName) ||
                        !formik.values.uniqueResponse?.status
                          ? " is-invalid"
                          : "")
                      }
                      placeholder="Dataset Name"
                      type="text"
                      value={formik.values.datasetName || ""}
                      onBlur={formik.handleBlur}
                      name="datasetName"
                      onChange={datasetNameHandler}
                    />
                    {formik.touched.datasetName && formik.errors.datasetName ? (
                      <span className="text-danger">
                        {formik.errors?.datasetName}
                      </span>
                    ) : (
                      formik.touched.datasetName &&
                      !formik.values.uniqueResponse?.status && (
                        <span className="text-danger">
                          {formik.values.uniqueResponse?.message}
                        </span>
                      )
                    )}
                  </div>
                  <div className={`${show ? "col-md-4" : "col-md-8"}`}>
                    <label htmlFor="" className="text-muted">
                      Description
                    </label>
                    <input
                      className="form-control"
                      placeholder="Description"
                      type="text"
                      name="description"
                      value={formik.values.description || ""}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="" className="text-muted">
                      Belong to Product(s)
                    </label>
                    <div className={"tags-input"}>
                      {/* <ul id="tags">
                        {tags.map((tag, index) => (
                          <li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                              className="tag-close-icon"
                              onClick={() => removeTags(index)}
                            >
                              x
                            </span>
                          </li>
                        ))}
                      </ul> */}
                      <input
                        className="form-control"
                        // className={
                        //   "form-control" +
                        //   ((formik.touched?.datasetName &&
                        //     formik.errors?.datasetName) ||
                        //   !formik.values.uniqueResponse?.status
                        //     ? " is-invalid"
                        //     : "")
                        // }
                        type="text"
                        onKeyUp={(event) =>
                          event.key === "Enter" ? addTags(event) : null
                        }
                        placeholder="Press enter to add products"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") e.preventDefault();
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="" className="text-muted">
                      Base Data Level
                    </label>
                    <select
                      className="form-select"
                      type="text"
                      // disabled={router.pathname.includes("enrich_data") ? true : false}
                      name="baseDataLevel"
                      value={formik.values.baseDataLevel || ""}
                      onChange={formik.handleChange}
                    >
                      <option>Personal Account</option>
                      <option>Business Account</option>
                      <option>Brick Level</option>
                      <option>Zip Code</option>
                      <option>Others</option>
                    </select>
                  </div>
                  {formik.values.dataSource === "Upload New Data" &&
                    formik.values.baseDataLevel === "Others" && (
                      <div className="col-md-4">
                        <label htmlFor="" className="text-muted">
                          Name of Base Data Level{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          placeholder="Name of Base Data Level"
                          type="text"
                          name="nameOfBaseDataLevel"
                          value={formik.values.nameOfBaseDataLevel || ""}
                          onChange={formik.handleChange}
                        />
                      </div>
                    )}
                </div>
                <div className="row save-button">
                  <div
                    className={
                      "col-md-12" // : "col-md-6"
                    }
                  >
                    <div className="pull-right">
                      <button
                        type="button"
                        className="btn btn-primary btn-medium mr-1"
                        onClick={formik.handleSubmit}
                      >
                        {"SAVE"}
                      </button>
                      <button
                        type="button"
                        disabled={!formik.values.uniqueResponse.status}
                        className="btn btn-secondary btn-medium"
                      >
                        CANCEL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {showfolder && ( */}
            <div className="card">
              <div className="card-body">
                <div style={{ width: "100%", height: "100%" }}>
                  <div style={{ height: 400 }} className="ag-theme-alpine">
                    <AgGridReact
                      ref={gridRef}
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
                      groupDefaultExpanded={-1}
                      pagination={true}
                      paginationPageSize={20}
                      onGridReady={onGridReady}
                      getDataPath={getDataPath}
                      autoGroupColumnDef={autoGroupColumnDef}
                      onRowClicked={onRowClicked}
                      onRowDragMove={onRowDragMove}
                      onRowDragLeave={onRowDragLeave}
                      onRowDragEnd={onRowDragEnd}
                      // onSelectionChanged={onSelectionChanged}
                      // onCellValueChanged={onCellValueChanged}
                      // onFirstDataRendered={firstDataRenderedHandler}
                      // onModelUpdated={rowCountHandler}
                      sideBar={sideBar}
                    ></AgGridReact>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
