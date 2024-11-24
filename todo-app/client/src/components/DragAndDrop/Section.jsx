import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import Checkbox from '@mui/material/Checkbox';

const Section = ({ section, index, moveSection  }) => {
    const ref = React.useRef(null);

    // Starea pentru checkbox
    const [isChecked, setIsChecked] = useState(false);

    const [{ isDragging }, drag] = useDrag({
        type: 'SECTION',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: 'SECTION',
        hover: (item) => {
            if (item.index !== index) {
                moveSection(item.index, index);
                item.index = index;
            }
        },
    });

    drag(drop(ref));

    // Handler pentru checkbox
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        onCheckboxChange(isChecked);
    };

    const status = isChecked ? "Finished" : "Active";

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div
            ref={ref}
            style={{
                opacity: isDragging ? 1 : 1,
                transform: isDragging ? 'scale(1.05)' : 'scale(1)',
                transition: 'opacity 0.3s, transform 0.3s',
                padding: '16px',
                color: 'white',
                backgroundColor: '#191919',
                border: '1px solid #ddd',
            }}
        >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th>Task name</th>
                    <th>Description</th>
                    <th>Date created</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Finished?</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{section.title}</td>
                    <td
                        style={{
                            border: '1px solid #ddd',
                            padding: '8px',
                            wordBreak: 'break-word',
                            whiteSpace: 'normal',
                        }}
                    >
                        {section.description}
                    </td>
                    <td>{section.dateC}</td>
                    <td>{section.deadline}</td>
                    <td>{status}</td>
                    <td>
                        <Checkbox
                            {...label}
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Section;
