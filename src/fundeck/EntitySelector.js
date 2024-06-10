import React from 'react';

const EntitySelector = ({ selectedEntity, setSelectedEntity }) => {
    const entities = ['Business', 'Finance', 'Analyste', 'Secteur', 'Investisseur'];

    return (
        <div className="entity-selector">
            {entities.map(entity => (
                <button
                    key={entity}
                    className={selectedEntity === entity ? 'active' : ''}
                    onClick={() => setSelectedEntity(entity)}
                >
                    {entity}
                </button>
            ))}
        </div>
    );
};

export default EntitySelector;
