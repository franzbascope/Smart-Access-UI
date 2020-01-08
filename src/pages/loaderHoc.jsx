import React from "react";
import { Spin, Alert } from "antd";
function WithLoading(Component) {
  return function WihLoadingComponent({ error, loading, success, ...props }) {
    if (loading)
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Spin size="large" />
        </div>
      );
    else
      return (
        <Component {...props}>
          {success ? (
            <Alert
              style={{ marginBottom: "10px" }}
              message={success}
              type="success"
              showIcon
              banner
              closable
            />
          ) : (
            ""
          )}
          {error ? (
            <Alert
              message="Error al obtener datos"
              type="error"
              showIcon
              banner
              closable
            />
          ) : (
            ""
          )}
        </Component>
      );
  };
}
export default WithLoading;
