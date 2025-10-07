import { ApiResponse } from "@/types";
import { Card, CardContent, Stack, Typography } from "@mui/material";

export type AviosPricePointsProps = Readonly<{
  data: ApiResponse;
}>;

export default function AviosPricePoints({ data }: AviosPricePointsProps) {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">
        Results for {data.route.departureAirportCode} →{" "}
        {data.route.arrivalAirportCode}
      </Typography>

      {data.pricePoints.map((pricePoint) => (
        <Card variant="outlined" key={pricePoint.percentage}>
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="h6">
                Use {pricePoint.percentage}% Avios
              </Typography>

              <Typography variant="body2">
                Cash discount: {pricePoint.cashDiscount.amount.toFixed(2)}{" "}
                {pricePoint.cashDiscount.currency}
              </Typography>

              <Typography variant="body2">
                Avios required: {pricePoint.aviosRequired.toLocaleString()}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
