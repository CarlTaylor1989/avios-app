import { ApiResponse } from "@/types";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import { useMemo } from "react";

export type AviosPricePointsProps = Readonly<{
  data: ApiResponse;
}>;

export default function AviosPricePoints({ data }: AviosPricePointsProps) {
  const currencyFormat = useMemo(
    () =>
      new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
      }),
    []
  );

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
                Cash discount:{" "}
                {currencyFormat.format(pricePoint.cashDiscount.amount)}
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
