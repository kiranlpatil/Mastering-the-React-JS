import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component<any, any> {
  renderCell = (
    item: any,
    column: { content: (arg0: any) => any; path: any }
  ) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item: { _id: any }, column: { path: any; key: any }) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item: { _id: React.Key | null | undefined }) => (
          <tr key={item._id}>
            {columns.map((column: any) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
