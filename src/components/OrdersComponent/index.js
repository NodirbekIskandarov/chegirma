import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

function OrdersComponent() {
  function createData(number, date, status, actions) {
    return { number, date, status, actions };
  }

  const rows = [
    createData("1", "07.05.2024", "Yangi", "Ko’rish"),
    createData("1", "07.05.2024", "Yangi", "Ko’rish"),
    createData("1", "07.05.2024", "Yangi", "Ko’rish"),
  ];
  return (
    <Stack sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            width: "auto",
            backgroundColor: "rgba(255, 1, 0, 0.6)",
            borderRadius: "10px",
            border: "1px solid rgba(30, 30, 30, 0.3)",
            padding: "10px 20px",
          }}
        >
          <Typography>Buyurtmalaringiz</Typography>
        </Box>
        <Box
          sx={{
            width: "auto",
            marginTop: "30px",
            padding: "10px",
          }}
        >
          <table
            style={{
              width: "100%",
              border: "1px solid black",
              borderCollapse: "collapse",
              textAlign: "center"
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                  }}
                >
                  Buyurtma
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                  }}
                >
                  Sana
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                  }}
                >
                  Holati
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                  }}
                >
                  Harakatlar
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item, index) => {
                return (
                  <tr key={index}>
                    <td
                      style={{
                        border: "1px solid black",
                        borderCollapse: "collapse",
                      }}
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        borderCollapse: "collapse",
                      }}
                    >
                      {item.date}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        borderCollapse: "collapse",
                      }}
                    >
                      {item.status}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        color: "rgba(255, 1, 0, 1)"
                      }}
                    >
                      {item.actions}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Box>
      </Box>
    </Stack>
  );
}
export default OrdersComponent;
