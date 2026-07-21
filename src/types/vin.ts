export interface DecodeVinResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: DecodeResult[];
}

export interface DecodeResult {
  Value: string | null;
  ValueId: string | null;
  Variable: string;
  VariableId: number;
}

export interface VehicleVariable {
  DataType: string;
  Description: string;
  GroupName: string;
  ID: number;
  Name: string;
}

export interface VehicleVariablesResponse {
  Count: number;
  Message: string;
  SearchCriteria: string | null;
  Results: VehicleVariable[];
}