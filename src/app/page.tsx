"use client";

import { useCallback, useState } from "react";
import { Container, Typography, Button, Stack, Box } from "@mui/material";

import { calculatePricePointsAction } from "./actions/calculate-price-points-action";
import { FormProvider, useForm } from "react-hook-form";
import {
  AviosFormInput,
  AviosFormOutput,
  aviosFormResolver
} from "@/features/avios/forms/avios-form";
import AviosForm from "@/features/avios/components/AviosForm";
import { ApiResponse } from "@/types";
import AviosPricePoints from "@/features/avios/components/AviosPricePoints";

export default function Home() {
  const [data, setData] = useState<ApiResponse>();
  const form = useForm<AviosFormInput, undefined, AviosFormOutput>({
    resolver: aviosFormResolver
  });

  const { handleSubmit } = form;

  const onSubmit = useCallback(async (formData: AviosFormOutput) => {
    const response = await calculatePricePointsAction(formData);
    setData(response);
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h4">Avios Price Points</Typography>

        <FormProvider {...form}>
          <Stack spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
            <AviosForm />

            <Box>
              <Button type="submit" variant="contained">
                Calculate
              </Button>
            </Box>
          </Stack>
        </FormProvider>

        {data && <AviosPricePoints data={data} />}
      </Stack>
    </Container>
  );
}
