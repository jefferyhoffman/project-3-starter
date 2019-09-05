import React from 'react';

export function Table({children}) {
  return (
    <div>
      <table className="table">
        {children}
      </table>
    </div>
  )
}

export function TalbeHead() {
  return (
    <thead>
      <tr>
        <th scope="col">Customer Name</th>
        <th scope="col">Contacted</th>
        <th scope="col">Date Reached Out</th>
        <th scope="col">Make Inactive</th>
      </tr>
    </thead>
  )
}

export function TableBody({children}) {
  return (
    <tbody>
      {children}
    </tbody>
  )
}
