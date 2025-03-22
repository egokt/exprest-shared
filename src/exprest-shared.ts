import express, { Router } from "express";
import * as expressCore from 'express-serve-static-core';
import { IncomingHttpHeaders } from "http";

export type ApiResponse<T> = {status?: number, isOk: boolean, data?: T};

export type SuccessfulEntityResponse<FEM_TYPE> = { entity: FEM_TYPE, };

export type SuccessfulEntityResponseWithOtherData<FEM_TYPE, OTHER_DATA_TYPE> = {
    entity: FEM_TYPE,
    other_data: OTHER_DATA_TYPE,
};

export type SuccessfulActionResponse<FEM_TYPE> = { actionResult: FEM_TYPE; };

export type SuccessfulCollectionResponse<FEM_TYPE> = { collection: Array<FEM_TYPE>; };

export type SuccessfulCollectionResponseWithOtherData<FEM_TYPE, OTHER_DATA_TYPE> =
    SuccessfulCollectionResponse<FEM_TYPE>
    & { other_data: OTHER_DATA_TYPE | undefined; };

export type ErrorResponse = { errors: Array<string>; };

export type SetLoggedOutFunction = () => void;

export type FetchFromApi<T> = (request: Request, options?: RequestInit) => Promise<ApiResponse<T>>;
export type FetchFromApiWithAuth<T> = (
    setLoggedOutFunction: SetLoggedOutFunction,
    request: Request,
    options?: RequestInit,
) => Promise<ApiResponse<T>>;

export type GetCollectionRequestBuilderProps =
    {resourceUrl: string, queryParams?: Object, headers?: {[key: string]: string}};
export type GetCollectionRequestBuilder = (props: GetCollectionRequestBuilderProps) => Request;

export type GetSingletonRequestBuilderProps =
    {resourceUrl: string, queryParams?: Object, headers?: {[key: string]: string}};
export type GetSingletonRequestBuilder = (props: GetSingletonRequestBuilderProps) => Request;

export type CreateRequestBuilderProps =
    {resourceUrl: string, data: any, queryParams?: Object, headers?: {[key: string]: string}};
export type CreateRequestBuilder = (props: CreateRequestBuilderProps) => Request;

export type UpdateSingletonRequestBuilderProps =
    {resourceUrl: string, data: any, queryParams?: Object, headers?: {[key: string]: string}};
export type UpdateSingletonRequestBuilder = (props: UpdateSingletonRequestBuilderProps) => Request;

export type GetEntityRequestBuilderProps<ID> =
    {collectionUrl: string, id: ID, queryParams?: Object, headers?: {[key: string]: string}};
export type GetEntityRequestBuilder = <ID = number>(props: GetEntityRequestBuilderProps<ID>) => Request;

export type UpdateEntityRequestBuilderProps<ID> =
    {collectionUrl: string, id: ID, data: any, queryParams?: Object, headers?: {[key: string]: string}};
export type UpdateEntityRequestBuilder = <ID = number>(props: UpdateEntityRequestBuilderProps<ID>) => Request;

export type DeleteEntityRequestBuilderProps<ID> =
    {collectionUrl: string, id: ID, queryParams?: Object, headers?: {[key: string]: string}};
export type DeleteEntityRequestBuilder = <ID = number>(props: DeleteEntityRequestBuilderProps<ID>) => Request;

export type DeleteSingletonRequestBuilderProps =
    {resourceUrl: string, queryParams?: Object, headers?: {[key: string]: string}};
export type DeleteSingletonRequestBuilder = (props: DeleteSingletonRequestBuilderProps) => Request;

export type ActionRequestBuilderProps = {url: string, data?: any, queryParams?: Object, headers?: {[key: string]: string}};
export type ActionRequestBuilder = (props: ActionRequestBuilderProps) => Request;

export type CreateContextWithAuthFunction<USER, CONTEXT> = (param0: {user: USER}) => CONTEXT | Promise<CONTEXT>;
export type CreateContextWoAuthFunction<CONTEXT> = (param0: {}) => CONTEXT | Promise<CONTEXT>;

type SanitizeFunctionNonPromiseReturnType<SANITIZED> = [Array<string>, null] | [null, SANITIZED];
type SanitizeFunctionReturnType<SANITIZED> =
    Promise<SanitizeFunctionNonPromiseReturnType<SANITIZED>> | SanitizeFunctionNonPromiseReturnType<SANITIZED>;

export type SanitizeIdFunction<ID> = (param0: {idParam: string}) => SanitizeFunctionNonPromiseReturnType<ID>;

type SanitizeHeadersWoAuthFunctionProps<CONTEXT> = {
    unsanitizedHeaders: IncomingHttpHeaders;
    context: CONTEXT;
};
export type SanitizeHeadersWoAuthFunction<CONTEXT, SANITIZED_HEADERS> =
    (param0: SanitizeHeadersWoAuthFunctionProps<CONTEXT>) => SanitizeFunctionReturnType<SANITIZED_HEADERS>;
type SanitizeHeadersWoAuthWithIdFunctionProps<ID, CONTEXT> =
    SanitizeHeadersWoAuthFunctionProps<CONTEXT> & { submittedEntityId: ID; };
export type SanitizeHeadersWoAuthWithIdFunction<ID, CONTEXT, SANITIZED_HEADERS> =
    (param0: SanitizeHeadersWoAuthWithIdFunctionProps<ID, CONTEXT>) => SanitizeFunctionReturnType<SANITIZED_HEADERS>;
type SanitizeHeadersWithAuthFunctionProps<USER, CONTEXT> =
    SanitizeHeadersWoAuthFunctionProps<CONTEXT> & { user: USER; };
export type SanitizeHeadersWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS> =
    (param0: SanitizeHeadersWithAuthFunctionProps<USER, CONTEXT>) => SanitizeFunctionReturnType<SANITIZED_HEADERS>;
type SanitizeHeadersWithAuthWithIdFunctionProps<ID, USER, CONTEXT> =
    SanitizeHeadersWoAuthWithIdFunctionProps<ID, CONTEXT> & { user: USER; };
export type SanitizeHeadersWithAuthWithIdFunction<ID, USER, CONTEXT, SANITIZED_HEADERS> =
    (param0: SanitizeHeadersWithAuthWithIdFunctionProps<ID, USER, CONTEXT>)
        => SanitizeFunctionReturnType<SANITIZED_HEADERS>;

type SanitizeParamsWoAuthFunctionProps<CONTEXT, SANITIZED_HEADERS> = {
    unsanitizedParams: any;
    headers: SANITIZED_HEADERS;
    context: CONTEXT;
};
export type SanitizeParamsWoAuthFunction<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS> =
    (param0: SanitizeParamsWoAuthFunctionProps<CONTEXT, SANITIZED_HEADERS>)
        => SanitizeFunctionReturnType<SANITIZED_PARAMS>;

type SanitizeParamsWoAuthWithIdFunctionProps<ID, CONTEXT, SANITIZED_HEADERS> =
    SanitizeParamsWoAuthFunctionProps<CONTEXT, SANITIZED_HEADERS> & { submittedEntityId: ID, };
export type SanitizeParamsWoAuthWithIdFunction<ID, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS> =
    (param0: SanitizeParamsWoAuthWithIdFunctionProps<ID, CONTEXT, SANITIZED_HEADERS>)
        => SanitizeFunctionReturnType<SANITIZED_PARAMS>;

type SanitizeParamsWithAuthFunctionProps<USER, CONTEXT, SANITIZED_HEADERS> =
    SanitizeParamsWoAuthFunctionProps<CONTEXT, SANITIZED_HEADERS> & { user: USER, };
export type SanitizeParamsWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS> =
    (param0: SanitizeParamsWithAuthFunctionProps<USER, CONTEXT, SANITIZED_HEADERS>)
        => SanitizeFunctionReturnType<SANITIZED_PARAMS>;

type SanitizeParamsWithAuthWithIdFunctionProps<ID, USER, CONTEXT, SANITIZED_HEADERS> =
    SanitizeParamsWoAuthWithIdFunctionProps<ID, CONTEXT, SANITIZED_HEADERS> & { user: USER, };
export type SanitizeParamsWithAuthWithIdFunction<ID, USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS> =
    (param0: SanitizeParamsWithAuthWithIdFunctionProps<ID, USER, CONTEXT, SANITIZED_HEADERS>)
        => SanitizeFunctionReturnType<SANITIZED_PARAMS>;

type SanitizeBodyWoAuthFunctionProps<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS> = {
    unsanitizedBody: {[key in string]?: any},
    context: CONTEXT,
    headers: SANITIZED_HEADERS,
    params: SANITIZED_PARAMS
};
export type SanitizeBodyWoAuthFunction<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY> =
    (param0: SanitizeBodyWoAuthFunctionProps<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>) => SanitizeFunctionReturnType<SANITIZED_BODY>;

type SanitizeBodyWithAuthFunctionProps<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS> =
    SanitizeBodyWoAuthFunctionProps<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS> & { user: USER, };
export type SanitizeBodyWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY> =
    (param0: SanitizeBodyWithAuthFunctionProps<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>) =>
        SanitizeFunctionReturnType<SANITIZED_BODY>;

type SanitizeBodyWoAuthWithIdFunctionProps<ID, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS> =
    SanitizeBodyWoAuthFunctionProps<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS> & { submittedEntityId: ID, };
export type SanitizeBodyWoAuthWithIdFunction<ID, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY> =
    (param0: SanitizeBodyWoAuthWithIdFunctionProps<ID, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>) =>
        SanitizeFunctionReturnType<SANITIZED_BODY>;

type SanitizeBodyWithAuthWithIdFunctionProps<ID, USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS> =
    SanitizeBodyWoAuthWithIdFunctionProps<ID, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS> & { user: USER, };
export type SanitizeBodyWithAuthWithIdFunction<ID, USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY> =
    (param0: SanitizeBodyWithAuthWithIdFunctionProps<ID, USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>) =>
        SanitizeFunctionReturnType<SANITIZED_BODY>;

type ConvertToFrontEndEntityWoAuthFunctionProps<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> = {
    entity: ENTITY,
    context: CONTEXT,
    headers: SANITIZED_HEADERS,
    params: SANITIZED_PARAMS,
};
export type ConvertToFrontEndEntityWoAuthFunction<
    ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    (param0: ConvertToFrontEndEntityWoAuthFunctionProps<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => Promise<FRONT_END_ENTITY> | FRONT_END_ENTITY;

type ConvertToFrontEndEntityWoAuthWithIdFunctionProps<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    ConvertToFrontEndEntityWoAuthFunctionProps<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> &
    { submittedEntityId: ID, };
export type ConvertToFrontEndEntityWoAuthWithIdFunction<
    ID, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    (param0: ConvertToFrontEndEntityWoAuthWithIdFunctionProps<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => Promise<FRONT_END_ENTITY> | FRONT_END_ENTITY;

type ConvertToFrontEndEntityWithAuthFunctionProps<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    ConvertToFrontEndEntityWoAuthFunctionProps<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> & {user: USER};
export type ConvertToFrontEndEntityWithAuthFunction<
    USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    (param0: ConvertToFrontEndEntityWithAuthFunctionProps<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => Promise<FRONT_END_ENTITY> | FRONT_END_ENTITY;

type ConvertToFrontEndEntityWithAuthWithIdFunctionProps<
    ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    ConvertToFrontEndEntityWoAuthWithIdFunctionProps<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> &
    {user: USER};
export type ConvertToFrontEndEntityWithAuthWithIdFunction<
    ID, USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT
> =
    (param0: ConvertToFrontEndEntityWithAuthWithIdFunctionProps<
        ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => Promise<FRONT_END_ENTITY> | FRONT_END_ENTITY;

type OtherDataFunctionReturnType<OTHER_DATA> =
    OTHER_DATA extends null ? (Promise<void> | void) : (Promise<OTHER_DATA> | OTHER_DATA);
type OtherDataBaseFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> = {
    context: CONTEXT,
    headers: SANITIZED_HEADERS,
    params: SANITIZED_PARAMS,
};

type OtherDataWoAuthWithEntitiesFunctionProps<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    OtherDataBaseFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> & {entities: Array<ENTITY>};
export type OtherDataWoAuthWithEntitiesFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA> =
    (param0: OtherDataWoAuthWithEntitiesFunctionProps<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => OtherDataFunctionReturnType<OTHER_DATA>;

type OtherDataWithAuthWithEntitiesFunctionProps<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    OtherDataWoAuthWithEntitiesFunctionProps<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> & {user: USER};
export type OtherDataWithAuthWithEntitiesFunction<
    USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA> =
    (param0: OtherDataWithAuthWithEntitiesFunctionProps<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => OtherDataFunctionReturnType<OTHER_DATA>;

type OtherDataWoAuthWithEntityFunctionProps<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    OtherDataBaseFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> & { entity: ENTITY, };
export type OtherDataWoAuthWithEntityFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA> =
    (param0: OtherDataWoAuthWithEntityFunctionProps<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => OtherDataFunctionReturnType<OTHER_DATA>;

type OtherDataWithAuthWithEntityFunctionProps<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    OtherDataWoAuthWithEntityFunctionProps<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> & {user: USER};
export type OtherDataWithAuthWithEntityFunction<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA> =
    (param0: OtherDataWithAuthWithEntityFunctionProps<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => OtherDataFunctionReturnType<OTHER_DATA>;

type OtherDataWoAuthWithEntityWithIdFunctionProps<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    OtherDataWoAuthWithEntityFunctionProps<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> &
    { submittedEntityId: ID, };
export type OtherDataWoAuthWithEntityWithIdFunction<
    ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA> =
    (param0: OtherDataWoAuthWithEntityWithIdFunctionProps<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => OtherDataFunctionReturnType<OTHER_DATA>;

type OtherDataWithAuthWithEntityWithIdFunctionProps<ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    OtherDataWoAuthWithEntityWithIdFunctionProps<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> & {user: USER};
export type OtherDataWithAuthWithEntityWithIdFunction<
    ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA> =
    (param0: OtherDataWithAuthWithEntityWithIdFunctionProps<ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => OtherDataFunctionReturnType<OTHER_DATA>;

type PostExecutionFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION = {}> = {
    status: number,
    isSuccessful: boolean,
    headers?: SANITIZED_HEADERS,
    params?: SANITIZED_PARAMS,
    context: CONTEXT
} & EXTENSION;

export type PostExecutionFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION = {}> =
    (param0: PostExecutionFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION>) => (void | Promise<void>);

export type PostExecutionFunctionWithEntity<ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    PostExecutionFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { entity?: ENTITY, feEntity?: FRONT_END_ENTITY }>;
export type PostExecutionFunctionWithEntities<ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    PostExecutionFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT,
        { entities?: Array<ENTITY>, feEntities?: Array<FRONT_END_ENTITY> }>;
export type PostExecutionFunctionWithId<ID, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    PostExecutionFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { submittedEntityId?: ID, }>;
export type PostExecutionFunctionWithIdWithEntity<ID, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    PostExecutionFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT,
        { submittedEntityId?: ID, entity?: ENTITY, feEntity?: FRONT_END_ENTITY }>;
export type PostExecutionFunctionWithBody<SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    PostExecutionFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { body?: SANITIZED_BODY, }>;
export type PostExecutionFunctionWithBodyWithEntity<
    ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    PostExecutionFunction<
        SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { body?: SANITIZED_BODY, entity?: ENTITY, feEntity?: FRONT_END_ENTITY }>;
export type PostExecutionFunctionWithBodyWithEntityWithId<
    ID, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    PostExecutionFunction<
        SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT,
        { submittedEntityId?: ID, body?: SANITIZED_BODY, entity?: ENTITY, feEntity?: FRONT_END_ENTITY }>;
export type PostExecutionFunctionWithUser<USER, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    PostExecutionFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { user: USER }>;
export type PostExecutionFunctionWithUserWithEntities<USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    PostExecutionFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT,
        { user: USER, entities?: Array<ENTITY>, feEntities?: Array<FRONT_END_ENTITY> }>;
export type PostExecutionFunctionWithUserWithBodyWithEntity<
    USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    PostExecutionFunction<
        SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT,
        { user: USER, body?: SANITIZED_BODY, entity?: ENTITY, feEntity?: FRONT_END_ENTITY }>;
export type PostExecutionFunctionWithUserWithBodyWithEntityWithId<
    ID, USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    PostExecutionFunction<
        SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT,
        { user: USER, submittedEntityId?: ID, body?: SANITIZED_BODY, entity?: ENTITY, feEntity?: FRONT_END_ENTITY }>;
export type PostExecutionFunctionWithUserWithEntity<USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    PostExecutionFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { user: USER, entity?: ENTITY, feEntity?: FRONT_END_ENTITY }>;
export type PostExecutionFunctionWithUserWithId<ID, USER, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    PostExecutionFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { user: USER, submittedEntityId?: ID, }>;
export type PostExecutionFunctionWithUserWithIdWithEntity<ID, USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    PostExecutionFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT,
        { user: USER, submittedEntityId?: ID, entity?: ENTITY, feEntity?: FRONT_END_ENTITY }>;
export type ActionPostExecutionFunction<ACTION_RESPONSE_CONTENT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    PostExecutionFunction<
        SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { body?: SANITIZED_BODY, actionResponseContent?: ACTION_RESPONSE_CONTENT }>;
export type ActionPostExecutionFunctionWithUser<USER, ACTION_RESPONSE_CONTENT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    PostExecutionFunction<
        SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT,
        { user: USER, body?: SANITIZED_BODY, actionResponseContent?: ACTION_RESPONSE_CONTENT }>;

type EntityReturningExpressResponseType<ENTITY, FRONT_END_ENTITY, OTHER_DATA> =
    express.Response<
        OTHER_DATA extends never
            ? SuccessfulEntityResponse<FRONT_END_ENTITY>
            : SuccessfulEntityResponseWithOtherData<ENTITY, OTHER_DATA>
    >;
export type EntityReturningRequestHandlerFunction<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_PARAMS extends {[key: string]: string},
    OTHER_DATA extends Object | null = null
> =
    (
        req: express.Request<expressCore.ParamsDictionary, any, {[key in keyof SANITIZED_PARAMS]?: any}>,
        res: EntityReturningExpressResponseType<ENTITY, FRONT_END_ENTITY, OTHER_DATA>
    ) => Promise<void>;

type CollectionReturningExpressResponseType<ENTITY, FRONT_END_ENTITY, OTHER_DATA> =
    express.Response<
        OTHER_DATA extends never
            ? SuccessfulCollectionResponse<FRONT_END_ENTITY>
            : SuccessfulCollectionResponseWithOtherData<ENTITY, OTHER_DATA>
    >;
export type GetCollectionRequestHandlerFunction<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_PARAMS extends {[key: string]: string},
    OTHER_DATA extends Object | null = null
> =
    (
        req: express.Request<expressCore.ParamsDictionary, any, {[key in keyof SANITIZED_PARAMS]?: any}>,
        res: CollectionReturningExpressResponseType<ENTITY, FRONT_END_ENTITY, OTHER_DATA>
    ) => Promise<void>;

type DetermineAuthorityToChangeFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION = {}> = {
    headers: SANITIZED_HEADERS,
    params: SANITIZED_PARAMS,
    context: CONTEXT
} & EXTENSION;
export type DetermineAuthorityToChangeFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION = {}> =
    (param0: DetermineAuthorityToChangeFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION>)
        => Promise<[Array<string>, false] | [null, true]> | [Array<string>, false] | [null, true];
export type DetermineAuthorityToChangeFunctionWithBody<SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    DetermineAuthorityToChangeFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { body: SANITIZED_BODY }>;
export type DetermineAuthorityToChangeFunctionWithBodyWithId<ID, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    DetermineAuthorityToChangeFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { submittedEntityId: ID, body: SANITIZED_BODY }>;
export type DetermineAuthorityToChangeFunctionWithId<ID, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    DetermineAuthorityToChangeFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { submittedEntityId: ID }>;
export type DetermineAuthorityToChangeFunctionWithUser<USER, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    DetermineAuthorityToChangeFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { user: USER }>;
export type DetermineAuthorityToChangeFunctionWithUserWithId<ID, USER, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    DetermineAuthorityToChangeFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { user: USER, submittedEntityId: ID }>;
export type DetermineAuthorityToChangeFunctionWithUserWithBody<USER, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    DetermineAuthorityToChangeFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { user: USER, body: SANITIZED_BODY }>;
export type DetermineAuthorityToChangeFunctionWithUserWithBodyWithId<
    ID, USER, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    DetermineAuthorityToChangeFunction<
        SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { user: USER, submittedEntityId: ID, body: SANITIZED_BODY }>;

type RetrieveEntityFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION = {}> = {
    headers: SANITIZED_HEADERS,
    params: SANITIZED_PARAMS,
    context: CONTEXT
} & EXTENSION;
export type RetrieveEntityFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION = {}> =
    (param0: RetrieveEntityFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION>)
        => Promise<ENTITY | null> | ENTITY | null;
export type RetrieveEntityFunctionWithId<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    RetrieveEntityFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { submittedEntityId: ID, }>;
export type RetriveEntityFunctionWithUser<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    RetrieveEntityFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { user: USER, }>;
export type RetrieveEntityFunctionWithUserWithId<ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    RetrieveEntityFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { user: USER, submittedEntityId: ID, }>;

type DeleteFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION = {}> = {
    headers: SANITIZED_HEADERS,
    params: SANITIZED_PARAMS,
    context: CONTEXT
} & EXTENSION;
export type DeleteFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION = {}> =
    (param0: DeleteFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, EXTENSION>)
        => Promise<ENTITY | null> | ENTITY | null;
export type DeleteFunctionWithId<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    DeleteFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { submittedEntityId: ID, }>;
export type DeleteFunctionWithUser<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    DeleteFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { user: USER, }>;
export type DeleteFunctionWithUserWithId<ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    DeleteFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, { user: USER, submittedEntityId: ID, }>;

type CreateOrUpdateFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT, EXTENSION = {}> = {
    headers: SANITIZED_HEADERS,
    params: SANITIZED_PARAMS,
    context: CONTEXT,
    body: SANITIZED_BODY,
} & EXTENSION;
export type CreateOrUpdateFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT, EXTENSION = {}> =
    (param0: CreateOrUpdateFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT, EXTENSION>)
        => Promise<ENTITY | null> | ENTITY | null;
export type CreateOrUpdateFunctionWithId<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    CreateOrUpdateFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT, { submittedEntityId: ID, }>;
export type CreateOrUpdateFunctionWithUser<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    CreateOrUpdateFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT, { user: USER, }>;
export type CreateOrUpdateFunctionWithUserWithId<ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    CreateOrUpdateFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT, { user: USER, submittedEntityId: ID, }>;

type ActionFunctionWoAuthProps<SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> = {
    context: CONTEXT,
    headers: SANITIZED_HEADERS,
    params: SANITIZED_PARAMS,
    body: SANITIZED_BODY,
    rawExpressRequest: express.Request<expressCore.ParamsDictionary, any, {[key in keyof SANITIZED_PARAMS]?: any}>;
};
type ActionFunctionWithAuthProps<USER, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    ActionFunctionWoAuthProps<SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> & { user: USER, };

type ActionFunctionNonPromiseReturnType<ACTION_RESPONSE_CONTENT> =
    {status: number, isSuccessful: true, actionResponseContent: ACTION_RESPONSE_CONTENT | null, errors?: undefined}
        | {status: number, isSuccessful: false, actionResponseContent?: undefined, errors: Array<string>};
type ActionFunctionReturnType<ACTION_RESPONSE_CONTENT> =
    Promise<ActionFunctionNonPromiseReturnType<ACTION_RESPONSE_CONTENT>>
        | ActionFunctionNonPromiseReturnType<ACTION_RESPONSE_CONTENT>;

export type ActionFunctionWithAuth<USER, ACTION_RESPONSE_CONTENT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    (param0: ActionFunctionWithAuthProps<USER, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>) =>
        ActionFunctionReturnType<ACTION_RESPONSE_CONTENT>;

export type ActionFunctionWoAuth<ACTION_RESPONSE_CONTENT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT> =
    (param0: ActionFunctionWoAuthProps<SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>) =>
        ActionFunctionReturnType<ACTION_RESPONSE_CONTENT>;

export type ActionRequestHandlerFunction<ACTION_RESPONSE_CONTENT, SANITIZED_PARAMS> =
    (
        req: express.Request<expressCore.ParamsDictionary, any, {[key in keyof SANITIZED_PARAMS]?: any}>,
        res: express.Response<
            ACTION_RESPONSE_CONTENT extends null ? null : SuccessfulActionResponse<ACTION_RESPONSE_CONTENT>
        >
    ) => Promise<void>;

export type ActionWithAuthRequestHandlerFactoryProps<
    USER,
    ACTION_RESPONSE_CONTENT extends Object | null,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {}
> = {
    contextCreateFunction: CreateContextWithAuthFunction<USER, CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    sanitizeBodyFunction: SanitizeBodyWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY>,
    actionFunction:
        ActionFunctionWithAuth<USER, ACTION_RESPONSE_CONTENT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    postExecutionFunction?:
        ActionPostExecutionFunctionWithUser<
            USER, ACTION_RESPONSE_CONTENT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
};

export type ActionWithAuthRequestHandlerFactory<
    USER,
    ACTION_RESPONSE_CONTENT extends Object | null,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {}
> = (
    props: ActionWithAuthRequestHandlerFactoryProps<
        USER, ACTION_RESPONSE_CONTENT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>
) => ActionRequestHandlerFunction<ACTION_RESPONSE_CONTENT, SANITIZED_PARAMS>;

export type ActionWoAuthRequestHandlerFactoryProps<
    ACTION_RESPONSE_CONTENT extends Object | null,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {}
>  = {
    contextCreateFunction: CreateContextWoAuthFunction<CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWoAuthFunction<CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWoAuthFunction<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    sanitizeBodyFunction: SanitizeBodyWoAuthFunction<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY>,
    actionFunction: ActionFunctionWoAuth<ACTION_RESPONSE_CONTENT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    postExecutionFunction?:
        ActionPostExecutionFunction<ACTION_RESPONSE_CONTENT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
};

export type ActionWoAuthRequestHandlerFactory<
    ACTION_RESPONSE_CONTENT extends Object | null,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {}
>  = (
    props: ActionWoAuthRequestHandlerFactoryProps<ACTION_RESPONSE_CONTENT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>
) => ActionRequestHandlerFunction<ACTION_RESPONSE_CONTENT, SANITIZED_PARAMS>;

export type CreateWoAuthRequestHandlerFactoryProps<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = {
    contextCreateFunction: CreateContextWoAuthFunction<CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWoAuthFunction<CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWoAuthFunction<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    sanitizeBodyFunction: SanitizeBodyWoAuthFunction<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY>,
    determineAuthorityToCreateFunction?:
        DetermineAuthorityToChangeFunctionWithBody<SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    createEntityFunction: CreateOrUpdateFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    convertToFrontEndEntityFunction?:
        ConvertToFrontEndEntityWoAuthFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWoAuthWithEntityFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithBodyWithEntity<
            ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
};

export type CreateWoAuthRequestHandlerFactory<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = (
    props: CreateWoAuthRequestHandlerFactoryProps<
        ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT, OTHER_DATA>
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type CreateWithAuthRequestHandlerFactoryProps<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = {
    contextCreateFunction: CreateContextWithAuthFunction<USER, CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    sanitizeBodyFunction: SanitizeBodyWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY>,
    determineAuthorityToCreateFunction?:
        DetermineAuthorityToChangeFunctionWithUserWithBody<USER, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    createEntityFunction: CreateOrUpdateFunctionWithUser<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    convertToFrontEndEntityFunction?:
        ConvertToFrontEndEntityWithAuthFunction<USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWithAuthWithEntityFunction<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithUserWithBodyWithEntity<
            USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
};
 
export type CreateWithAuthRequestHandlerFactory<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = (
    props: CreateWithAuthRequestHandlerFactoryProps<
        USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT, OTHER_DATA>
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type DeleteEntityWoAuthRequestHandlerFactoryProps<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number
> = {
    idParamName?: string,
    contextCreateFunction: CreateContextWoAuthFunction<CONTEXT>,
    sanitizeIdFunction: SanitizeIdFunction<ID>,
    sanitizeHeadersFunction: SanitizeHeadersWoAuthWithIdFunction<ID, CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWoAuthWithIdFunction<ID, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    determineAuthorityToDeleteFunction?: DetermineAuthorityToChangeFunctionWithId<ID, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    deleteEntityFunction: DeleteFunctionWithId<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    convertToFrontEndEntityFunction?:
        ConvertToFrontEndEntityWoAuthWithIdFunction<ID, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWoAuthWithEntityWithIdFunction<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithIdWithEntity<ID, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
};
 
export type DeleteEntityWoAuthRequestHandlerFactory<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number
> = (
    props: DeleteEntityWoAuthRequestHandlerFactoryProps<
        ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA, ID>
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type DeleteEntityWithAuthRequestHandlerFactoryProps<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number
> = {
    idParamName?: string,
    contextCreateFunction: CreateContextWithAuthFunction<USER, CONTEXT>,
    sanitizeIdFunction: SanitizeIdFunction<ID>,
    sanitizeHeadersFunction: SanitizeHeadersWithAuthWithIdFunction<ID, USER, CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWithAuthWithIdFunction<ID, USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    determineAuthorityToDeleteFunction?:
        DetermineAuthorityToChangeFunctionWithUserWithId<ID, USER, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    deleteEntityFunction: DeleteFunctionWithUserWithId<ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    convertToFrontEndEntityFunction?:
        ConvertToFrontEndEntityWithAuthWithIdFunction<
            ID, USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA
            | OtherDataWithAuthWithEntityWithIdFunction<
                ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithUserWithIdWithEntity<
            ID, USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>
};
 
export type DeleteEntityWithAuthRequestHandlerFactory<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number
> = (
    props: DeleteEntityWithAuthRequestHandlerFactoryProps<
        USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA, ID>
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type DeleteSingletonWoAuthRequestHandlerFactoryProps<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = {
    contextCreateFunction: CreateContextWoAuthFunction<CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWoAuthFunction<CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWoAuthFunction<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    determineAuthorityToDeleteFunction?: DetermineAuthorityToChangeFunction<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    deleteEntityFunction: DeleteFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    convertToFrontEndEntityFunction?:
        ConvertToFrontEndEntityWoAuthFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?: OTHER_DATA
        | OtherDataWoAuthWithEntityFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithEntity<ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
};
 
export type DeleteSingletonWoAuthRequestHandlerFactory<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = (
    props: DeleteSingletonWoAuthRequestHandlerFactoryProps<
        ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type DeleteSingletonWithAuthRequestHandlerFactoryProps<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = {
    contextCreateFunction: CreateContextWithAuthFunction<USER, CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    determineAuthorityToDeleteFunction?:
        DetermineAuthorityToChangeFunctionWithUser<USER, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    deleteEntityFunction: DeleteFunctionWithUser<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    convertToFrontEndEntityFunction?:
        ConvertToFrontEndEntityWithAuthFunction<USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWithAuthWithEntityFunction<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithUserWithEntity<USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
};
 
export type DeleteSingletonWithAuthRequestHandlerFactory<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = (
    props: DeleteSingletonWithAuthRequestHandlerFactoryProps<
        USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

type RetrieveCollectionWoAuthFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> = {
    context: CONTEXT,
    headers: SANITIZED_HEADERS,
    params: SANITIZED_PARAMS,
};
type RetrieveCollectionWoAuthFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    (param0: RetrieveCollectionWoAuthFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => Promise<Array<ENTITY>> | Array<ENTITY>;

type RetrieveCollectionWithAuthFunctionProps<USER, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    RetrieveCollectionWoAuthFunctionProps<SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> & {user: USER};
type RetrieveCollectionWithAuthFunction<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT> =
    (param0: RetrieveCollectionWithAuthFunctionProps<USER, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>)
        => Promise<Array<ENTITY>> | Array<ENTITY>;

export type GetCollectionWoAuthRequestHandlerFactoryProps<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = {
    contextCreateFunction: CreateContextWoAuthFunction<CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWoAuthFunction<CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWoAuthFunction<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    retrieveEntityCollectionFunction: RetrieveCollectionWoAuthFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    convertToFrontEndEntityFunction:
        ConvertToFrontEndEntityWoAuthFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWoAuthWithEntitiesFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?: PostExecutionFunctionWithEntities<ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
};

export type GetCollectionWoAuthRequestHandlerFactory<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = (
    props: GetCollectionWoAuthRequestHandlerFactoryProps<
        ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>
) => GetCollectionRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type GetCollectionWithAuthRequestHandlerFactoryProps<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = {
    contextCreateFunction: CreateContextWithAuthFunction<USER, CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    retrieveEntityCollectionFunction: RetrieveCollectionWithAuthFunction<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    convertToFrontEndEntityFunction:
        ConvertToFrontEndEntityWithAuthFunction<USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWithAuthWithEntitiesFunction<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithUserWithEntities<USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
};

export type GetCollectionWithAuthRequestHandlerFactory<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = (
    props: GetCollectionWithAuthRequestHandlerFactoryProps<
        USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>
) => GetCollectionRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type GetEntityWoAuthRequestHandlerFactoryProps<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends { [key: string]: string; },
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number,
> = {
    idParamName?: string,
    contextCreateFunction: CreateContextWoAuthFunction<CONTEXT>,
    sanitizeIdFunction: SanitizeIdFunction<ID>,
    sanitizeHeadersFunction: SanitizeHeadersWoAuthWithIdFunction<ID, CONTEXT, SANITIZED_HEADERS>;
    sanitizeParamsFunction: SanitizeParamsWoAuthWithIdFunction<ID, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    retrieveEntityFunction: RetrieveEntityFunctionWithId<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    convertToFrontEndEntityFunction:
        ConvertToFrontEndEntityWoAuthWithIdFunction<ID, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWoAuthWithEntityWithIdFunction<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithIdWithEntity<ID, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
};
 
export type GetEntityWoAuthRequestHandlerFactory<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number,
> = (
    props: GetEntityWoAuthRequestHandlerFactoryProps<
        ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA, ID>,
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type GetEntityWithAuthRequestHandlerFactoryProps<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number,
> = {
    idParamName?: string,
    contextCreateFunction: CreateContextWithAuthFunction<USER, CONTEXT>,
    sanitizeIdFunction: SanitizeIdFunction<ID>,
    sanitizeHeadersFunction: SanitizeHeadersWithAuthWithIdFunction<ID, USER, CONTEXT, SANITIZED_HEADERS>;
    sanitizeParamsFunction: SanitizeParamsWithAuthWithIdFunction<ID, USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    retrieveEntityFunction: RetrieveEntityFunctionWithUserWithId<ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    convertToFrontEndEntityFunction:
        ConvertToFrontEndEntityWithAuthWithIdFunction<
            ID, USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA
            | OtherDataWithAuthWithEntityWithIdFunction<ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithUserWithIdWithEntity<
            ID, USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
};
 
export type GetEntityWithAuthRequestHandlerFactory<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number,
> = (
    props: GetEntityWithAuthRequestHandlerFactoryProps<
        USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA, ID>,
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type GetSingletonWoAuthRequestHandlerFactoryProps<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = {
    contextCreateFunction: CreateContextWoAuthFunction<CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWoAuthFunction<CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWoAuthFunction<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    retrieveEntityFunction: RetrieveEntityFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    convertToFrontEndEntityFunction:
        ConvertToFrontEndEntityWoAuthFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWoAuthWithEntityFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?: PostExecutionFunctionWithEntity<ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
};
 
export type GetSingletonWoAuthRequestHandlerFactory<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = (
    props: GetSingletonWoAuthRequestHandlerFactoryProps<
        ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type GetSingletonWithAuthRequestHandlerFactoryProps<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = {
    contextCreateFunction: CreateContextWithAuthFunction<USER, CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    retrieveEntityFunction: RetriveEntityFunctionWithUser<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    convertToFrontEndEntityFunction:
        ConvertToFrontEndEntityWithAuthFunction<USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWithAuthWithEntityFunction<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithUserWithEntity<USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
};
 
export type GetSingletonWithAuthRequestHandlerFactory<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = (
    props: GetSingletonWithAuthRequestHandlerFactoryProps<
        USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type UpdateEntityWoAuthRequestHandlerFactoryProps<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY extends Object,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number,
> = {
    idParamName?: string,
    contextCreateFunction: CreateContextWoAuthFunction<CONTEXT>,
    sanitizeIdFunction: SanitizeIdFunction<ID>,
    sanitizeHeadersFunction: SanitizeHeadersWoAuthWithIdFunction<ID, CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWoAuthWithIdFunction<ID, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    sanitizeBodyFunction: SanitizeBodyWoAuthWithIdFunction<ID, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY>,
    determineAuthorityToUpdateFunction?:
        DetermineAuthorityToChangeFunctionWithBodyWithId<ID, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    updateEntityFunction: CreateOrUpdateFunctionWithId<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    convertToFrontEndEntityFunction?:
        ConvertToFrontEndEntityWoAuthWithIdFunction<ID, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWoAuthWithEntityWithIdFunction<ID, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithBodyWithEntityWithId<
            ID, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
};
 
export type UpdateEntityWoAuthRequestHandlerFactory<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY extends Object,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number,
> = (
    props: UpdateEntityWoAuthRequestHandlerFactoryProps<
        ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT, OTHER_DATA, ID>
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type UpdateEntityWithAuthRequestHandlerFactoryProps<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number,
> = {
    idParamName?: string,
    contextCreateFunction: CreateContextWithAuthFunction<USER, CONTEXT>,
    sanitizeIdFunction: SanitizeIdFunction<ID>,
    sanitizeHeadersFunction: SanitizeHeadersWithAuthWithIdFunction<ID, USER, CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWithAuthWithIdFunction<ID, USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    sanitizeBodyFunction: SanitizeBodyWithAuthWithIdFunction<ID, USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY>,
    determineAuthorityToUpdateFunction?:
        DetermineAuthorityToChangeFunctionWithUserWithBodyWithId<
            ID, USER, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    updateEntityFunction:
        CreateOrUpdateFunctionWithUserWithId<ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    convertToFrontEndEntityFunction?:
        ConvertToFrontEndEntityWithAuthWithIdFunction<
            ID, USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA
            | OtherDataWithAuthWithEntityWithIdFunction<ID, USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithUserWithBodyWithEntityWithId<
            ID, USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
};
 
export type UpdateEntityWithAuthRequestHandlerFactory<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null,
    ID = number,
> = (
    props: UpdateEntityWithAuthRequestHandlerFactoryProps<
        USER, ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, SANITIZED_HEADERS, SANITIZED_BODY, CONTEXT, OTHER_DATA, ID>
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type UpdateSingletonWoAuthRequestHandlerFactoryProps<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = {
    contextCreateFunction: CreateContextWoAuthFunction<CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWoAuthFunction<CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWoAuthFunction<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    sanitizeBodyFunction: SanitizeBodyWoAuthFunction<CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY>,
    determineAuthorityToUpdateFunction?:
        DetermineAuthorityToChangeFunctionWithBody<SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    updateEntityFunction: CreateOrUpdateFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    convertToFrontEndEntityFunction?:
        ConvertToFrontEndEntityWoAuthFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWoAuthWithEntityFunction<ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithBodyWithEntity<
            ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
};
 
 
export type UpdateSingletonWoAuthRequestHandlerFactory<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = (
    props: UpdateSingletonWoAuthRequestHandlerFactoryProps<
        ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, SANITIZED_HEADERS, SANITIZED_BODY, CONTEXT, OTHER_DATA>
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;

export type UpdateSingletonWithAuthRequestHandlerFactoryProps<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = {
    contextCreateFunction: CreateContextWithAuthFunction<USER, CONTEXT>,
    sanitizeHeadersFunction: SanitizeHeadersWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS>,
    sanitizeParamsFunction: SanitizeParamsWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS>,
    sanitizeBodyFunction: SanitizeBodyWithAuthFunction<USER, CONTEXT, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY>,
    determineAuthorityToUpdateFunction?:
        DetermineAuthorityToChangeFunctionWithUserWithBody<USER, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    updateEntityFunction: CreateOrUpdateFunctionWithUser<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
    convertToFrontEndEntityFunction?:
        ConvertToFrontEndEntityWithAuthFunction<USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT>,
    otherDataValueOrFunction?:
        OTHER_DATA | OtherDataWithAuthWithEntityFunction<USER, ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, CONTEXT, OTHER_DATA>,
    postExecutionFunction?:
        PostExecutionFunctionWithUserWithBodyWithEntity<
            USER, ENTITY, FRONT_END_ENTITY, SANITIZED_HEADERS, SANITIZED_PARAMS, SANITIZED_BODY, CONTEXT>,
};
 
export type UpdateSingletonWithAuthRequestHandlerFactory<
    USER,
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_HEADERS extends {[key: string]: string},
    SANITIZED_PARAMS extends {[key: string]: string},
    SANITIZED_BODY,
    CONTEXT extends Object = {},
    OTHER_DATA extends Object | null = null
> = (
    props: UpdateSingletonWithAuthRequestHandlerFactoryProps<
        USER, ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, SANITIZED_HEADERS, SANITIZED_BODY, CONTEXT, OTHER_DATA>
) => EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>;
 
export type AddActionRouteFunction<QUERY_PARAMS, RESPONSE_BODY> = (
    router: Router,
    path: string,
    requestHandler: ActionRequestHandlerFunction<RESPONSE_BODY, QUERY_PARAMS>,
) => void;

export type AddCreateRouteFunction<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_PARAMS extends {[key: string]: string},
    OTHER_DATA extends Object | null = null,
> = (
    router: Router,
    path: string,
    requestHandler: EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>,
) => void;

export type AddDeleteEntityRouteFunction<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_PARAMS extends {[key: string]: string},
    OTHER_DATA extends Object | null = null,
> = (
    idParamName: string,
    router: Router,
    path: string,
    requestHandler: EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>,
) => void;

export type AddDeleteSingletonRouteFunction<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_PARAMS extends {[key: string]: string},
    OTHER_DATA extends Object | null = null,
> = (
    router: Router,
    path: string,
    requestHandler: EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>,
) => void;

export type AddGetCollectionRouteFunction<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_PARAMS extends {[key: string]: string},
    OTHER_DATA extends Object | null = null,
> = (
    router: Router,
    path: string,
    requestHandler: GetCollectionRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>,
) => void;

export type AddGetEntityRouteFunction<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_PARAMS extends {[key: string]: string},
    OTHER_DATA extends Object | null = null,
> = (
    idParamName: string,
    router: Router,
    path: string,
    requestHandler: EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>,
) => void;

export type AddGetSingletonRouteFunction<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_PARAMS extends {[key: string]: string},
    OTHER_DATA extends Object | null = null,
> = (
    router: Router,
    path: string,
    requestHandler: EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>,
) => void;

export type AddUpdateEntityRouteFunction<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_PARAMS extends {[key: string]: string},
    OTHER_DATA extends Object | null = null,
> = (
    idParamName: string,
    router: import('express').Router,
    path: string,
    requestHandler: EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>,
) => void;

export type AddUpdateSingletonRouteFunction<
    ENTITY extends Object,
    FRONT_END_ENTITY extends Object,
    SANITIZED_PARAMS extends {[key: string]: string},
    OTHER_DATA extends Object | null = null,
> = (
    router: Router,
    path: string,
    requestHandler: EntityReturningRequestHandlerFunction<ENTITY, FRONT_END_ENTITY, SANITIZED_PARAMS, OTHER_DATA>,
) => void;
