import React from 'react';
import Table from './common/Table.jsx';
import Form from './common/Form.jsx';

const PagePlanets = ({columns, data, tableDescriptor, initialData, onAddData, deleteButton}) => {
    return (
        <div className="container">
            <Table
                data={data}
                columns={columns}
                tableDescriptor={tableDescriptor}
                deleteButton={deleteButton}
            />
            <Form
                initialData={initialData}
                columns={columns}
                onAddData={onAddData}
            />
        </div>
    );
}

export default PagePlanets;