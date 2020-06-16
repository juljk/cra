import React, { Fragment } from 'react';
import TableTitle from './TableTitle';
import Button from './Button.jsx';

function Table({columns, data, tableDescriptor, deleteButton}) {
    return (
        <Fragment>
        <TableTitle
            title={tableDescriptor}
        />
        <table className="table">
            <thead>
            <tr className="table-active">
                <th scope="col">{tableDescriptor}</th>
                {columns.map(columnTitle => (
                    <th key={columnTitle} scope="col">{columnTitle}</th>
                ))}
                {deleteButton && <th></th>}
            </tr>
            </thead>
            <tbody>
            {data && data.map((item, index) => (
                <tr key={item.id}>
                    <th scope="row">{++index}</th>
                    {columns.map(columnTitle => (
                        <td key={item[columnTitle]+columnTitle}>{item[columnTitle]}</td>
                    ))}
                    {deleteButton && <td className="text-center">
                        <Button
                            label="Delete"
                            classes="btn btn-outline-danger"
                            onClick={() => deleteButton(--index)}
                        />
                    </td>}
                </tr>
            ))}
            {!data.length && <tr><td>Data not found</td></tr>}
            </tbody>
        </table>
        </Fragment>
    )
}

export default Table;
