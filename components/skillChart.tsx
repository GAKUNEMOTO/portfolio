'use client';
import { skillchar } from '@/data/skillchart';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function SkillChart() {
    const chartRef = useRef<HTMLCanvasElement>(null); // chartRefの型を明示的に指定する
    const chartInstanceRef = useRef<Chart | null>(null); // Chartインスタンスの参照を保持するrefを追加

    useEffect(() => {
        if (!chartRef.current) return;

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return; // getContextがnullを返す可能性があるため、nullチェックを追加

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy(); // 以前のChartがあれば破棄する
        }

        const labels = skillchar.map(skill => skill.labels);
        const data = skillchar.map(skill => skill.data);
        const backgroundColor = skillchar.map(skill => skill.backgroundColor);
        const backgroundColorHV = skillchar.map(skill => skill.backgroundColorHv);

        chartInstanceRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Skills %',
                    data: data,
                    backgroundColor: backgroundColor.map(color => `rgba(${color})`),
                    borderColor: backgroundColorHV.map(color => `rgba(${color})`),
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                    }
                }
            }
        });
    }, [chartRef]);

    return (
        <div className='hover:shadow-lg bg-zinc-200 rounded-md flex justify-center items-center m-auto p-3 shadow-lg max-w-3xl h-max-content'>
            <canvas ref={chartRef} />
        </div>


    );
}
