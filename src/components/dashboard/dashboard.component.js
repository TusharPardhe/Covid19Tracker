import React from "react";
import { Container} from "@mui/material";
import GeneralCards from "../general-cards/generalCards.component";
import TableComponent from "../table/table";

import "./dashboard.component.css";

const Dashboard = () => {    

    return (
        <div className="dashboard_container">
            <Container>
                    <GeneralCards/>
                    <TableComponent/>
            </Container>
        </div>
    );
};

export default Dashboard;
