import React, { useEffect, useState ,useContext} from 'react';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { AppContextData } from "../../context/app.context";
import { GENERAL_DETAILS_CARDS } from "../../constants/app.constants";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { isMobile } from 'react-device-detect';
const CardComponent = React.lazy(() => import("../card/card"));
import "./generalCards.component.css";

const GeneralCards = (props) => {
    const { state } = useContext(AppContextData);

    const { activeCases, deathCases, dischargedCases } = state;
    const [cards, setCards] = useState([]);

    useEffect(() => {
        updateCardDetails();
    }, [activeCases, deathCases, dischargedCases]);

    const getCardContainerStyle = () => {
        if (isMobile) {
            return { gridTemplateColumns: "auto" }
        }

        return { gridTemplateColumns: "auto auto auto" }
    }

    const updateCardDetails = () => {
        const generalCards = [];

        if (activeCases) {
            generalCards.push({
                heading: GENERAL_DETAILS_CARDS.ACTIVE_CASES.heading,
                body: getCardBody(activeCases),
            });
        }
        if (deathCases) {
            generalCards.push({
                heading: GENERAL_DETAILS_CARDS.DEATHS.heading,
                body: getCardBody(deathCases),
            });
        }
        if (dischargedCases) {
            generalCards.push({
                heading: GENERAL_DETAILS_CARDS.DISCHARGED.heading,
                body: getCardBody(dischargedCases),
            });
        }
        setCards(generalCards);
    }


    const getCardBody = (data) => {
        let cases = parseInt(data.cases);
        let change = parseInt(data.change);
        cases = cases.toLocaleString('en-IN');
        change = change.toLocaleString('en-IN');

        return (
            <div className="dashboard_card_body">
                <div className="generalcard_cases">{cases}</div>
                <div className="generalcard_subText">
                    <span className={`generalcard_change ${data.direction === "up" ? "success" : "error"}`}>{change}</span>
                    <span className="generalcard_arrow">
                        {data.direction === "up" ? <ArrowUpwardIcon color="success" fontSize="15px" /> :
                            <ArrowDownwardIcon color="error" fontSize="15px" />}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <div className="generalcards_container" style={getCardContainerStyle()}>
            {cards?.map(({ heading, body }, index) => (
                <div className="generalcard" key={index}>
                    <CardComponent heading={heading} body={body} customHeadingClass="outline_heading" />
                </div>
            ))}
        </div>
    );
}

export default GeneralCards;