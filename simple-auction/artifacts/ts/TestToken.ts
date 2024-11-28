/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as TestTokenContractJson } from "../test/TestToken.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace TestTokenTypes {
  export type Fields = {
    totalSupply: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getSymbol: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getName: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getDecimals: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getTotalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  TestTokenInstance,
  TestTokenTypes.Fields
> {
  encodeFields(fields: TestTokenTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as TestTokenTypes.Fields;
  }

  at(address: string): TestTokenInstance {
    return new TestTokenInstance(address);
  }

  tests = {
    getSymbol: async (
      params: Omit<
        TestContractParamsWithoutMaps<TestTokenTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getSymbol", params, getContractByCodeHash);
    },
    getName: async (
      params: Omit<
        TestContractParamsWithoutMaps<TestTokenTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getName", params, getContractByCodeHash);
    },
    getDecimals: async (
      params: Omit<
        TestContractParamsWithoutMaps<TestTokenTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getDecimals", params, getContractByCodeHash);
    },
    getTotalSupply: async (
      params: Omit<
        TestContractParamsWithoutMaps<TestTokenTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getTotalSupply", params, getContractByCodeHash);
    },
    getToken: async (
      params: TestContractParamsWithoutMaps<
        TestTokenTypes.Fields,
        { sender: Address; amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "getToken", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const TestToken = new Factory(
  Contract.fromJson(
    TestTokenContractJson,
    "",
    "d959b6752da129d379f006c4280b0dc4960155fa453a51d0d055424781069f80",
    []
  )
);

// Use this class to interact with the blockchain
export class TestTokenInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<TestTokenTypes.State> {
    return fetchContractState(TestToken, this);
  }

  methods = {
    getSymbol: async (
      params?: TestTokenTypes.CallMethodParams<"getSymbol">
    ): Promise<TestTokenTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        TestToken,
        this,
        "getSymbol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getName: async (
      params?: TestTokenTypes.CallMethodParams<"getName">
    ): Promise<TestTokenTypes.CallMethodResult<"getName">> => {
      return callMethod(
        TestToken,
        this,
        "getName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getDecimals: async (
      params?: TestTokenTypes.CallMethodParams<"getDecimals">
    ): Promise<TestTokenTypes.CallMethodResult<"getDecimals">> => {
      return callMethod(
        TestToken,
        this,
        "getDecimals",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getTotalSupply: async (
      params?: TestTokenTypes.CallMethodParams<"getTotalSupply">
    ): Promise<TestTokenTypes.CallMethodResult<"getTotalSupply">> => {
      return callMethod(
        TestToken,
        this,
        "getTotalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends TestTokenTypes.MultiCallParams>(
    calls: Calls
  ): Promise<TestTokenTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      TestToken,
      this,
      calls,
      getContractByCodeHash
    )) as TestTokenTypes.MultiCallResults<Calls>;
  }
}