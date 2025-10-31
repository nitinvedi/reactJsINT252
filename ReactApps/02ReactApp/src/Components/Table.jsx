
function Table() {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Component Type</td>
            <td>Functional Components</td>
          </tr>
          <tr>
            <td>Styling</td>
            <td>Can use CSS, inline styles, or styled-components</td>
          </tr>
          <tr>
            <td>State Management</td>
            <td>Handled using useState or useReducer hooks</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
