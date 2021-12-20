import React, { useContext, useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Button, Container } from "@mui/material";
import { isMobile } from "react-device-detect";

import { GRAPH_BACKGROUND_COLORS, GRAPH_BORDER_COLORS, GRAPH_LABELS, GRAPH_NOTE, ROUTES } from "../../constants/app.constants";
import { useLocation, useNavigate } from "react-router";
import { AppContextData } from "../../context/app.context";
import "./graph.component.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const GraphComponent = () => {
    const { state } = useLocation();
    const {
        state: { statesData },
    } = useContext(AppContextData);
    const navigate = useNavigate(); 
    const myRef = useRef(null);

    useEffect(() => {
        if (!state || !statesData) gobackToDashBoard();
    }, []);

    useEffect(() => {
        if (myRef && myRef.current) scrollToRef(myRef);
    }, []);

    const gobackToDashBoard = () =>navigate(ROUTES.DASHBOARD);

    const scrollToRef = (ref, options = { behavior: 'smooth', block: 'start' }) => ref.current.scrollIntoView(options);

    const dataMaker = ({ new_active, new_positive, new_cured, new_death }) => {
        return {
            labels: GRAPH_LABELS,
            datasets: [
                {
                    label: "Cases",
                    data: [new_active, new_positive, new_cured, new_death],
                    backgroundColor: GRAPH_BACKGROUND_COLORS,
                    borderColor: GRAPH_BORDER_COLORS,
                    borderWidth: 1,
                },
            ],
        };
    };
    const { state_name, new_active, new_positive, new_cured, new_death } = state;

    return (
        <div className="graph_container" ref={myRef} style={{ margin: `${isMobile ? "0 20px" : "0 120px"}` }}>
            <Button onClick={()=>gobackToDashBoard()} color="secondary" variant="outlined">Go Back</Button>
            <Container className="graph_inner_container">
                <h4 className="heading">{state_name}</h4>
                <div className="donut">
                    <Donut data={dataMaker({ state_name, new_active, new_positive, new_cured, new_death })} />
                </div>
                <h5 className="note">{GRAPH_NOTE}</h5>
            </Container>
            {statesData && (
                <Container className="graph_inner_container" style={{ marginBottom: isMobile ? "140px" : "" }}>
                    <h4 className="heading">{statesData[statesData.length - 1].state_name} Cases</h4>
                    <div className="donut">
                        <Donut data={dataMaker(statesData[statesData.length - 1])} />
                    </div>
                    <h5 className="note">{GRAPH_NOTE}</h5>
                </Container>
            )}
        </div>
    );
};

export default GraphComponent;

function Donut({ data }) {
    return (
        <div style={{ cursor: "pointer" }}>
            <Doughnut
                data={data}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
}
