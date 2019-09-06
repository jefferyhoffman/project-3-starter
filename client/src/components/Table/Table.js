import React from 'react';

export function Table({ children }) {
  return (
      <table className="table">
        {children}
      </table>
  )
}

export function TableHead() {
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

export function TableBody({ children }) {
  return (
    <tbody>
      {children}
    </tbody>
  )
}


