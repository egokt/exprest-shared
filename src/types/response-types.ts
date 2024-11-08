export type ApiResponse<T> = {status?: number, isOk: boolean, data?: T};

export type SuccessfulEntityResponse<FEM_TYPE> = {
    entity: FEM_TYPE,
};

export type SuccessfulEntityResponseWithOtherData<FEM_TYPE, OTHER_DATA_TYPE> = {
    entity: FEM_TYPE,
    other_data: OTHER_DATA_TYPE,
};


export type SuccessfulActionResponse<FEM_TYPE> = {
    actionResult: FEM_TYPE;
};

export type SuccessfulCollectionResponse<FEM_TYPE> = {
    collection: Array<FEM_TYPE>;
};
export type SuccessfulCollectionResponseWithOtherData<FEM_TYPE, OTHER_DATA_TYPE> =
    SuccessfulCollectionResponse<FEM_TYPE>
    & { other_data: OTHER_DATA_TYPE | undefined; };

export type ErrorResponse = {
    errors: Array<string>;
};
