"use client";
import { useEffect, useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Link from "next/link";
import Left from "@/components/icons/Left";

const PieChart = ({ data }) => {
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Staff Distribution',
    },
    series: [
      {
        name: 'Staff Count',
        colorByPoint: true,
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const StaffPieChartPage = () => {
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    const fetchStaffData = async () => {
      const response = await fetch("/api/allStaff");
      const data = await response.json();
      
      const staffCounts = data.reduce((counts, user) => {
        if (user.doctor) counts.doctors += 1;
        if (user.nurse) counts.nurses += 1;
        if (user.receptionist) counts.receptionists += 1;
        if (user.labTech) counts.labTechs += 1;
        if (user.pharmacist) counts.pharmacists += 1;
        return counts;
      }, { doctors: 0, nurses: 0, receptionists: 0, labTechs: 0, pharmacists: 0 });

      const pieData = [
        { name: 'Doctors', y: staffCounts.doctors },
        { name: 'Nurses', y: staffCounts.nurses },
        { name: 'Receptionists', y: staffCounts.receptionists },
        { name: 'Lab Techs', y: staffCounts.labTechs },
        { name: 'Pharmacists', y: staffCounts.pharmacists },
      ];

      setStaffData(pieData);
    };

    fetchStaffData();
  }, []);

  return (
    <section className="flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Staff Distribution Pie Chart</h1>
      <div className="w-full max-w-3xl">
        <PieChart data={staffData} />
      </div>
      <div className="max-w-xs mx-auto mt-8 ml-2">
        <Link href="/admin" className="btn">
          <Left />
          <span>Back to dashboard</span>
        </Link>
      </div>
    </section>
  );
};

export default StaffPieChartPage;
