// This import export of types is written this way to accomodate the webpack plugin we are using.
// Unfortunately, the plugin does not support the export type { ... } from '...' syntax.
import {
    ApiResponse as ApiResponseType,
    ErrorResponse as ErrorResponseType,
    SuccessfulEntityResponse as SuccessfulEntityResponseType,
    SuccessfulEntityResponseWithOtherData as SuccessfulEntityResponseWithOtherDataType,
    SuccessfulActionResponse as SuccessfulActionResponseType,
    SuccessfulCollectionResponse as SuccessfulCollectionResponseType,
    SuccessfulCollectionResponseWithOtherData as SuccessfulCollectionResponseWithOtherDataType,
} from './types/response-types.js';

export type ApiResponse<T> = ApiResponseType<T>;
export type ErrorResponse = ErrorResponseType;
export type SuccessfulEntityResponse<FEM_TYPE> = SuccessfulEntityResponseType<FEM_TYPE>;
export type SuccessfulEntityResponseWithOtherData<FEM_TYPE, OTHER_DATA_TYPE> =
    SuccessfulEntityResponseWithOtherDataType<FEM_TYPE, OTHER_DATA_TYPE>;
export type SuccessfulActionResponse<FEM_TYPE> = SuccessfulActionResponseType<FEM_TYPE>;
export type SuccessfulCollectionResponse<FEM_TYPE> = SuccessfulCollectionResponseType<FEM_TYPE>;
export type SuccessfulCollectionResponseWithOtherData<FEM_TYPE, OTHER_DATA_TYPE> =
    SuccessfulCollectionResponseWithOtherDataType<FEM_TYPE, OTHER_DATA_TYPE>;

export const dummy = null;