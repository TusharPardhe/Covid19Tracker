import React, { useState, createContext, useEffect } from "react";
import { ERROR_MSGS } from "../constants/app.constants";
import { VACCINE_DATA_URL } from "../endpoints/url.endpoints";
export const AppContextData = createContext(undefined);

const AppContext = ({ children }) => {
    const [state, setState] = useState({
        "activeCases": {
            "cases": "84565",
            "change": "1850",
            "direction": "down"
        },
        "dischargedCases": {
            "cases": "34171471",
            "change": "8706",
            "direction": "up"
        },
        "deathCases": {
            "cases": "477158",
            "change": "289",
            "direction": "up"
        },
        "vaccinationDetails": {
            "total": "1366605173",
            "change": "6206244",
            "direction": "up"
        },
        "statesData": [
            {
                "sno": "2",
                "state_name": "Andaman and Nicobar Islands",
                "active": "3",
                "positive": "7700",
                "cured": "7568",
                "death": "129",
                "new_active": "2",
                "new_positive": "7700",
                "new_cured": "7569",
                "new_death": "129",
                "state_code": "35"
            },
            {
                "sno": "1",
                "state_name": "Andhra Pradesh",
                "active": "1814",
                "positive": "2075419",
                "cured": "2059131",
                "death": "14474",
                "new_active": "1758",
                "new_positive": "2075546",
                "new_cured": "2059311",
                "new_death": "14477",
                "state_code": "28"
            },
            {
                "sno": "3",
                "state_name": "Arunachal Pradesh",
                "active": "33",
                "positive": "55320",
                "cured": "55007",
                "death": "280",
                "new_active": "30",
                "new_positive": "55320",
                "new_cured": "55010",
                "new_death": "280",
                "state_code": "12"
            },
            {
                "sno": "4",
                "state_name": "Assam",
                "active": "2446",
                "positive": "619168",
                "cured": "610581",
                "death": "6141",
                "new_active": "2441",
                "new_positive": "619298",
                "new_cured": "610716",
                "new_death": "6141",
                "state_code": "18"
            },
            {
                "sno": "5",
                "state_name": "Bihar",
                "active": "84",
                "positive": "726351",
                "cured": "714174",
                "death": "12093",
                "new_active": "82",
                "new_positive": "726359",
                "new_cured": "714184",
                "new_death": "12093",
                "state_code": "10"
            },
            {
                "sno": "6",
                "state_name": "Chandigarh",
                "active": "77",
                "positive": "65673",
                "cured": "64520",
                "death": "1076",
                "new_active": "74",
                "new_positive": "65678",
                "new_cured": "64528",
                "new_death": "1076",
                "state_code": "04"
            },
            {
                "sno": "7",
                "state_name": "Chhattisgarh",
                "active": "359",
                "positive": "1007327",
                "cured": "993373",
                "death": "13595",
                "new_active": "339",
                "new_positive": "1007347",
                "new_cured": "993413",
                "new_death": "13595",
                "state_code": "22"
            },
            {
                "sno": "8",
                "state_name": "Dadra and Nagar Haveli and Daman and Diu",
                "active": "5",
                "positive": "10688",
                "cured": "10679",
                "death": "4",
                "new_active": "7",
                "new_positive": "10690",
                "new_cured": "10679",
                "new_death": "4",
                "state_code": "26"
            },
            {
                "sno": "10",
                "state_name": "Delhi",
                "active": "475",
                "positive": "1441935",
                "cured": "1416360",
                "death": "25100",
                "new_active": "466",
                "new_positive": "1442004",
                "new_cured": "1416438",
                "new_death": "25100",
                "state_code": "07"
            },
            {
                "sno": "11",
                "state_name": "Goa",
                "active": "392",
                "positive": "179601",
                "cured": "175724",
                "death": "3485",
                "new_active": "409",
                "new_positive": "179651",
                "new_cured": "175757",
                "new_death": "3485",
                "state_code": "30"
            },
            {
                "sno": "12",
                "state_name": "Gujarat",
                "active": "580",
                "positive": "828367",
                "cured": "817687",
                "death": "10100",
                "new_active": "581",
                "new_positive": "828427",
                "new_cured": "817745",
                "new_death": "10101",
                "state_code": "24"
            },
            {
                "sno": "13",
                "state_name": "Haryana",
                "active": "234",
                "positive": "772114",
                "cured": "761820",
                "death": "10060",
                "new_active": "230",
                "new_positive": "772141",
                "new_cured": "761850",
                "new_death": "10061",
                "state_code": "06"
            },
            {
                "sno": "14",
                "state_name": "Himachal Pradesh",
                "active": "526",
                "positive": "228170",
                "cured": "223779",
                "death": "3865",
                "new_active": "536",
                "new_positive": "228227",
                "new_cured": "223826",
                "new_death": "3865",
                "state_code": "02"
            },
            {
                "sno": "15",
                "state_name": "Jammu and Kashmir",
                "active": "1435",
                "positive": "339404",
                "cured": "333461",
                "death": "4508",
                "new_active": "1448",
                "new_positive": "339540",
                "new_cured": "333582",
                "new_death": "4510",
                "state_code": "01"
            },
            {
                "sno": "16",
                "state_name": "Jharkhand",
                "active": "132",
                "positive": "349485",
                "cured": "344211",
                "death": "5142",
                "new_active": "136",
                "new_positive": "349504",
                "new_cured": "344226",
                "new_death": "5142",
                "state_code": "20"
            },
            {
                "sno": "17",
                "state_name": "Karnataka",
                "active": "7187",
                "positive": "3001554",
                "cured": "2956088",
                "death": "38279",
                "new_active": "7105",
                "new_positive": "3001792",
                "new_cured": "2956405",
                "new_death": "38282",
                "state_code": "29"
            },
            {
                "sno": "18",
                "state_name": "Kerala***",
                "active": "34836",
                "positive": "5207826",
                "cured": "5129044",
                "death": "43946",
                "new_active": "33098",
                "new_positive": "5211297",
                "new_cured": "5134010",
                "new_death": "44189",
                "state_code": "32"
            },
            {
                "sno": "19",
                "state_name": "Ladakh",
                "active": "167",
                "positive": "21886",
                "cured": "21503",
                "death": "216",
                "new_active": "173",
                "new_positive": "21903",
                "new_cured": "21513",
                "new_death": "217",
                "state_code": "37"
            },
            {
                "sno": "20",
                "state_name": "Lakshadweep",
                "active": "4",
                "positive": "10408",
                "cured": "10353",
                "death": "51",
                "new_active": "2",
                "new_positive": "10408",
                "new_cured": "10355",
                "new_death": "51",
                "state_code": "31"
            },
            {
                "sno": "21",
                "state_name": "Madhya Pradesh",
                "active": "171",
                "positive": "793433",
                "cured": "782733",
                "death": "10529",
                "new_active": "176",
                "new_positive": "793454",
                "new_cured": "782749",
                "new_death": "10529",
                "state_code": "23"
            },
            {
                "sno": "22",
                "state_name": "Maharashtra",
                "active": "10372",
                "positive": "6646938",
                "cured": "6495249",
                "death": "141317",
                "new_active": "10582",
                "new_positive": "6647840",
                "new_cured": "6495929",
                "new_death": "141329",
                "state_code": "27"
            },
            {
                "sno": "23",
                "state_name": "Manipur",
                "active": "314",
                "positive": "125586",
                "cured": "123279",
                "death": "1993",
                "new_active": "198",
                "new_positive": "125597",
                "new_cured": "123406",
                "new_death": "1993",
                "state_code": "14"
            },
            {
                "sno": "24",
                "state_name": "Meghalaya",
                "active": "140",
                "positive": "84726",
                "cured": "83108",
                "death": "1478",
                "new_active": "126",
                "new_positive": "84738",
                "new_cured": "83134",
                "new_death": "1478",
                "state_code": "17"
            },
            {
                "sno": "25",
                "state_name": "Mizoram",
                "active": "2530",
                "positive": "139227",
                "cured": "136167",
                "death": "530",
                "new_active": "2640",
                "new_positive": "139338",
                "new_cured": "136167",
                "new_death": "531",
                "state_code": "15"
            },
            {
                "sno": "26",
                "state_name": "Nagaland",
                "active": "85",
                "positive": "32164",
                "cured": "31378",
                "death": "701",
                "new_active": "83",
                "new_positive": "32165",
                "new_cured": "31381",
                "new_death": "701",
                "state_code": "13"
            },
            {
                "sno": "27",
                "state_name": "Odisha",
                "active": "1876",
                "positive": "1052318",
                "cured": "1042002",
                "death": "8440",
                "new_active": "1807",
                "new_positive": "1052472",
                "new_cured": "1042224",
                "new_death": "8441",
                "state_code": "21"
            },
            {
                "sno": "28",
                "state_name": "Puducherry",
                "active": "186",
                "positive": "129285",
                "cured": "127220",
                "death": "1879",
                "new_active": "177",
                "new_positive": "129292",
                "new_cured": "127236",
                "new_death": "1879",
                "state_code": "34"
            },
            {
                "sno": "29",
                "state_name": "Punjab",
                "active": "333",
                "positive": "603853",
                "cured": "586895",
                "death": "16625",
                "new_active": "325",
                "new_positive": "603892",
                "new_cured": "586941",
                "new_death": "16626",
                "state_code": "03"
            },
            {
                "sno": "30",
                "state_name": "Rajasthan",
                "active": "267",
                "positive": "955173",
                "cured": "945947",
                "death": "8959",
                "new_active": "259",
                "new_positive": "955189",
                "new_cured": "945970",
                "new_death": "8960",
                "state_code": "08"
            },
            {
                "sno": "31",
                "state_name": "Sikkim",
                "active": "179",
                "positive": "32449",
                "cured": "31864",
                "death": "406",
                "new_active": "177",
                "new_positive": "32452",
                "new_cured": "31869",
                "new_death": "406",
                "state_code": "11"
            },
            {
                "sno": "32",
                "state_name": "Tamil Nadu",
                "active": "7476",
                "positive": "2737962",
                "cured": "2693830",
                "death": "36656",
                "new_active": "7407",
                "new_positive": "2738583",
                "new_cured": "2694509",
                "new_death": "36667",
                "state_code": "33"
            },
            {
                "sno": "34",
                "state_name": "Telangana",
                "active": "3805",
                "positive": "679064",
                "cured": "671247",
                "death": "4012",
                "new_active": "3782",
                "new_positive": "679245",
                "new_cured": "671450",
                "new_death": "4013",
                "state_code": "36"
            },
            {
                "sno": "33",
                "state_name": "Tripura",
                "active": "76",
                "positive": "84950",
                "cured": "84047",
                "death": "827",
                "new_active": "77",
                "new_positive": "84958",
                "new_cured": "84054",
                "new_death": "827",
                "state_code": "16"
            },
            {
                "sno": "35",
                "state_name": "Uttarakhand",
                "active": "153",
                "positive": "344533",
                "cured": "336967",
                "death": "7413",
                "new_active": "155",
                "new_positive": "344553",
                "new_cured": "336985",
                "new_death": "7413",
                "state_code": "05"
            },
            {
                "sno": "36",
                "state_name": "Uttar Pradesh",
                "active": "157",
                "positive": "1710617",
                "cured": "1687545",
                "death": "22915",
                "new_active": "164",
                "new_positive": "1710639",
                "new_cured": "1687560",
                "new_death": "22915",
                "state_code": "09"
            },
            {
                "sno": "37",
                "state_name": "West Bengal",
                "active": "7506",
                "positive": "1625375",
                "cured": "1598224",
                "death": "19645",
                "new_active": "7513",
                "new_positive": "1625955",
                "new_cured": "1598790",
                "new_death": "19652",
                "state_code": "19"
            },
            {
                "sno": "11111",
                "state_name": "Total",
                "active": "86415",
                "positive": "34726049",
                "cured": "34162765",
                "death": "476869",
                "new_active": "84565",
                "new_positive": "34733194",
                "new_cured": "34171471",
                "new_death": "477158",
                "state_code": ""
            }
        ]
    });

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = () => {
    //     fetch(VACCINE_DATA_URL)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             if (data) setState(data);
    //         })
    //         .catch((err) => console.log(ERROR_MSGS.API_ERROR));
    // };

    return <AppContextData.Provider value={{ state, setState }}>{children}</AppContextData.Provider>;
};

export default AppContext;
