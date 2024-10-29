import React, {useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
} from 'chart.js';
import { Line, Bar, Pie, Bubble } from 'react-chartjs-2';

// Registering required chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);

// Line Chart for Sales Growth and Profit Growth
function LineChartKPI() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales Growth',
        data: [3, 2, 0, 4, 6, 7],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3,
      },
      {
        label: 'Profit Growth',
        data: [15, 4, 3, 2, 5, 19],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return <Line data={data} />;
}

// Bar Chart for Quarterly Revenue
function BarChartKPI() {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [20000, 25000, 22000, 30000],
        backgroundColor: [
          'tomato',
          'yellow',
          'blue',
          'rgba(75, 192, 19, 45)',
        ],
      },
    ],
  };

  return <Bar data={data} />;
}

// Pie Chart for Product Category Distribution
function PieChartKPI() {
  const data = {
    labels: ['Electronics', 'Furniture', 'Clothing', 'Other'],
    datasets: [
      {
        label: 'Product Categories',
        data: [40, 25, 20, 15],
        borderColor: 'transparent',
        backgroundColor: [
          'rgba(25, 9, 132, 0.6)',
          'rgba(254, 162, 100, 8)',
          'rgba(225, 6, 226, 0.6)',
          'rgba(0, 192, 2, 0.6)',
          'rgba(154, 122, 10, 0.6)',
          'rgba(15, 192, 2, 77.6)',
          'rgba(15, 192, 25, 0.6)',
          'rgba(225, 92, 112, 206)',
          'rgba(45, 192, 2, 45.6)',
          'rgba(0, 0, 0, 194.6)',
          'rgba(5, 12, 233, 47.6)',
        ],
      },
    ],
  };

  return <Pie data={data} />;
}

// Bubble Chart for Sales and Profit Growth
function BubbleKPI() {
  const data = {
    datasets: [
      {
        label: 'Sales Growth',
        data: [
          { x: 3, y: 2, r: 5 },
          { x: 5, y: 10, r: 10 },
          { x: 15, y: 15, r: 15 },
          { x: 7, y: 6, r: 8 },
          { x: 10, y: 8, r: 6 },
          { x: 13, y: 12, r: 7 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Profit Growth',
        data: [
          { x: 2, y: 4, r: 10 },
          { x: 8, y: 12, r: 15 },
          { x: 10, y: 10, r: 5 },
          { x: 15, y: 18, r: 20 },
          { x: 6, y: 8, r: 6 },
          { x: 12, y: 10, r: 8 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bubble Chart - Sales and Profit Growth',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Sales Metrics',
        },
        min: 0,
        max: 20,
      },
      y: {
        title: {
          display: true,
          text: 'Profit Metrics',
        },
        min: 0,
        max: 20,
      },
    },
  };

  return <Bubble data={data} options={options} />;
}
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Daily"); // Default option

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); 
    setIsOpen(false);
  };

  return (
    <div className="dropDown">
      <button onClick={toggleDropdown} className="filterKpi">
        <span className="mx-1">Filter : <span className='mx-3' style={{fontWeight:'500'}}>  {selectedOption}</span></span>
        <i className="fa fa-sort mx-2"></i>
      </button>
      {isOpen && (
        <div className="filterMenu">
          <a href="#" onClick={() => handleOptionClick("Daily")}>Daily</a>
          <a href="#" onClick={() => handleOptionClick("Weekly")}>Weekly</a>
          <a href="#" onClick={() => handleOptionClick("Monthly")}>Monthly</a>
        </div>
      )}
    </div>
  );
}


// Main KPI Dashboard Component
export default function KeyPerformanceIndicators() {
  return (
    <div className="kpi-ctn">
      <div className="kpi-filter">
            <Dropdown/>
        </div>
      <div className="container">
      <div className="kpi-item">
        <h3>Sales and Profit Trends</h3>
        <LineChartKPI />
      </div>
      <div className="kpi-item">
        <h3>Quarterly Revenue</h3>
        <BarChartKPI />
      </div>
      <div className="kpi-item">
        <h3>Product Category Distribution</h3>
        <PieChartKPI />
      </div>
      <div className="kpi-item">
        <h3>Operational Performance</h3>
        <BubbleKPI />
      </div>
    </div>
    </div>
    
  );
}
