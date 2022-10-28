export const data = [
  { id: 1, hierarchy: ["Documents"], type: "folder" },
  { id: 2, hierarchy: ["Documents", "txt"], type: "folder" },
  {
    id: 3,
    hierarchy: ["Documents", "txt", "notes.txt"],
    type: "file",
    dateModified: "May 21 2017 01:50:00 PM",
    size: 14.7,
  },
  { id: 4, hierarchy: ["Documents", "pdf"], type: "folder" },
  {
    id: 5,
    hierarchy: ["Documents", "pdf", "book.pdf"],
    type: "file",
    dateModified: "May 20 2017 01:50:00 PM",
    size: 2.1,
  },
  {
    id: 6,
    hierarchy: ["Documents", "pdf", "cv.pdf"],
    type: "file",
    dateModified: "May 20 2016 11:50:00 PM",
    size: 2.4,
  },
  { id: 11, hierarchy: ["Music"], type: "folder" },
  { id: 12, hierarchy: ["Music", "mp3"], type: "folder" },
  {
    id: 13,
    hierarchy: ["Music", "mp3", "theme.mp3"],
    type: "file",
    dateModified: "Sep 11 2016 08:03:00 PM",
    size: 14.3,
  },
  { id: 14, hierarchy: ["Misc"], type: "folder" },
  {
    id: 15,
    hierarchy: ["Misc", "temp.txt"],
    type: "file",
    dateModified: "Aug 12 2016 10:50:00 PM",
    size: 101,
  },
  {
    id: 16,
    hierarchy: ["main.txt"],
    type: "file",
    dateModified: "Aug 12 2016 10:50:00 PM",
    size: 101,
  },
];

export const newData = [
  {
    "id": 113131312123213,
    "hierarchy": ["Documents"]
  },
  {
    "id": 11313133,
    "hierarchy": ["Documents", "main"]
  },
  {
    "id": 122213,
    "hierarchy": ["folder 1"]
  },
  {
    "id": 1032,
    "name": "fcs",
    "description": "NA",
    "type_of_data": "RD",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-30T04:39:57.564164Z",
    "updated_at": "2022-09-30T04:39:58.747436Z",
    "file_path": "3/0/data/_new_data_2022_09_30__04:39:57.parquet",
    "hierarchy": [
      "Documents", "fcs",
    ]
  },
  {
    "id": 1032,
    "name": "new Data",
    "description": "NA",
    "type_of_data": "RD",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-30T04:39:57.564164Z",
    "updated_at": "2022-09-30T04:39:58.747436Z",
    "schema": {
      "fields": [
        {
          "name": "passengerid",
          "type": "integer",
          "alias": "ZIPCODE",
          "description": "",
          "display_name": "PassengerId",
          "feature_type": "Numerical",
          "alias_criteria": "12"
        },
        {
          "name": "pclass",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "Pclass",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "sex",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Sex",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "age",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Age",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "fare",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Fare",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "cabin",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Cabin",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "dt_b_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT1",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "dt_c_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT2",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "d_b_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D1",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "d_c_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D2",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "t_b_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T1",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "t_c_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T2",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "a",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "new_col",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new col",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "nn",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "nn",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "adult",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "adult",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "new_coll",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new coll",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "test",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "test",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "test_col__e_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "test col 4",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__d_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 3",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__e_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 4",
          "feature_type": "Categorical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/_new_data_2022_09_30__04:39:57.parquet",
    "hierarchy": [
      "Documents", "main", "new Data",
    ]
  },
  {
    "id": 1000,
    "name": "DATA1",
    "description": "",
    "type_of_data": "TD",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-22T15:42:36.744783Z",
    "updated_at": "2022-09-22T15:42:36.744803Z",
    "schema": {
      "fields": [
        {
          "name": "a",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__f_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 5",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "passengerid",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "sum passengerid",
          "feature_type": "Numerical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/data1_2022_09_22__15:42:36.parquet",
    "hierarchy": [
      "folder 1", "DATA1"
    ]
  },
  {
    "id": 929,
    "name": "test 5 alias",
    "description": "NA",
    "type_of_data": "ED",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-08-26T06:39:50.836157Z",
    "updated_at": "2022-09-16T12:02:20.546107Z",
    "schema": {
      "fields": [
        {
          "name": "passengerid",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "PassengerId",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "pclass",
          "type": "integer",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Pclass",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "sex",
          "type": "string",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Sex",
          "feature_type": "Categorical",
          "alias_criteria": "2020"
        },
        {
          "name": "age",
          "type": "number",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Age",
          "feature_type": "Numerical",
          "alias_criteria": "2021"
        },
        {
          "name": "fare",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Fare",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "cabin",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Cabin",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "dt_b_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT1",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "dt_c_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT2",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "d_b_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D1",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "d_c_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D2",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "t_b_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T1",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "t_c_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T2",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "a",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "new_col",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new col",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "nn",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "nn",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "adult",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "adult",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "new_coll",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new coll",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "test",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "test",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "test_col__e_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "test col 4",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__d_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 3",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__e_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 4",
          "feature_type": "Categorical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/test_5_alias_2022_08_26__06:39:50.parquet",
    "hierarchy": [
      "test 5 alias"
    ]
  },
  {
    "id": 951,
    "name": "new data 1",
    "description": "NA",
    "type_of_data": "ED",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-13T11:27:07.700336Z",
    "updated_at": "2022-09-13T11:27:07.700362Z",
    "schema": {
      "fields": [
        {
          "name": "passengerid",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "PassengerId",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "pclass",
          "type": "integer",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Pclass",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "sex",
          "type": "string",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Sex",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "age",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Age",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "fare",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Fare",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "cabin",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Cabin",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "dt_b_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT1",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "dt_c_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT2",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "d_b_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D1",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "d_c_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D2",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "t_b_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T1",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "t_c_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T2",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "a",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__f_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 5",
          "feature_type": "Categorical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/new_data_1_2022_09_13__11:27:06.parquet",
    "hierarchy": [
      "new data 1"
    ]
  },
  {
    "id": 950,
    "name": "new data",
    "description": "NA",
    "type_of_data": "ED",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-13T11:26:21.069847Z",
    "updated_at": "2022-09-13T11:26:21.069876Z",
    "schema": {
      "fields": [
        {
          "name": "passengerid",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "PassengerId",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "pclass",
          "type": "integer",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Pclass",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "sex",
          "type": "string",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Sex",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "age",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Age",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "fare",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Fare",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "cabin",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Cabin",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "dt_b_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT1",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "dt_c_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT2",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "d_b_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D1",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "d_c_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D2",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "t_b_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T1",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "t_c_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T2",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "a",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__f_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 5",
          "feature_type": "Categorical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/new_data_2022_09_13__11:26:19.parquet",
    "hierarchy": [
      "new data"
    ]
  },
  {
    "id": 949,
    "name": "DAT1",
    "description": "NA",
    "type_of_data": "ED",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-13T11:22:05.405376Z",
    "updated_at": "2022-09-13T11:22:05.405399Z",
    "schema": {
      "fields": [
        {
          "name": "passengerid",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "PassengerId",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "pclass",
          "type": "integer",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Pclass",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "sex",
          "type": "string",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Sex",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "age",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Age",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "fare",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Fare",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "cabin",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Cabin",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "dt_b_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT1",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "dt_c_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT2",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "d_b_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D1",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "d_c_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D2",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "t_b_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T1",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "t_c_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T2",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "a",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__f_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 5",
          "feature_type": "Categorical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/dat1_2022_09_13__11:22:04.parquet",
    "hierarchy": [
      "DAT1"
    ]
  },
  {
    "id": 948,
    "name": "DAT",
    "description": "NA",
    "type_of_data": "ED",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-13T11:07:17.018300Z",
    "updated_at": "2022-09-13T11:07:17.018379Z",
    "schema": {
      "fields": [
        {
          "name": "passengerid",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "PassengerId",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "pclass",
          "type": "integer",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Pclass",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "sex",
          "type": "string",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Sex",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "age",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Age",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "fare",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Fare",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "cabin",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Cabin",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "dt_b_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT1",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "dt_c_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT2",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "d_b_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D1",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "d_c_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D2",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "t_b_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T1",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "t_c_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T2",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "a",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__f_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 5",
          "feature_type": "Categorical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/dat_2022_09_13__11:07:15.parquet",
    "hierarchy": [
      "DAT"
    ]
  },
  {
    "id": 947,
    "name": "DATA",
    "description": "NA",
    "type_of_data": "ED",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-13T11:06:54.453010Z",
    "updated_at": "2022-09-13T11:06:54.453032Z",
    "schema": {
      "fields": [
        {
          "name": "passengerid",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "PassengerId",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "pclass",
          "type": "integer",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Pclass",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "sex",
          "type": "string",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Sex",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "age",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Age",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "fare",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Fare",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "cabin",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Cabin",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "dt_b_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT1",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "dt_c_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT2",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "d_b_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D1",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "d_c_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D2",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "t_b_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T1",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "t_c_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T2",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "a",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__f_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 5",
          "feature_type": "Categorical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/data_2022_09_13__11:06:53.parquet",
    "hierarchy": [
      "DATA"
    ]
  },
  {
    "id": 940,
    "name": "add new",
    "description": "NA",
    "type_of_data": "RD",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-08T11:19:18.395702Z",
    "updated_at": "2022-09-08T11:19:18.395721Z",
    "schema": {
      "fields": [
        {
          "name": "a",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Categorical"
        },
        {
          "name": "b",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "B",
          "feature_type": "Numerical"
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/add_new_2022_09_08__11:19:18.parquet",
    "hierarchy": [
      "add new"
    ]
  },
  {
    "id": 939,
    "name": "pd",
    "description": "NA",
    "type_of_data": "RD",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-08T11:19:17.952093Z",
    "updated_at": "2022-09-08T11:19:17.952110Z",
    "schema": {
      "fields": [
        {
          "name": "unnamed_colon___b_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Unnamed: 1",
          "feature_type": "Categorical"
        },
        {
          "name": "unnamed_colon___c_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Unnamed: 2",
          "feature_type": "Categorical"
        },
        {
          "name": "unnamed_colon___d_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Unnamed: 3",
          "feature_type": "Categorical"
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/pd_2022_09_08__11:19:17.parquet",
    "hierarchy": [
      "pd"
    ]
  },
  {
    "id": 938,
    "name": "add new",
    "description": "NA",
    "type_of_data": "RD",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-08T11:19:14.079200Z",
    "updated_at": "2022-09-08T11:19:14.079219Z",
    "schema": {
      "fields": [
        {
          "name": "a",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Categorical"
        },
        {
          "name": "b",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "B",
          "feature_type": "Numerical"
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/add_new_2022_09_08__11:19:13.parquet",
    "hierarchy": [
      "add new"
    ]
  },
  {
    "id": 937,
    "name": "pd",
    "description": "NA",
    "type_of_data": "RD",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-08T11:19:13.636626Z",
    "updated_at": "2022-09-08T11:19:13.636806Z",
    "schema": {
      "fields": [
        {
          "name": "unnamed_colon___b_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Unnamed: 1",
          "feature_type": "Categorical"
        },
        {
          "name": "unnamed_colon___c_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Unnamed: 2",
          "feature_type": "Categorical"
        },
        {
          "name": "unnamed_colon___d_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Unnamed: 3",
          "feature_type": "Categorical"
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/pd_2022_09_08__11:19:13.parquet",
    "hierarchy": [
      "pd"
    ]
  },
  {
    "id": 934,
    "name": "tehcdc",
    "description": "NA",
    "type_of_data": "RD",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-05T15:53:41.812585Z",
    "updated_at": "2022-09-05T15:53:41.812614Z",
    "schema": {
      "fields": [
        {
          "name": "pitcher__pitcher_presentation__c",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__c",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_ownerid",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.OwnerId",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_owner_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Owner.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_visit_type__c",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Visit_Type__c",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_start_time__c",
          "type": "datetime",
          "alias": null,
          "dt_format": "%Y-%m-%dT%H:%M:%S.%fZ",
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Start_Time__c",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_end_time__c",
          "type": "datetime",
          "alias": null,
          "dt_format": "%Y-%m-%dT%H:%M:%S.%fZ",
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.End_Time__c",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_priority_product__b__result__r_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Priority_Product_1_Result__r.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_priority_product__c__result__r_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Priority_Product_2_Result__r.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_priority_product__d__result__r_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Priority_Product_3_Result__r.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_priority_product__e__result__r_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Priority_Product_4_Result__r.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_lastname",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.LastName",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_firstname",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.FirstName",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_primary_speciality__c",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.Primary_Speciality__c",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_external_id__c",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.External_ID__c",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_account_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.Account.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_account_dot_billingstate",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.Account.BillingState",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_account_dot_billingpostalcode",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.Account.BillingPostalCode",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__c",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__c",
          "feature_type": "Categorical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/tehcdc_2022_09_05__15:53:03.parquet",
    "hierarchy": [
      "tehcdc"
    ]
  },
  {
    "id": 928,
    "name": "test alias 4",
    "description": "NA",
    "type_of_data": "ED",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-08-26T06:35:27.514417Z",
    "updated_at": "2022-09-05T05:00:29.127298Z",
    "schema": {
      "fields": [
        {
          "name": "passengerid",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "PassengerId",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "pclass",
          "type": "integer",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Pclass",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "sex",
          "type": "string",
          "alias": "webinars_preference",
          "description": "",
          "display_name": "Sex",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "age",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Age",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "fare",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Fare",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "cabin",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Cabin",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "dt_b_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT1",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "dt_c_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT2",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "d_b_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D1",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "d_c_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D2",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "t_b_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T1",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "t_c_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T2",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "a",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__f_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 5",
          "feature_type": "Categorical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/test_alias_4_2022_08_26__06:35:27.parquet",
    "hierarchy": [
      "test alias 4"
    ]
  },
  {
    "id": 933,
    "name": "testbvnh",
    "description": "NA",
    "type_of_data": "RD",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-09-02T14:50:22.391035Z",
    "updated_at": "2022-09-02T14:50:22.391057Z",
    "schema": {
      "fields": [
        {
          "name": "pitcher__pitcher_presentation__c",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__c",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_ownerid",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.OwnerId",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_owner_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Owner.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_visit_type__c",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Visit_Type__c",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_start_time__c",
          "type": "datetime",
          "alias": null,
          "dt_format": "%Y-%m-%dT%H:%M:%S.%fZ",
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Start_Time__c",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_end_time__c",
          "type": "datetime",
          "alias": null,
          "dt_format": "%Y-%m-%dT%H:%M:%S.%fZ",
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.End_Time__c",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_priority_product__b__result__r_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Priority_Product_1_Result__r.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_priority_product__c__result__r_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Priority_Product_2_Result__r.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_priority_product__d__result__r_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Priority_Product_3_Result__r.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__pitcher_presentation__r_dot_priority_product__e__result__r_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Pitcher_Presentation__r.Priority_Product_4_Result__r.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_lastname",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.LastName",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_firstname",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.FirstName",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_primary_speciality__c",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.Primary_Speciality__c",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_external_id__c",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.External_ID__c",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_account_dot_name",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.Account.Name",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_account_dot_billingstate",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.Account.BillingState",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__r_dot_account_dot_billingpostalcode",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__r.Account.BillingPostalCode",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "pitcher__contact__c",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "PITCHER__Contact__c",
          "feature_type": "Categorical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/testbvnh_2022_09_02__14:49:36.parquet",
    "hierarchy": [
      "testbvnh"
    ]
  },
  {
    "id": 925,
    "name": "test 23",
    "description": "NA",
    "type_of_data": "ED",
    "created_by__user__username": "nitu.sharma@zeza.tech",
    "created_at": "2022-08-26T06:19:06.636319Z",
    "updated_at": "2022-09-02T10:39:38.697452Z",
    "schema": {
      "fields": [
        {
          "name": "passengerid",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "PassengerId",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "pclass",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "Pclass",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "sex",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Sex",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "age",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Age",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "fare",
          "type": "number",
          "alias": null,
          "description": "",
          "display_name": "Fare",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "cabin",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "Cabin",
          "feature_type": "Categorical",
          "alias_criteria": null
        },
        {
          "name": "dt_b_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT1",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "dt_c_",
          "type": "datetime",
          "alias": null,
          "dt_format": "%d/%m/%Y %H:%M",
          "description": "",
          "display_name": "DT2",
          "feature_type": "datetime",
          "alias_criteria": null
        },
        {
          "name": "d_b_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D1",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "d_c_",
          "type": "date",
          "alias": null,
          "dt_format": "%d/%m/%Y",
          "description": "",
          "display_name": "D2",
          "feature_type": "date",
          "alias_criteria": null
        },
        {
          "name": "t_b_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T1",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "t_c_",
          "type": "time",
          "alias": null,
          "dt_format": "%H:%M",
          "description": "",
          "display_name": "T2",
          "feature_type": "time",
          "alias_criteria": null
        },
        {
          "name": "a",
          "type": "integer",
          "alias": null,
          "description": "",
          "display_name": "A",
          "feature_type": "Numerical",
          "alias_criteria": null
        },
        {
          "name": "new_test_col__f_",
          "type": "string",
          "alias": null,
          "description": "",
          "display_name": "new test col 5",
          "feature_type": "Categorical",
          "alias_criteria": null
        }
      ],
      "no_of_unique_acc_ids": null
    },
    "file_path": "3/0/data/test_23_2022_08_26__06:19:06.parquet",
    "hierarchy": [
      "test 23"
    ]
  },

];

export const mappedData = newData.map((item) => {
  return {
    ...item,
    type: item.hierarchy[item.hierarchy.length - 1] === item.name ? 'file' : 'folder',
    // hierarchy: item.hierarchy[item.hierarchy.length - 1] === item.name ? item.hierarchy : item.hierarchy.slice(-1)
  };
});

