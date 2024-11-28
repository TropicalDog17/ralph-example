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
  Asset,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
  Narrow,
} from "@alephium/web3";
import { default as StableSwapContractJson } from "../StableSwap.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";

// Custom types for the contract
export namespace StableSwapTypes {
  export type Fields = {
    initialA: bigint;
    futureA: bigint;
    initialATime: bigint;
    futureATime: bigint;
    balances: [bigint, bigint, bigint];
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getA: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getD: {
      params: CallContractParams<{ xp: [bigint, bigint, bigint]; amp: bigint }>;
      result: CallContractResult<bigint>;
    };
    getY: {
      params: CallContractParams<{
        i: bigint;
        j: bigint;
        x: bigint;
        xp: [bigint, bigint, bigint];
      }>;
      result: CallContractResult<bigint>;
    };
    xp: {
      params: CallContractParams<{ pBalances: [bigint, bigint, bigint] }>;
      result: CallContractResult<[bigint, bigint, bigint]>;
    };
    exchange: {
      params: CallContractParams<{
        i: bigint;
        j: bigint;
        dx: bigint;
        min_dy: bigint;
      }>;
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
  export type MulticallReturnType<Callss extends MultiCallParams[]> = {
    [index in keyof Callss]: MultiCallResults<Callss[index]>;
  };

  export interface SignExecuteMethodTable {
    getA: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getD: {
      params: SignExecuteContractMethodParams<{
        xp: [bigint, bigint, bigint];
        amp: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    getY: {
      params: SignExecuteContractMethodParams<{
        i: bigint;
        j: bigint;
        x: bigint;
        xp: [bigint, bigint, bigint];
      }>;
      result: SignExecuteScriptTxResult;
    };
    xp: {
      params: SignExecuteContractMethodParams<{
        pBalances: [bigint, bigint, bigint];
      }>;
      result: SignExecuteScriptTxResult;
    };
    exchange: {
      params: SignExecuteContractMethodParams<{
        i: bigint;
        j: bigint;
        dx: bigint;
        min_dy: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  StableSwapInstance,
  StableSwapTypes.Fields
> {
  encodeFields(fields: StableSwapTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  consts = {
    N_COINS: BigInt("3"),
    FEE_DENOMINATOR: BigInt("10000000000"),
    LENDING_PRECISION: BigInt("1000000000000000000"),
    PRECISION: BigInt("1000000000000000000"),
  };

  at(address: string): StableSwapInstance {
    return new StableSwapInstance(address);
  }

  tests = {
    getA: async (
      params: Omit<
        TestContractParamsWithoutMaps<StableSwapTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getA", params, getContractByCodeHash);
    },
    getD: async (
      params: TestContractParamsWithoutMaps<
        StableSwapTypes.Fields,
        { xp: [bigint, bigint, bigint]; amp: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getD", params, getContractByCodeHash);
    },
    getY: async (
      params: TestContractParamsWithoutMaps<
        StableSwapTypes.Fields,
        { i: bigint; j: bigint; x: bigint; xp: [bigint, bigint, bigint] }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getY", params, getContractByCodeHash);
    },
    xp: async (
      params: TestContractParamsWithoutMaps<
        StableSwapTypes.Fields,
        { pBalances: [bigint, bigint, bigint] }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint, bigint]>> => {
      return testMethod(this, "xp", params, getContractByCodeHash);
    },
    exchange: async (
      params: TestContractParamsWithoutMaps<
        StableSwapTypes.Fields,
        { i: bigint; j: bigint; dx: bigint; min_dy: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "exchange", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: StableSwapTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const StableSwap = new Factory(
  Contract.fromJson(
    StableSwapContractJson,
    "",
    "afa3c5bffb9c52dd47f46dfdef872ccba77d8c66072050534a41612932846451",
    []
  )
);
registerContract(StableSwap);

// Use this class to interact with the blockchain
export class StableSwapInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<StableSwapTypes.State> {
    return fetchContractState(StableSwap, this);
  }

  view = {
    getA: async (
      params?: StableSwapTypes.CallMethodParams<"getA">
    ): Promise<StableSwapTypes.CallMethodResult<"getA">> => {
      return callMethod(
        StableSwap,
        this,
        "getA",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getD: async (
      params: StableSwapTypes.CallMethodParams<"getD">
    ): Promise<StableSwapTypes.CallMethodResult<"getD">> => {
      return callMethod(
        StableSwap,
        this,
        "getD",
        params,
        getContractByCodeHash
      );
    },
    getY: async (
      params: StableSwapTypes.CallMethodParams<"getY">
    ): Promise<StableSwapTypes.CallMethodResult<"getY">> => {
      return callMethod(
        StableSwap,
        this,
        "getY",
        params,
        getContractByCodeHash
      );
    },
    xp: async (
      params: StableSwapTypes.CallMethodParams<"xp">
    ): Promise<StableSwapTypes.CallMethodResult<"xp">> => {
      return callMethod(StableSwap, this, "xp", params, getContractByCodeHash);
    },
    exchange: async (
      params: StableSwapTypes.CallMethodParams<"exchange">
    ): Promise<StableSwapTypes.CallMethodResult<"exchange">> => {
      return callMethod(
        StableSwap,
        this,
        "exchange",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getA: async (
      params: StableSwapTypes.SignExecuteMethodParams<"getA">
    ): Promise<StableSwapTypes.SignExecuteMethodResult<"getA">> => {
      return signExecuteMethod(StableSwap, this, "getA", params);
    },
    getD: async (
      params: StableSwapTypes.SignExecuteMethodParams<"getD">
    ): Promise<StableSwapTypes.SignExecuteMethodResult<"getD">> => {
      return signExecuteMethod(StableSwap, this, "getD", params);
    },
    getY: async (
      params: StableSwapTypes.SignExecuteMethodParams<"getY">
    ): Promise<StableSwapTypes.SignExecuteMethodResult<"getY">> => {
      return signExecuteMethod(StableSwap, this, "getY", params);
    },
    xp: async (
      params: StableSwapTypes.SignExecuteMethodParams<"xp">
    ): Promise<StableSwapTypes.SignExecuteMethodResult<"xp">> => {
      return signExecuteMethod(StableSwap, this, "xp", params);
    },
    exchange: async (
      params: StableSwapTypes.SignExecuteMethodParams<"exchange">
    ): Promise<StableSwapTypes.SignExecuteMethodResult<"exchange">> => {
      return signExecuteMethod(StableSwap, this, "exchange", params);
    },
  };

  async multicall<Calls extends StableSwapTypes.MultiCallParams>(
    calls: Calls
  ): Promise<StableSwapTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends StableSwapTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<StableSwapTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | StableSwapTypes.MultiCallParams
      | StableSwapTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      StableSwap,
      this,
      callss,
      getContractByCodeHash
    );
  }
}