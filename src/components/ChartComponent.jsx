import React from 'react'
import { Line } from "react-chartjs-2"
import {
    Chart ,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ChartCompoent = () => {
    return (
        <div>
            Chart
        </div>
    )
}

export default ChartCompoent;
