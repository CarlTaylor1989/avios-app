import { arrivalAirportCode, departureAirportCode } from "@/config";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { AviosFormInput, AviosFormOutput } from "../../forms/avios-form";

export default function AviosForm() {
  const { control } = useFormContext<
    AviosFormInput,
    undefined,
    AviosFormOutput
  >();

  return (
    <>
      <Controller
        control={control}
        name="departureAirportCode"
        render={({ field, fieldState }) => (
          <FormControl error={fieldState.invalid}>
            <InputLabel>Departure Airport</InputLabel>

            <Select label="Departure Airport" {...field}>
              {departureAirportCode.map((code) => (
                <MenuItem value={code} key={code}>
                  {code}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="arrivalAirportCode"
        render={({ field, fieldState }) => (
          <FormControl error={fieldState.invalid}>
            <InputLabel>Arrival Airport</InputLabel>

            <Select label="Arrival Airport" {...field}>
              {arrivalAirportCode.map((code) => (
                <MenuItem value={code} key={code}>
                  {code}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="departureTime"
        render={({ field, fieldState }) => (
          <FormControl error={fieldState.invalid}>
            <TextField
              label="Departure Time"
              type="datetime-local"
              {...field}
            />
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="arrivalTime"
        render={({ field, fieldState }) => (
          <FormControl error={fieldState.invalid}>
            <TextField label="Arrival Time" type="datetime-local" {...field} />
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="price"
        render={({ field, fieldState }) => (
          <FormControl error={fieldState.invalid}>
            <TextField label="Price" {...field} type="number" />
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="currency"
        render={({ field, fieldState }) => (
          <FormControl error={fieldState.invalid}>
            <InputLabel>Currency</InputLabel>

            <Select label="Currency" {...field}>
              <MenuItem value="GBP">GBP</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </>
  );
}
