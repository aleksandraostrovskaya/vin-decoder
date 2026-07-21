import type { DecodeVinResponse, VehicleVariablesResponse } from '../types/vin'
import api from './axios';

export const decodeVin = async (vin: string): Promise<DecodeVinResponse> => {
  const response = await api.get(`/vehicles/decodevin/${vin}`, {
    params: {
      format: 'json',
    },
  });

  return response.data;
};

export const getVehicleVariables = async (): Promise<VehicleVariablesResponse> => {
  const response = await api.get(`/vehicles/getvehiclevariablelist`, {
    params: {
      format: 'json',
    },
  });

	return response.data;
};
