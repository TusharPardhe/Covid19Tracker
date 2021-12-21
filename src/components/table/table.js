import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { STATE_WISE_DETAILS_TABLE_HEADERS, PAGINATION_TABLE_ROWS, ROUTES } from "../../constants/app.constants";
import { Button, TablePagination, TextField } from "@mui/material";
import { AppContextData } from "../../context/app.context";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SearchIcon from "@mui/icons-material/Search";

import "./table.css";
import { isMobile } from "react-device-detect";

const getTableHeadStyle = {
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
};

const TableComponent = () => {
    const { state } = useContext(AppContextData);
    const [stateWiseData, setStateWiseData] = useState([]);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchValue, setSearchValue] = useState("");
    const currentPage = page * rowsPerPage;

    useEffect(() => {
        if (state?.statesData) setStateWiseData(state.statesData.filter(({ state_name }) => state_name.toLowerCase() !== "total"));
    }, [state.statesData]);

    const filterStateDataOnSearch = () =>{
        if(searchValue && stateWiseData){
            setStateWiseData(stateWiseData.filter(({state_name})=> state_name.toLowerCase().includes(searchValue.toLowerCase())));
        }
    };

    const resetData = () =>{
        setSearchValue("");
        setPage(0);
        setStateWiseData(state.statesData.filter(({ state_name }) => state_name.toLowerCase() !== "total"));
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const redirectToGraph = (data) => {
        navigate(ROUTES.GRAPHS, { state: data });
    };

    const getUpdatedDifference = (current, updated) => {
        const difference = current - updated;
        if (difference === 0) return null;

        if (difference > 0)
            return (
                <span className="table_row_difference">
                    ({parseInt(difference).toLocaleString()}
                    <span className="table_row_arrow">
                        <ArrowDownwardIcon color="error" fontSize="15px" />
                    </span>
                    )
                </span>
            );

        return (
            <span className="table_row_difference">
                ({parseInt(-1 * difference).toLocaleString()}
                <span className="table_row_arrow">
                    <ArrowUpwardIcon color="success" fontSize="15px" />
                </span>
                )
            </span>
        );
    };

    return (
        <div>
            <TableContainer component={Paper} className="table_container" style={{ marginBottom: isMobile?"140px":""}}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={6} style={{ fontSize: "24px" }}>
                                Statewise Data
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left" colSpan={6}>
                                <div className="search">
                                    <TextField label="Enter State Name" id="fullWidth" size="small" value={searchValue} onChange={handleSearchChange} />
                                    <span className="icons">
                                        <Button onClick={()=>filterStateDataOnSearch()}>
                                            <SearchIcon  alt="search"/>
                                        </Button>
                                    </span>
                                    {((stateWiseData?.length === 0)|| searchValue) && (
                                        <span className="icons">
                                            <Button onClick={()=>resetData()}>Clear</Button>
                                        </span>
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {STATE_WISE_DETAILS_TABLE_HEADERS.map((header, index) => (
                                <TableCell key={index} style={getTableHeadStyle} align={`${index !== 0 ? "center" : "center"}`}>
                                    {header}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stateWiseData &&
                            stateWiseData
                                .slice(currentPage, currentPage + rowsPerPage)
                                .map((state) => (
                                    <TableRow key={state.sno} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <TableCell align="center">{state.state_name}</TableCell>
                                        <TableCell align="center">
                                            {parseInt(state.new_positive).toLocaleString()} {getUpdatedDifference(state.new_positive, state.positive)}
                                        </TableCell>
                                        <TableCell align="center">
                                            {parseInt(state.new_active).toLocaleString()} {getUpdatedDifference(state.new_active, state.active)}
                                        </TableCell>
                                        <TableCell align="center">
                                            {parseInt(state.new_cured).toLocaleString()} {getUpdatedDifference(state.new_cured, state.cured)}
                                        </TableCell>
                                        <TableCell align="center">
                                            {parseInt(state.new_death).toLocaleString()} {getUpdatedDifference(state.new_death, state.death)}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button onClick={() => redirectToGraph(state)}>Visualise</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                    </TableBody>
                </Table>
                {stateWiseData && (
                    <TablePagination
                        rowsPerPageOptions={PAGINATION_TABLE_ROWS}
                        component="div"
                        count={stateWiseData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                )}
            </TableContainer>
        </div>
    );
};

export default TableComponent;
