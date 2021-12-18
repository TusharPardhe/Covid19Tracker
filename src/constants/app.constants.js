export const ROUTES = {
    DASHBOARD: "/dashboard",
    GRAPHS: "/graph",
    ABOUT: "/about",
}

export const ERROR_MSGS = {
    API_ERROR: "Some error occured",
};

export const GENERAL_DETAILS_CARDS = {
    ACTIVE_CASES: {
        heading: "Active Cases",
    },
    DEATHS: {
        heading: "Death Cases",
    },
    DISCHARGED: {
        heading: "Discharged Cases",
    }
};

export const STATE_WISE_DETAILS_TABLE_HEADERS = ["State Name", "Positive Cases", "Active Cases", "Cured/Discharged/Migrated Cases", "Death Cases", " "];

export const PAGINATION_TABLE_ROWS = [5, 10, 25, 50, 100];

export const GRAPH_LABELS = ['Active Cases', 'Positive Cases', 'Cured Cases', 'Death Cases'];

export const GRAPH_BACKGROUND_COLORS = [
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(255, 99, 132, 0.2)',
];

export const GRAPH_BORDER_COLORS = [
    'rgba(75, 192, 192, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(255, 99, 132, 1)',
];

export const GRAPH_NOTE = "Note: Press the colored buttons to interact";
