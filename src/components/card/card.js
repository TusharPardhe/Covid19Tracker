import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./card.css";

const CardComponent = (props) => {
    const { heading, body, customCardClass, customHeadingClass, customBodyClass } = props;
    return (
        <Box>
            <Card variant="outlined" className={`${customCardClass} card_container`}  component="div">
                <CardContent>
                    {heading && (
                        <Typography variant="h5" component="div" className={customHeadingClass}>
                            {heading}
                        </Typography>
                    )}
                    {body && <Typography variant="body2"  component="div" className={customBodyClass}>{body}</Typography>}
                </CardContent>
            </Card>
        </Box>
    );
};

CardComponent.defaultProps = {
    heading: "Test Heading",
    body: "Write your text here",
    customCardClass: "",
    customHeadingClass: "",
    customBodyClass: "",
};

export default CardComponent;
