import React, { useEffect, useState } from 'react';
import Section from './Section.jsx';
import update from 'immutability-helper';

const SectionList = ({ sections }) => {
    const [sectionList, setSectionList] = useState(sections);

    // useEffect for continously update
    useEffect(() => {
        setSectionList(sections);

    }, [sections]);

    const moveSection = (dragIndex, hoverIndex) => {
        const draggedSection = sectionList[dragIndex];
        setSectionList(
            update(sectionList, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, draggedSection],
                ],
            })
        );
    };

    return (
        <div>
            {sectionList.map((section, index) => (
                <Section
                    key={section.guid}
                    index={index}
                    section={section}
                    moveSection={moveSection}
                />
            ))}
        </div>
    );
};

export default SectionList;
