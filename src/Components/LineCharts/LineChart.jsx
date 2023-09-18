import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const mathMarks = [
        { "student_id": 1, "name": "Alice", "math_marks": 85, "physics_marks": 90, "chemistry_marks": 88 },
        { "student_id": 2, "name": "Bob", "math_marks": 78, "physics_marks": 85, "chemistry_marks": 92 },
        { "student_id": 3, "name": "Charlie", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 78 },
        { "student_id": 4, "name": "David", "math_marks": 65, "physics_marks": 75, "chemistry_marks": 80 },
        { "student_id": 5, "name": "Eve", "math_marks": 88, "physics_marks": 92, "chemistry_marks": 85 },
        { "student_id": 6, "name": "Frank", "math_marks": 76, "physics_marks": 80, "chemistry_marks": 70 },
        { "student_id": 7, "name": "Grace", "math_marks": 94, "physics_marks": 89, "chemistry_marks": 94 },
        { "student_id": 8, "name": "Helen", "math_marks": 72, "physics_marks": 78, "chemistry_marks": 82 },
        { "student_id": 9, "name": "Ian", "math_marks": 89, "physics_marks": 91, "chemistry_marks": 88 },
        { "student_id": 10, "name": "Jack", "math_marks": 81, "physics_marks": 84, "chemistry_marks": 90 }
    ]

    return (
        <div>
            <LChart width={800} height={400} data={mathMarks}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line type='monotone' dataKey='math_marks' stroke='#8884d8'></Line>
                <Line type='monotone' dataKey='physics_marks' stroke='#913831'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;